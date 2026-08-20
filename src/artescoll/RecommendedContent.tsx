import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { BottomUpReveal } from "./BottomUpReveal";

export const RecommendedContent: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <BottomUpReveal
        name="Recommended content title"
        src="webpage-sections/s7-title.png"
        top={3585}
        left={160}
        width={1600}
        height={82}
        from={0}
      />
      <Interactive.Div
        name="Recommended content title underline"
        style={{
          position: "absolute",
          top: 3663,
          left: 160,
          height: 4,
          backgroundColor: "#000000",
          width: interpolate(frame, [20, 40], [0, 1600], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Interactive.Div
        name="Recommended feature left mask"
        style={{
          position: "absolute",
          top: 3707,
          left: 160,
          width: 780,
          overflow: "hidden",
          height: interpolate(frame, [8, 32], [0, 407], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Recommended feature left image"
          src={staticFile("webpage-sections/s7-feature-left.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 780,
            scale: interpolate(frame, [8, 32], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Recommended feature right mask"
        style={{
          position: "absolute",
          top: 3707,
          left: 980,
          width: 780,
          overflow: "hidden",
          height: interpolate(frame, [14, 38], [0, 407], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Recommended feature right image"
          src={staticFile("webpage-sections/s7-feature-right.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 780,
            scale: interpolate(frame, [14, 38], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Recommended book curation backdrop"
        style={{
          position: "absolute",
          top: 4154,
          left: interpolate(frame, [20, 45], [960, 160], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          width: interpolate(frame, [20, 45], [0, 1600], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          height: 501,
          backgroundColor: "#000000",
        }}
      />
      <Img
        name="Recommended book intro"
        src={staticFile("webpage-sections/s7-book-intro.png")}
        style={{
          position: "absolute",
          top: 4234,
          left: 260,
          width: 199,
          opacity: interpolate(frame, [36, 56], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [36, 56], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Img
        name="Recommended book tag backdrop"
        src={staticFile("webpage-sections/s7-book-tag-black.png")}
        style={{
          position: "absolute",
          top: 4272,
          left: 260,
          width: 199,
          opacity: interpolate(frame, [19, 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <Interactive.Div
        name="Recommended book tag pink wipe"
        style={{
          position: "absolute",
          top: 4272,
          left: 260,
          width: 199,
          height: 96,
          overflow: "hidden",
          clipPath: `inset(0 ${interpolate(frame, [24, 48], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.cubic),
          })}% 0 0)`,
        }}
      >
        <Img
          name="Recommended book tag pink"
          src={staticFile("webpage-sections/s7-book-tag.png")}
          style={{ position: "absolute", top: 0, left: 0, width: 199 }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Recommended book 1 mask"
        style={{
          position: "absolute",
          top: 4234,
          left: 857,
          width: 249,
          overflow: "hidden",
          height: interpolate(frame, [42, 66], [0, 341], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Recommended book 1 image"
          src={staticFile("webpage-sections/s7-book-1.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 249,
            scale: interpolate(frame, [42, 66], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Recommended book 2 mask"
        style={{
          position: "absolute",
          top: 4234,
          left: 1134,
          width: 249,
          overflow: "hidden",
          height: interpolate(frame, [48, 72], [0, 341], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Recommended book 2 image"
          src={staticFile("webpage-sections/s7-book-2.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 249,
            scale: interpolate(frame, [48, 72], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Recommended book 3 mask"
        style={{
          position: "absolute",
          top: 4234,
          left: 1411,
          width: 249,
          overflow: "hidden",
          height: interpolate(frame, [54, 78], [0, 341], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Recommended book 3 image"
          src={staticFile("webpage-sections/s7-book-3.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 249,
            scale: interpolate(frame, [54, 78], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
          }}
        />
      </Interactive.Div>
    </>
  );
};
