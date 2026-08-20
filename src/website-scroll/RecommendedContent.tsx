import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const RecommendedContent: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Img
        name="Recommended content title"
        src={staticFile("webpage-sections/s7-title.png")}
        style={{
          position: "absolute",
          top: 3585,
          left: 160,
          width: 1600,
          opacity: interpolate(frame, [364, 388], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [364, 388], ["0px 40px", "0px 0px"], {
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
          height: interpolate(frame, [370, 398], [0, 407], {
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
            scale: interpolate(frame, [370, 398], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [370, 398], ["-2deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
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
          height: interpolate(frame, [375, 403], [0, 407], {
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
            scale: interpolate(frame, [375, 403], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [375, 403], ["2deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
      <Img
        name="Recommended book intro"
        src={staticFile("webpage-sections/s7-book-intro.png")}
        style={{
          position: "absolute",
          top: 4234,
          left: 260,
          width: 199,
          opacity: interpolate(frame, [400, 424], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [400, 424], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Interactive.Div
        name="Recommended book 1 mask"
        style={{
          position: "absolute",
          top: 4234,
          left: 857,
          width: 249,
          overflow: "hidden",
          height: interpolate(frame, [405, 433], [0, 341], {
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
            scale: interpolate(frame, [405, 433], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [405, 433], ["-4deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
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
          height: interpolate(frame, [410, 438], [0, 341], {
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
            scale: interpolate(frame, [410, 438], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [410, 438], ["4deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
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
          height: interpolate(frame, [415, 443], [0, 341], {
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
            scale: interpolate(frame, [415, 443], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [415, 443], ["-4deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
    </>
  );
};
