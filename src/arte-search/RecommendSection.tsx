import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// 추천 - the only section with no thumbnail, so the copy runs the full 1600px
// width. Its heading is already peeking in at the 영상 stop, so that reveals
// early while the body waits for the flick that brings it into view.
export const RecommendSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 2469,
          left: 160,
          width: 1600,
          height: 60,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Recommend section heading"
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
              top: -2469,
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
          top: 2571,
          left: 160,
          width: 1600,
          height: 15,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Recommend text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1600,
            height: 15,
            overflow: "hidden",
            translate: interpolate(frame, [62, 84], ["0px 15px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [62, 76], [0, 1], {
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
              top: -2571,
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
          top: 2622,
          left: 160,
          width: 1600,
          height: 26,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Recommend text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1600,
            height: 26,
            overflow: "hidden",
            translate: interpolate(frame, [67, 89], ["0px 26px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [67, 81], [0, 1], {
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
              top: -2622,
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
          top: 2667,
          left: 160,
          width: 1600,
          height: 14,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Recommend text 3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1600,
            height: 14,
            overflow: "hidden",
            translate: interpolate(frame, [72, 94], ["0px 14px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [72, 86], [0, 1], {
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
              top: -2667,
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
          top: 2717,
          left: 160,
          width: 1600,
          height: 20,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Recommend text 4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1600,
            height: 20,
            overflow: "hidden",
            translate: interpolate(frame, [77, 99], ["0px 20px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [77, 91], [0, 1], {
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
              top: -2717,
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
          top: 2747,
          left: 160,
          width: 1600,
          height: 18,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Recommend text 5"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1600,
            height: 18,
            overflow: "hidden",
            translate: interpolate(frame, [82, 104], ["0px 18px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [82, 96], [0, 1], {
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
              top: -2747,
              left: -160,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
    </>
  );
};
