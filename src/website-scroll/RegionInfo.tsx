import { Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

export const RegionInfo: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Img
        name="Region info title"
        src={staticFile("webpage-sections/region-title.png")}
        style={{
          position: "absolute",
          top: 2847,
          left: 160,
          width: 1600,
          opacity: interpolate(frame, [323, 347], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [323, 347], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Img
        name="Region info row 1"
        src={staticFile("webpage-sections/region-row-1.png")}
        style={{
          position: "absolute",
          top: 2969,
          left: 160,
          width: 1600,
          opacity: interpolate(frame, [331, 355], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [331, 355], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Img
        name="Region info row 2"
        src={staticFile("webpage-sections/region-row-2.png")}
        style={{
          position: "absolute",
          top: 3121,
          left: 160,
          width: 1600,
          opacity: interpolate(frame, [340, 364], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [340, 364], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Img
        name="Region info row 3"
        src={staticFile("webpage-sections/region-row-3.png")}
        style={{
          position: "absolute",
          top: 3273,
          left: 160,
          width: 1600,
          opacity: interpolate(frame, [348, 372], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [348, 372], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
    </>
  );
};
