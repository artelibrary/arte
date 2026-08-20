import {
  AbsoluteFill,
  Composition,
  Easing,
  Img,
  Interactive,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Header } from "./arte-search/Header";
import { AiPanel } from "./arte-search/AiPanel";
import { KeywordHeader } from "./arte-search/KeywordHeader";
import { DocSection } from "./arte-search/DocSection";
import { VideoSection } from "./arte-search/VideoSection";
import { RecommendSection } from "./arte-search/RecommendSection";
import { RegionSection } from "./arte-search/RegionSection";

export const ArteSearchComposition = () => {
  return (
    <Composition
      id="arte-search"
      component={ArteSearch}
      durationInFrames={830}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

// The search-results page is 1920x3648 once the AI answer has loaded. Two
// full-page renders back the whole video - `page-loading.png` (1920x3100,
// skeleton state) and `page-loaded.png` (1920x3648) - and every animated
// element is a window onto one of them. Each window follows the same three
// layers:
//
//   <div>              a static mask at the element's page coordinates
//     <Interactive.Div>  a crop-sized box that translates / scales / fades
//       <Img>              the full page render, offset negatively
//
// The crop-sized middle layer is what makes `scale` behave: scaling the
// full-page <Img> directly would pivot around the middle of the page rather
// than around the element.
//
// Only the header is pinned. The search bar scrolls away with the page and
// passes behind it, so it sits in the scrolling layer rather than in the
// pinned band.
//
// Page landmarks:
//   0     header top                      143  header bottom (pinned)
//   223   search pill                     321  pill bottom
//   401   AI panel top - 1600 wide, 753 tall while loading, 1301 once loaded
//   738   AI card row 1   1168  AI card row 2   1598  AI pagination
//   1785  "키워드 검색 결과"                1888  category tabs
//   1994  문서·도서   2476  영상   2873  추천   3240  지역
export const ArteSearch: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Scene"
      style={{ backgroundColor: "#ffffff", overflow: "hidden" }}
    >
      <Interactive.Div
        name="Page scroll"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 3648,
          // Wheel-flick scrolling: a quick move, then a pause long enough to
          // read the section that just arrived - not one continuous glide.
          // Each stop parks a section inside the 143-1080 window left under
          // the pinned header.
          //   0    AI panel loads and reveals            y=0
          //   240  flick
          //   275  AI card row 2 + pagination            y=620
          //   365  flick
          //   407  키워드 검색 결과 + 문서·도서            y=1380
          //   495  flick
          //   532  영상                                  y=1850
          //   595  flick
          //   630  추천                                  y=2250
          //   700  flick
          //   732  지역 (page bottom)                    y=2568
          translate: interpolate(
            frame,
            [0, 240, 275, 365, 407, 495, 532, 595, 630, 700, 732, 830],
            [
              "0px 0px",
              "0px 0px",
              "0px -620px",
              "0px -620px",
              "0px -1380px",
              "0px -1380px",
              "0px -1850px",
              "0px -1850px",
              "0px -2250px",
              "0px -2250px",
              "0px -2568px",
              "0px -2568px",
            ],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            },
          ),
        }}
      >
        {/* The search bar travels with the page and slides up behind the
            pinned header, so it is part of the scrolling layer. It never
            animates on its own - the scroll carries it. */}
        <div
          style={{
            position: "absolute",
            top: 143,
            left: 0,
            width: 1920,
            height: 258,
            overflow: "hidden",
          }}
        >
          <Img
            name="Search bar"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -143,
              left: 0,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </div>

        <Sequence name="AI panel">
          <AiPanel />
        </Sequence>
        <Sequence name="Keyword header" from={369} premountFor={fps}>
          <KeywordHeader />
        </Sequence>
        <Sequence name="문서·도서" from={385} premountFor={fps}>
          <DocSection />
        </Sequence>
        <Sequence name="영상" from={499} premountFor={fps}>
          <VideoSection />
        </Sequence>
        <Sequence name="추천" from={555} premountFor={fps}>
          <RecommendSection />
        </Sequence>
        <Sequence name="지역" from={610} premountFor={fps}>
          <RegionSection />
        </Sequence>
      </Interactive.Div>

      {/* The header stays put while the page - search bar included - moves
          under it, so it lives outside the scrolling layer. It collapses to
          its scrolled state over the first flick. */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 143,
          overflow: "hidden",
        }}
      >
        <Header />
      </div>
    </AbsoluteFill>
  );
};
