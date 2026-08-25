import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// Breadcrumb, the left-aligned "문서·도서" headline and the two large tabs.
// The revised design drops the pink rule that used to sit under the title.
export const TitleBlock: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Breadcrumb mask"
        style={{
          position: "absolute",
          top: 153,
          left: 160,
          width: 199,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Breadcrumb"
          src={staticFile("arte-document/breadcrumb.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 199,
            translate: interpolate(frame, [6, 34], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Page title mask"
        style={{
          position: "absolute",
          top: 253,
          left: 160,
          width: 300,
          height: 88,
          overflow: "hidden",
        }}
      >
        <Img
          name="Page title"
          src={staticFile("arte-document/title.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 300,
            translate: interpolate(frame, [14, 46], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Documents tab mask"
        style={{
          position: "absolute",
          top: 377,
          left: 160,
          width: 797,
          height: 80,
          overflow: "hidden",
        }}
      >
        <Img
          name="Documents tab"
          src={staticFile("arte-document/tab-doc.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 797,
            translate: interpolate(frame, [26, 56], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Books tab mask"
        style={{
          position: "absolute",
          top: 377,
          left: 963,
          width: 798,
          height: 80,
          overflow: "hidden",
        }}
      >
        <Img
          name="Books tab"
          src={staticFile("arte-document/tab-book.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 798,
            translate: interpolate(frame, [32, 62], ["0px 100%", "0px 0%"], {
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
