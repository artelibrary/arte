import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const Cards: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Img
        name="Cards section title"
        src={staticFile("webpage-sections/s5-title.png")}
        style={{
          position: "absolute",
          top: 2279,
          left: 160,
          width: 328,
          opacity: interpolate(frame, [283, 307], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [283, 307], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Interactive.Div
        name="Cards card 1 mask"
        style={{
          position: "absolute",
          top: 2279,
          left: 632,
          width: 360,
          overflow: "hidden",
          height: interpolate(frame, [288, 316], [0, 408], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Cards card 1 image"
          src={staticFile("webpage-sections/s5-card-1.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 360,
            scale: interpolate(frame, [288, 316], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [288, 316], ["-3deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Cards card 2 mask"
        style={{
          position: "absolute",
          top: 2279,
          left: 1016,
          width: 360,
          overflow: "hidden",
          height: interpolate(frame, [293, 321], [0, 408], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Cards card 2 image"
          src={staticFile("webpage-sections/s5-card-2.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 360,
            scale: interpolate(frame, [293, 321], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [293, 321], ["3deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Cards card 3 mask"
        style={{
          position: "absolute",
          top: 2279,
          left: 1400,
          width: 360,
          overflow: "hidden",
          height: interpolate(frame, [298, 326], [0, 408], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Cards card 3 image"
          src={staticFile("webpage-sections/s5-card-3.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 360,
            scale: interpolate(frame, [298, 326], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [298, 326], ["-3deg", "0deg"], {
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
