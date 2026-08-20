import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// Breadcrumb, the "문서·도서" headline and the pink rule beneath it.
// Every text tile rises out of a mask the height of the tile itself, so the
// copy slides up from behind its own baseline the way the reference sites do.
export const TitleBlock: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Breadcrumb mask"
        style={{
          position: "absolute",
          top: 223,
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
            translate: interpolate(frame, [6, 30], ["0px 100%", "0px 0%"], {
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
          top: 285,
          left: 160,
          width: 1600,
          height: 84,
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
            width: 1600,
            translate: interpolate(frame, [14, 46], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Doc/book toggle mask"
        style={{
          position: "absolute",
          top: 306,
          left: 1643,
          width: 118,
          height: 41,
          overflow: "hidden",
        }}
      >
        <Img
          name="Doc/book toggle"
          src={staticFile("arte-document/title-toggle.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 118,
            translate: interpolate(frame, [26, 54], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Title pink rule"
        style={{
          position: "absolute",
          top: 391,
          left: 160,
          width: 1600,
          height: 4,
          backgroundColor: "#FF2268",
          // Drawn left to right by retracting the right-hand inset.
          clipPath: `inset(0 ${interpolate(frame, [38, 78], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
        }}
      />
    </>
  );
};
