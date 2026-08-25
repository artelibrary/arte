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
      durationInFrames={780}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

// The search-results page is 1920x3304 once the AI answer has landed. Two
// full-page renders back the whole video - `page-loading.png` (1920x2914,
// skeleton state) and `page-loaded.png` (1920x3304) - and every animated
// element is a window onto one of them. Each window has the same three
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
// Only the header is pinned. The search block scrolls away with the page.
//
// Page landmarks:
//   0     header top          32  masthead bottom   133  header bottom
//   181   search block        275  its rule
//   335   AI panel - 1600 wide, 421 tall while loading, 811 once answered
//   656   card row 1   822  card row 2   1016  "20개 자료 모두 보기"
//   1266  "키워드 검색 결과"   1364  category tabs
//   1461  문서·도서   2003  영상   2460  추천   2887  지역
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
          height: 3304,
          // Wheel-flick scrolling: a quick move, then a pause long enough to
          // read the section that just arrived. Each stop parks a section in
          // the 133-1080 window left under the pinned header.
          //   0    the panel loads and answers          y=0
          //   280  flick
          //   318  키워드 검색 결과 + 문서·도서          y=900
          //   400  flick
          //   438  영상                                 y=1450
          //   520  flick
          //   556  추천                                 y=1850
          //   640  flick
          //   674  지역 (page bottom)                   y=2224
          translate: interpolate(
            frame,
            [0, 280, 318, 400, 438, 520, 556, 640, 674, 780],
            [
              "0px 0px",
              "0px 0px",
              "0px -900px",
              "0px -900px",
              "0px -1450px",
              "0px -1450px",
              "0px -1850px",
              "0px -1850px",
              "0px -2224px",
              "0px -2224px",
            ],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            },
          ),
        }}
      >
        {/* The search block travels with the page and passes behind the
            header. It never animates on its own - the scroll carries it. */}
        <div
          style={{
            position: "absolute",
            top: 133,
            left: 0,
            width: 1920,
            height: 202,
            overflow: "hidden",
          }}
        >
          <Img
            name="Search block"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -133,
              left: 0,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </div>

        <Sequence name="AI panel">
          <AiPanel />
        </Sequence>

        {/* Everything under the panel sits 390px higher while the panel is
            still skeleton-height, and is pushed down as it grows to fit the
            answer. The keyword results are on screen for that whole move, so
            the shift has to be carried rather than skipped. */}
        <Interactive.Div
          name="Below the panel"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            height: 3304,
            translate: interpolate(
              frame,
              [118, 146],
              ["0px -390px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <Sequence name="Keyword header">
            <KeywordHeader />
          </Sequence>
          <Sequence name="문서·도서" from={288} premountFor={fps}>
            <DocSection />
          </Sequence>
          <Sequence name="영상" from={404} premountFor={fps}>
            <VideoSection />
          </Sequence>
          <Sequence name="추천" from={466} premountFor={fps}>
            <RecommendSection />
          </Sequence>
          <Sequence name="지역" from={584} premountFor={fps}>
            <RegionSection />
          </Sequence>
        </Interactive.Div>
      </Interactive.Div>

      <Header />
    </AbsoluteFill>
  );
};
