import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// "키워드 검색 결과" and the category tabs, revealed as the second flick
// brings them under the pinned header. The heading and the 2px rule beneath it
// share one mask so the rule arrives with the words rather than after them.
export const KeywordHeader: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 1780,
          left: 160,
          width: 1600,
          height: 72,
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
            height: 72,
            overflow: "hidden",
            translate: interpolate(frame, [4, 32], ["0px 72px", "0px 0px"], {
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
              top: -1780,
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
          top: 1885,
          left: 160,
          width: 1600,
          height: 64,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Keyword tabs"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1600,
            height: 64,
            overflow: "hidden",
            translate: interpolate(frame, [16, 44], ["0px 64px", "0px 0px"], {
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
              top: -1885,
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
