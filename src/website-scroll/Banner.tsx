import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const Banner: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Banner photo mask"
        style={{
          position: "absolute",
          top: 1625,
          left: 0,
          width: 1920,
          overflow: "hidden",
          height: interpolate(frame, [215, 243], [0, 574], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Banner photo image"
          src={staticFile("webpage-sections/banner-photo.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            scale: interpolate(frame, [215, 243], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [215, 243], ["-1deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Banner promo card mask"
        style={{
          position: "absolute",
          top: 1752,
          left: 240,
          width: 648,
          overflow: "hidden",
          height: interpolate(frame, [231, 259], [0, 320], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Banner promo card image"
          src={staticFile("webpage-sections/s4-promo-card.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 648,
            scale: interpolate(frame, [231, 259], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [231, 259], ["-4deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
      <Img
        name="Banner text block"
        src={staticFile("webpage-sections/s4-textblock.png")}
        style={{
          position: "absolute",
          top: 1745,
          left: 968,
          width: 712,
          opacity: interpolate(frame, [231, 255], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [231, 255], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
    </>
  );
};
