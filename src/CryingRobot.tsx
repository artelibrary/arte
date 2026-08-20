import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

type Props = {};

export const CryingRobotComposition = () => {
  return null;
};

export const CryingRobot: React.FC<Props> = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Scene"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "radial-gradient(circle at 50% 38%, #eef6ff 0%, #cfe1f4 100%)",
      }}
    >
      <Interactive.Div
        name="Robot character"
        style={{
          position: "relative",
          width: 760,
          height: 760,
          opacity: interpolate(frame, [0, 15], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
          }),
          scale: interpolate(frame, [0, 15], [0.92, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
          translate: interpolate(
            frame,
            [
              0, 20, 28, 33, 42, 55, 63, 68, 77, 90, 98, 103, 112, 125, 133,
              138, 147, 150,
            ],
            [
              "0px 0px",
              "0px 0px",
              "0px 10px",
              "0px -8px",
              "0px 0px",
              "0px 0px",
              "0px 10px",
              "0px -8px",
              "0px 0px",
              "0px 0px",
              "0px 10px",
              "0px -8px",
              "0px 0px",
              "0px 0px",
              "0px 10px",
              "0px -8px",
              "0px 0px",
              "0px 0px",
            ],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.quad),
            },
          ),
          rotate: interpolate(
            frame,
            [
              0, 20, 28, 33, 42, 55, 63, 68, 77, 90, 98, 103, 112, 125, 133,
              138, 147, 150,
            ],
            [
              "0deg",
              "0deg",
              "-1.5deg",
              "1deg",
              "0deg",
              "0deg",
              "-1.5deg",
              "1deg",
              "0deg",
              "0deg",
              "-1.5deg",
              "1deg",
              "0deg",
              "0deg",
              "-1.5deg",
              "1deg",
              "0deg",
              "0deg",
            ],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.quad),
            },
          ),
        }}
      >
        <Img
          name="Robot single tear"
          src={staticFile("robot-tear.png")}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
        <Img
          name="Robot streaming tears"
          src={staticFile("robot-crying.png")}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: interpolate(
              frame,
              [
                0, 20, 28, 33, 42, 55, 63, 68, 77, 90, 98, 103, 112, 125, 133,
                138, 147, 150,
              ],
              [
                0.15, 0.15, 0.65, 1, 0.3, 0.3, 0.7, 1, 0.35, 0.35, 0.75, 1, 0.4,
                0.4, 0.8, 1, 0.5, 0.5,
              ],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.inOut(Easing.quad),
              },
            ),
          }}
        />
      </Interactive.Div>
    </AbsoluteFill>
  );
};
