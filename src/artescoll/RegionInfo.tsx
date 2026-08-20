import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { BottomUpReveal } from "./BottomUpReveal";

export const RegionInfo: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <BottomUpReveal
        name="Region info title"
        src="webpage-sections/region-title.png"
        top={2847}
        left={160}
        width={1600}
        height={82}
        from={0}
      />
      <Interactive.Div
        name="Region info title underline"
        style={{
          position: "absolute",
          top: 2925,
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
      <Img
        name="Region info row 1"
        src={staticFile("webpage-sections/region-row-1.png")}
        style={{
          position: "absolute",
          top: 2969,
          left: 160,
          width: 1600,
          opacity: interpolate(frame, [8, 28], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [8, 28], ["0px 40px", "0px 0px"], {
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
          opacity: interpolate(frame, [14, 34], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [14, 34], ["0px 40px", "0px 0px"], {
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
          opacity: interpolate(frame, [20, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [20, 40], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
    </>
  );
};
