import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Hero } from "./website-scroll/Hero";
import { DocSection } from "./website-scroll/DocSection";
import { Banner } from "./website-scroll/Banner";
import { Cards } from "./website-scroll/Cards";
import { RegionInfo } from "./website-scroll/RegionInfo";
import { RecommendedContent } from "./website-scroll/RecommendedContent";
import { TwoColumn } from "./website-scroll/TwoColumn";
import { PartnerLogos } from "./website-scroll/PartnerLogos";

export const Scroll2Composition = () => {
  return null;
};

export const Scroll2: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

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
          translate: interpolate(
            frame,
            [0, durationInFrames - 1],
            ["0px 0px", "0px -5018px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.cubic),
            },
          ),
        }}
      >
        <Img
          name="Header"
          src={staticFile("webpage-sections/section-01.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            opacity: interpolate(frame, [0, 20], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(frame, [0, 20], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
        <Hero />
        <DocSection />
        <Banner />
        <Cards />
        <RegionInfo />
        <RecommendedContent />
        <TwoColumn />
        <PartnerLogos />
        <Img
          name="Footer"
          src={staticFile("webpage-sections/section-10.png")}
          style={{
            position: "absolute",
            top: 5592,
            left: 0,
            width: 1920,
            opacity: interpolate(frame, [519, 543], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(frame, [519, 543], ["0px 40px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
    </AbsoluteFill>
  );
};
