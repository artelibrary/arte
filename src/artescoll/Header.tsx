import { Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

export const Header: React.FC = () => {
  const frame = useCurrentFrame();

  return (
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
        translate: interpolate(frame, [0, 20], ["0px 20px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        }),
      }}
    />
  );
};
