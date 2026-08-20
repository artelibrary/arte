import { Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

export const TwoColumn: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Img
        name="Two column left"
        src={staticFile("webpage-sections/s8-col-left.png")}
        style={{
          position: "absolute",
          top: 4815,
          left: 160,
          width: 700,
          opacity: interpolate(frame, [440, 464], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [440, 464], ["0px 50px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Img
        name="Two column right"
        src={staticFile("webpage-sections/s8-col-right.png")}
        style={{
          position: "absolute",
          top: 4815,
          left: 900,
          width: 860,
          opacity: interpolate(frame, [445, 469], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [445, 469], ["0px 50px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
    </>
  );
};
