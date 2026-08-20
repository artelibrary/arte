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
import { Header } from "./artescoll/Header";
import { Footer } from "./artescoll/Footer";
import { Banner } from "./artescoll/Banner";
import { Cards } from "./artescoll/Cards";
import { RegionInfo } from "./artescoll/RegionInfo";
import { RecommendedContent } from "./artescoll/RecommendedContent";
import { TwoColumn } from "./artescoll/TwoColumn";
import { PartnerLogos } from "./artescoll/PartnerLogos";
import { Hero } from "./artescoll/Hero";
import { DocSection } from "./artescoll/DocSection";

export const ArtescollComposition = () => {
  return (
    <Composition
      id="Artescoll"
      component={Artescoll}
      durationInFrames={1290}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

// The camera moves one section's worth of distance, then holds - the way a
// person actually scrolls with a wheel/trackpad (a quick flick, then a
// pause to read) - rather than one continuous glide down the page.
const SCROLL_EASING = Easing.out(Easing.cubic);
const BRAND_PINK = "#FF2268";

export const Artescoll: React.FC = () => {
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
          // Scroll checkpoints (frame -> scrollY): hold on each section for
          // a beat, then a quick flick to the next - each Sequence below
          // starts right as its section's hold begins.
          //   0    hero hold start                          y=0
          //   160  hero hold end / flick start
          //   188  documents hold start                     y=754
          //   338  documents hold end / flick start
          //   366  video feature hold start                 y=1625
          //   456  video feature hold end / flick start
          //   484  books hold start                         y=2199
          //   574  books hold end / flick start
          //   602  region info hold start        y=2596 (section centered)
          //   692  region info hold end / flick start
          //   720  recommended hold start                   y=3505
          //   850  recommended hold end / flick start
          //   878  events hold start                        y=4735
          //   988  events hold end / flick start
          //   1016 footer settle                            y=5018
          //   1196 final hold (outro overlay on top)
          translate: interpolate(
            frame,
            [
              0, 160, 188, 338, 366, 456, 484, 574, 602, 692, 720, 850, 878,
              988, 1016, 1196,
            ],
            [
              "0px 0px",
              "0px 0px",
              "0px -754px",
              "0px -754px",
              "0px -1625px",
              "0px -1625px",
              "0px -2199px",
              "0px -2199px",
              "0px -2596px",
              "0px -2596px",
              "0px -3505px",
              "0px -3505px",
              "0px -4735px",
              "0px -4735px",
              "0px -5018px",
              "0px -5018px",
            ],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: SCROLL_EASING,
            },
          ),
        }}
      >
        <Sequence name="Header">
          <Header />
        </Sequence>
        <Sequence name="Hero">
          <Hero />
        </Sequence>
        <Sequence name="Documents" from={160} premountFor={fps}>
          <DocSection />
        </Sequence>
        <Sequence name="Video feature" from={338} premountFor={fps}>
          <Banner />
        </Sequence>
        <Sequence name="Books" from={348} premountFor={fps}>
          <Cards />
        </Sequence>
        <Sequence name="Region info" from={468} premountFor={fps}>
          <RegionInfo />
        </Sequence>
        <Sequence name="Recommended" from={692} premountFor={fps}>
          <RecommendedContent />
        </Sequence>
        <Sequence name="Events and notices" from={850} premountFor={fps}>
          <TwoColumn />
        </Sequence>
        <Sequence name="Partner logos" from={988} premountFor={fps}>
          <PartnerLogos />
        </Sequence>
        <Sequence name="Footer" from={988} premountFor={fps}>
          <Footer />
        </Sequence>
      </Interactive.Div>

      <AbsoluteFill
        name="Vignette"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 14%, rgba(0,0,0,0) 86%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <Sequence name="Intro wipe" durationInFrames={35}>
        <IntroWipe />
      </Sequence>

      <Sequence name="Outro" from={1150} premountFor={fps}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

const IntroWipe: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Intro wipe panel"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1920,
        height: 1080,
        backgroundColor: BRAND_PINK,
        // Fully covers the opening frame, then wipes up and off the top.
        clipPath: `inset(${interpolate(frame, [0, 30], [0, 100], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.8, 0, 0.2, 1),
        })}% 0% 0% 0%)`,
      }}
    />
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill name="Outro backdrop" style={{ backgroundColor: "#000000" }}>
      <Interactive.Div
        name="Outro wordmark"
        style={{
          position: "absolute",
          left: 387.5,
          top: 445,
          width: 1590,
          height: 390,
          overflow: "hidden",
          opacity: interpolate(frame, [0, 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
          }),
          scale: interpolate(frame, [0, 30], [0.9, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
            output: "perceptual-scale",
          }),
        }}
      >
        <Img
          name="Wordmark crop"
          src={staticFile("webpage-sections/section-10.png")}
          style={{
            position: "absolute",
            top: -390,
            left: -840,
            width: 1920,
            scale: 6,
            transformOrigin: "0px 0px",
          }}
        />
      </Interactive.Div>
    </AbsoluteFill>
  );
};
