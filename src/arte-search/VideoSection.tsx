import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// 영상 - same shape as 문서·도서, with a wider 420x235 still.
export const VideoSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 2008,
          left: 160,
          width: 1600,
          height: 60,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Video section heading"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1600,
            height: 60,
            overflow: "hidden",
            translate: interpolate(frame, [4, 32], ["0px 60px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [4, 18], [0, 1], {
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
              top: -2008,
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
          top: 2105,
          left: 160,
          width: 420,
          height: 235,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Video still"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 420,
            height: 235,
            overflow: "hidden",
            scale: interpolate(frame, [10, 54], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [10, 28], [0, 1], {
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
              top: -2105,
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
          top: 2140,
          left: 620,
          width: 1140,
          height: 15,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Video text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1140,
            height: 15,
            overflow: "hidden",
            translate: interpolate(frame, [18, 40], ["0px 15px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [18, 32], [0, 1], {
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
              top: -2140,
              left: -620,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 2191,
          left: 620,
          width: 1140,
          height: 26,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Video text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1140,
            height: 26,
            overflow: "hidden",
            translate: interpolate(frame, [23, 45], ["0px 26px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [23, 37], [0, 1], {
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
              top: -2191,
              left: -620,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 2236,
          left: 620,
          width: 1140,
          height: 14,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Video text 3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1140,
            height: 14,
            overflow: "hidden",
            translate: interpolate(frame, [28, 50], ["0px 14px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [28, 42], [0, 1], {
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
              top: -2236,
              left: -620,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 2286,
          left: 620,
          width: 1140,
          height: 18,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Video text 4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1140,
            height: 18,
            overflow: "hidden",
            translate: interpolate(frame, [33, 55], ["0px 18px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [33, 47], [0, 1], {
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
              top: -2286,
              left: -620,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
    </>
  );
};
