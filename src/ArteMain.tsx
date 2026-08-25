import {
  AbsoluteFill,
  Composition,
  Easing,
  Interactive,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Header } from "./arte-main/Header";
import { Section01 } from "./arte-main/Section01";
import { DocSection } from "./arte-main/DocSection";
import { VideoBookSection } from "./arte-main/VideoBookSection";
import { RegionSection } from "./arte-main/RegionSection";
import { RecommendSection } from "./arte-main/RecommendSection";
import { EventNoticeSection } from "./arte-main/EventNoticeSection";
import { FooterSection } from "./arte-main/FooterSection";

export const ArteMainComposition = () => {
  return (
    <Composition
      id="arte-main"
      component={ArteMain}
      durationInFrames={1050}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

// The full page is 1920x5359, rendered once (page.png) and windowed into by
// every child - the same technique as arte-document/arte-search. Only the
// header is pinned; everything else lives in the scrolling layer and passes
// behind it.
//
// Wheel-flick scrolling: a quick move, then a pause long enough to read the
// section that just arrived - not one continuous glide. Each stop parks a
// section inside the 143-1080 window left under the pinned header. Every
// section's own "from" is offset ~26 frames past its Sequence mount (see
// PageWindow.tsx callers) so the motion is still visibly running once the
// flick lands, rather than having finished mid-flick where it would be
// missed.
//   0     section01 (hero)                     y=0
//   160   flick
//   190   문서                                  y=481
//   380   flick
//   410   영상 · 도서                           y=1359
//   490   flick
//   520   지역별 정보                            y=2013
//   600   flick
//   630   추천                                  y=2711
//   710   flick
//   740   이벤트·행사 · 공지·소식                y=3901
//   820   flick
//   850   footer settle (page bottom)           y=4279
const SCROLL_EASING = Easing.out(Easing.cubic);

export const ArteMain: React.FC = () => {
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
          height: 5359,
          translate: interpolate(
            frame,
            [0, 160, 190, 380, 410, 490, 520, 600, 630, 710, 740, 820, 850, 1050],
            [
              "0px 0px",
              "0px 0px",
              "0px -481px",
              "0px -481px",
              "0px -1359px",
              "0px -1359px",
              "0px -2013px",
              "0px -2013px",
              "0px -2711px",
              "0px -2711px",
              "0px -3901px",
              "0px -3901px",
              "0px -4279px",
              "0px -4279px",
            ],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: SCROLL_EASING,
            },
          ),
        }}
      >
        <Sequence name="section01">
          <Section01 />
        </Sequence>
        <Sequence name="문서" from={160} premountFor={fps}>
          <DocSection />
        </Sequence>
        <Sequence name="영상·도서" from={380} premountFor={fps}>
          <VideoBookSection />
        </Sequence>
        <Sequence name="지역별 정보" from={490} premountFor={fps}>
          <RegionSection />
        </Sequence>
        <Sequence name="추천" from={600} premountFor={fps}>
          <RecommendSection />
        </Sequence>
        <Sequence name="이벤트·행사·공지·소식" from={710} premountFor={fps}>
          <EventNoticeSection />
        </Sequence>
        <Sequence name="footer" from={820} premountFor={fps}>
          <FooterSection />
        </Sequence>
      </Interactive.Div>

      {/* The header stays put while the page scrolls under it, and crossfades
          to its scrolled state over the first flick. */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 133,
          overflow: "hidden",
        }}
      >
        <Header />
      </div>
    </AbsoluteFill>
  );
};
