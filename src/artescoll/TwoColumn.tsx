import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { BottomUpReveal } from "./BottomUpReveal";

export const TwoColumn: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <BottomUpReveal
        name="Two column left title"
        src="webpage-sections/s8-col-left-title.png"
        top={4815}
        left={160}
        width={700}
        height={82}
        from={0}
      />
      <Interactive.Div
        name="Two column left title underline"
        style={{
          position: "absolute",
          top: 4893,
          left: 160,
          height: 4,
          backgroundColor: "#000000",
          width: interpolate(frame, [20, 40], [0, 700], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Interactive.Div
        name="Two column left content mask"
        style={{
          position: "absolute",
          top: 4897,
          left: 160,
          width: 700,
          overflow: "hidden",
          height: interpolate(frame, [12, 40], [0, 443], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Two column left content"
          src={staticFile("webpage-sections/s8-col-left-content.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 700,
            scale: interpolate(frame, [12, 40], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
          }}
        />
      </Interactive.Div>

      <BottomUpReveal
        name="Two column right title"
        src="webpage-sections/s8-col-right-title.png"
        top={4815}
        left={900}
        width={860}
        height={82}
        from={8}
      />
      <Interactive.Div
        name="Two column right title underline"
        style={{
          position: "absolute",
          top: 4893,
          left: 900,
          height: 4,
          backgroundColor: "#000000",
          width: interpolate(frame, [28, 48], [0, 860], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Interactive.Div
        name="Two column right content unfold"
        style={{
          position: "absolute",
          top: 4897,
          left: 900,
          width: 860,
          overflow: "hidden",
          height: interpolate(frame, [16, 44], [0, 443], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Two column right content"
          src={staticFile("webpage-sections/s8-col-right-content.png")}
          style={{ position: "absolute", top: 0, left: 0, width: 860 }}
        />
      </Interactive.Div>
    </>
  );
};
