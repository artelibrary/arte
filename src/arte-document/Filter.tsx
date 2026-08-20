import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// Left filter rail. The grey panel unfolds downwards first, then each control
// inside rises into place - the panel is drawn as a real div so its reveal is
// independent of the sliced artwork sitting on top of it.
export const Filter: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Search field mask"
        style={{
          position: "absolute",
          top: 567,
          left: 160,
          width: 360,
          height: 51,
          overflow: "hidden",
        }}
      >
        <Img
          name="Search field"
          src={staticFile("arte-document/filter-search.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 360,
            translate: interpolate(frame, [0, 28], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Filter panel"
        style={{
          position: "absolute",
          top: 642,
          left: 160,
          width: 360,
          height: 975,
          backgroundColor: "#F5F5F5",
          // Unfolds from the top edge downwards. Only the top ~440px of the
          // 975px panel is on screen at this scroll position, so this uses an
          // ease-in-out rather than the ease-out used elsewhere - an ease-out
          // would spend almost all its travel below the fold and make the
          // visible part of the sweep flash past.
          clipPath: `inset(0 0 ${interpolate(frame, [10, 60], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.cubic),
          })}% 0)`,
        }}
      />

      <Interactive.Div
        name="Search condition mask"
        style={{
          position: "absolute",
          top: 674,
          left: 192,
          width: 296,
          height: 91,
          overflow: "hidden",
        }}
      >
        <Img
          name="Search condition"
          src={staticFile("arte-document/f1-condition.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 296,
            translate: interpolate(frame, [46, 76], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Filter hint mask"
        style={{
          position: "absolute",
          top: 805,
          left: 192,
          width: 296,
          height: 74,
          overflow: "hidden",
        }}
      >
        <Img
          name="Filter hint"
          src={staticFile("arte-document/f2-info.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 296,
            translate: interpolate(frame, [54, 84], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Subject chips mask"
        style={{
          position: "absolute",
          top: 919,
          left: 192,
          width: 296,
          height: 279,
          overflow: "hidden",
        }}
      >
        <Img
          name="Subject chips"
          src={staticFile("arte-document/f3-subject.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 296,
            opacity: interpolate(frame, [62, 82], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
            translate: interpolate(frame, [62, 96], ["0px 72px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Genre row mask"
        style={{
          position: "absolute",
          top: 1238,
          left: 192,
          width: 296,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Genre row"
          src={staticFile("arte-document/f4-genre.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 296,
            translate: interpolate(frame, [150, 178], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Audience row mask"
        style={{
          position: "absolute",
          top: 1302,
          left: 192,
          width: 296,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Audience row"
          src={staticFile("arte-document/f5-target.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 296,
            translate: interpolate(frame, [158, 186], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Material type row mask"
        style={{
          position: "absolute",
          top: 1366,
          left: 192,
          width: 296,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Material type row"
          src={staticFile("arte-document/f6-type.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 296,
            translate: interpolate(frame, [166, 194], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Rights holder row mask"
        style={{
          position: "absolute",
          top: 1430,
          left: 192,
          width: 296,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Rights holder row"
          src={staticFile("arte-document/f7-holder.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 296,
            translate: interpolate(frame, [174, 202], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Publication year mask"
        style={{
          position: "absolute",
          top: 1494,
          left: 192,
          width: 296,
          height: 91,
          overflow: "hidden",
        }}
      >
        <Img
          name="Publication year"
          src={staticFile("arte-document/f8-year.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 296,
            translate: interpolate(frame, [182, 212], ["0px 100%", "0px 0%"], {
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
