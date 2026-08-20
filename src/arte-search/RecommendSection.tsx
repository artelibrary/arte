import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// 추천 - the only section with no thumbnail, so the copy runs the full
// 1600px width and carries the whole reveal on its own. Its heading is
// already peeking in at the bottom of the 영상 stop, so it reveals there at
// local 4; the body waits for the flick that actually brings it into view.
export const RecommendSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 2869,
          left: 160,
          width: 1600,
          height: 62,
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
            height: 62,
            overflow: "hidden",
            translate: interpolate(frame, [4, 32], ["0px 62px", "0px 0px"], {
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
              top: -2869,
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
          top: 2967,
          left: 160,
          width: 1600,
          height: 22,
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
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [48, 70], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [48, 62], [0, 1], {
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
              top: -2967,
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
          top: 3018,
          left: 160,
          width: 1600,
          height: 33,
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
            height: 33,
            overflow: "hidden",
            translate: interpolate(frame, [53, 75], ["0px 33px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [53, 67], [0, 1], {
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
              top: -3018,
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
          top: 3063,
          left: 160,
          width: 1600,
          height: 22,
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
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [58, 80], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [58, 72], [0, 1], {
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
              top: -3063,
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
          top: 3113,
          left: 160,
          width: 1600,
          height: 27,
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
            height: 27,
            overflow: "hidden",
            translate: interpolate(frame, [63, 85], ["0px 27px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [63, 77], [0, 1], {
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
              top: -3113,
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
          top: 3143,
          left: 160,
          width: 1600,
          height: 25,
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
            height: 25,
            overflow: "hidden",
            translate: interpolate(frame, [68, 90], ["0px 25px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [68, 82], [0, 1], {
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
              top: -3143,
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
