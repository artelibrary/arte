import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// "문서" heading on the left, its one-line description now over on the right.
export const SectionIntro: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Section heading mask"
        style={{
          position: "absolute",
          top: 553,
          left: 160,
          width: 96,
          height: 60,
          overflow: "hidden",
        }}
      >
        <Img
          name="Section heading"
          src={staticFile("arte-document/sec-heading.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 96,
            translate: interpolate(frame, [44, 74], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Section description mask"
        style={{
          position: "absolute",
          top: 581,
          left: 1149,
          width: 613,
          height: 30,
          overflow: "hidden",
        }}
      >
        <Img
          name="Section description"
          src={staticFile("arte-document/sec-desc.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 613,
            translate: interpolate(frame, [52, 82], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>
    </>
  );
};
