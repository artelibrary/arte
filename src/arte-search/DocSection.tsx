import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// 문서·도서 - the cover settles from 120% to 100% inside its 205x320 frame
// while the copy beside it rises line by line, 6 frames apart.
export const DocSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 1990,
          left: 160,
          width: 1600,
          height: 62,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Doc section heading"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1600,
            height: 62,
            overflow: "hidden",
            translate: interpolate(frame, [0, 28], ["0px 62px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [0, 14], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1990,
              left: -160,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 2087,
          left: 160,
          width: 205,
          height: 320,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Doc cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 205,
            height: 320,
            overflow: "hidden",
            scale: interpolate(frame, [8, 52], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [8, 26], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -2087,
              left: -160,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 2130,
          left: 405,
          width: 1355,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Doc text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1355,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [16, 38], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [16, 30], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -2130,
              left: -405,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 2177,
          left: 405,
          width: 1355,
          height: 41,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Doc text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1355,
            height: 41,
            overflow: "hidden",
            translate: interpolate(frame, [21, 43], ["0px 41px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [21, 35], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -2177,
              left: -405,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 2226,
          left: 405,
          width: 1355,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Doc text 3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1355,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [26, 48], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [26, 40], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -2226,
              left: -405,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 2276,
          left: 405,
          width: 1355,
          height: 28,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Doc text 4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1355,
            height: 28,
            overflow: "hidden",
            translate: interpolate(frame, [31, 53], ["0px 28px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [31, 45], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -2276,
              left: -405,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 2306,
          left: 405,
          width: 1355,
          height: 28,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Doc text 5"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1355,
            height: 28,
            overflow: "hidden",
            translate: interpolate(frame, [36, 58], ["0px 28px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [36, 50], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -2306,
              left: -405,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 2336,
          left: 405,
          width: 1355,
          height: 28,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Doc text 6"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1355,
            height: 28,
            overflow: "hidden",
            translate: interpolate(frame, [41, 63], ["0px 28px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [41, 55], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -2336,
              left: -405,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
    </>
  );
};
