import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// "문서" section heading and its one-line description.
export const SectionIntro: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Section heading mask"
        style={{
          position: "absolute",
          top: 470,
          left: 160,
          width: 92,
          height: 58,
          overflow: "hidden",
        }}
      >
        <Img
          name="Section heading"
          src={staticFile("arte-document/section-heading.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 92,
            translate: interpolate(frame, [0, 28], ["0px 100%", "0px 0%"], {
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
          top: 500,
          left: 274,
          width: 612,
          height: 28,
          overflow: "hidden",
        }}
      >
        <Img
          name="Section description"
          src={staticFile("arte-document/section-desc.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 612,
            translate: interpolate(frame, [8, 36], ["0px 100%", "0px 0%"], {
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
