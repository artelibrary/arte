import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// "키워드 검색 결과" and the category tabs. The keyword results are not what
// the AI panel is waiting on - they are already on the page while the answer
// is still a skeleton - so these reveal during the load beat. The panel
// expansion then pushes them below the fold, and the first scroll brings them
// back.
export const KeywordHeader: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 1264,
          left: 160,
          width: 1600,
          height: 62,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Keyword heading"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1600,
            height: 62,
            overflow: "hidden",
            translate: interpolate(frame, [36, 62], ["0px 62px", "0px 0px"], {
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
              top: -1264,
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
          top: 1360,
          left: 156,
          width: 910,
          height: 65,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Keyword tabs"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 910,
            height: 65,
            overflow: "hidden",
            translate: interpolate(frame, [46, 72], ["0px 65px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [46, 60], [0, 1], {
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
              top: -1360,
              left: -156,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
    </>
  );
};
