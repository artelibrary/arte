import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// Left filter rail. The revised design has no grey panel behind it - the
// groups are separated by horizontal rules instead, and each of those is
// drawn left to right by retracting its right-hand inset. Two are 4px
// section rules, the rest are 1px dividers under each accordion row.
export const Filter: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Search condition label mask"
        style={{
          position: "absolute",
          top: 645,
          left: 160,
          width: 90,
          height: 32,
          overflow: "hidden",
        }}
      >
        <Img
          name="Search condition label"
          src={staticFile("arte-document/fl-label1.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 90,
            translate: interpolate(frame, [60, 90], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Condition select mask"
        style={{
          position: "absolute",
          top: 689,
          left: 160,
          width: 312,
          height: 51,
          overflow: "hidden",
        }}
      >
        <Img
          name="Condition select"
          src={staticFile("arte-document/fl-select.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 312,
            translate: interpolate(frame, [68, 98], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Search field mask"
        style={{
          position: "absolute",
          top: 752,
          left: 160,
          width: 312,
          height: 51,
          overflow: "hidden",
        }}
      >
        <Img
          name="Search field"
          src={staticFile("arte-document/fl-search.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 312,
            translate: interpolate(frame, [76, 106], ["0px 100%", "0px 0%"], {
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
          top: 815,
          left: 160,
          width: 312,
          height: 50,
          overflow: "hidden",
        }}
      >
        <Img
          name="Filter hint"
          src={staticFile("arte-document/fl-info.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 312,
            translate: interpolate(frame, [84, 114], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Filter rule 1"
        style={{
          position: "absolute",
          top: 901,
          left: 160,
          width: 312,
          height: 4,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [92, 122], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
        }}
      />

      <Interactive.Div
        name="Subject label mask"
        style={{
          position: "absolute",
          top: 925,
          left: 160,
          width: 60,
          height: 32,
          overflow: "hidden",
        }}
      >
        <Img
          name="Subject label"
          src={staticFile("arte-document/fl-label2.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 60,
            translate: interpolate(frame, [100, 130], ["0px 100%", "0px 0%"], {
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
          top: 957,
          left: 160,
          width: 312,
          height: 247,
          overflow: "hidden",
        }}
      >
        <Img
          name="Subject chips"
          src={staticFile("arte-document/fl-chips.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 312,
            opacity: interpolate(frame, [108, 128], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
            translate: interpolate(frame, [108, 142], ["0px 72px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Filter rule 2"
        style={{
          position: "absolute",
          top: 1232,
          left: 160,
          width: 312,
          height: 4,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [200, 230], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
        }}
      />

      <Interactive.Div
        name="Genre row mask"
        style={{
          position: "absolute",
          top: 1272,
          left: 160,
          width: 312,
          height: 40,
          overflow: "hidden",
        }}
      >
        <Img
          name="Genre row"
          src={staticFile("arte-document/fl-row1.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 312,
            translate: interpolate(frame, [208, 238], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Filter rule 3"
        style={{
          position: "absolute",
          top: 1330,
          left: 160,
          width: 312,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [216, 246], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
        }}
      />

      <Interactive.Div
        name="Audience row mask"
        style={{
          position: "absolute",
          top: 1367,
          left: 160,
          width: 312,
          height: 40,
          overflow: "hidden",
        }}
      >
        <Img
          name="Audience row"
          src={staticFile("arte-document/fl-row2.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 312,
            translate: interpolate(frame, [224, 254], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Filter rule 4"
        style={{
          position: "absolute",
          top: 1425,
          left: 160,
          width: 312,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [232, 262], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
        }}
      />

      <Interactive.Div
        name="Material type row mask"
        style={{
          position: "absolute",
          top: 1462,
          left: 160,
          width: 312,
          height: 40,
          overflow: "hidden",
        }}
      >
        <Img
          name="Material type row"
          src={staticFile("arte-document/fl-row3.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 312,
            translate: interpolate(frame, [240, 270], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Filter rule 5"
        style={{
          position: "absolute",
          top: 1520,
          left: 160,
          width: 312,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [248, 278], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
        }}
      />

      <Interactive.Div
        name="Rights holder row mask"
        style={{
          position: "absolute",
          top: 1557,
          left: 160,
          width: 312,
          height: 40,
          overflow: "hidden",
        }}
      >
        <Img
          name="Rights holder row"
          src={staticFile("arte-document/fl-row4.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 312,
            translate: interpolate(frame, [256, 286], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Filter rule 6"
        style={{
          position: "absolute",
          top: 1615,
          left: 160,
          width: 312,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [264, 294], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
        }}
      />

      <Interactive.Div
        name="Publication year label mask"
        style={{
          position: "absolute",
          top: 1652,
          left: 160,
          width: 60,
          height: 32,
          overflow: "hidden",
        }}
      >
        <Img
          name="Publication year label"
          src={staticFile("arte-document/fl-label3.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 60,
            translate: interpolate(frame, [272, 302], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Publication year selects mask"
        style={{
          position: "absolute",
          top: 1688,
          left: 160,
          width: 312,
          height: 51,
          overflow: "hidden",
        }}
      >
        <Img
          name="Publication year selects"
          src={staticFile("arte-document/fl-years.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 312,
            translate: interpolate(frame, [280, 310], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Filter rule 7"
        style={{
          position: "absolute",
          top: 1763,
          left: 160,
          width: 312,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [288, 318], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
        }}
      />
    </>
  );
};
