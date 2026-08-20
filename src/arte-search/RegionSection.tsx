import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// 지역 - the last section. Its heading is already on screen at the 추천 stop,
// so it reveals early at local 4, while the still and the copy wait until the
// final flick has parked the page bottom in view around local 90.
export const RegionSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 3236,
          left: 160,
          width: 1600,
          height: 62,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region section heading"
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
              top: -3236,
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
          top: 3333,
          left: 160,
          width: 419,
          height: 235,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region still"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 419,
            height: 235,
            overflow: "hidden",
            scale: interpolate(frame, [98, 142], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [98, 116], [0, 1], {
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
              top: -3333,
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
          top: 3334,
          left: 616,
          width: 1144,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1144,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [106, 128], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [106, 120], [0, 1], {
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
              top: -3334,
              left: -616,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 3385,
          left: 616,
          width: 1144,
          height: 36,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1144,
            height: 36,
            overflow: "hidden",
            translate: interpolate(frame, [111, 133], ["0px 36px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [111, 125], [0, 1], {
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
              top: -3385,
              left: -616,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 3430,
          left: 616,
          width: 1144,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1144,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [116, 138], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [116, 130], [0, 1], {
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
              top: -3430,
              left: -616,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 3480,
          left: 616,
          width: 1144,
          height: 28,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1144,
            height: 28,
            overflow: "hidden",
            translate: interpolate(frame, [121, 143], ["0px 28px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [121, 135], [0, 1], {
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
              top: -3480,
              left: -616,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 3509,
          left: 616,
          width: 1144,
          height: 28,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 5"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1144,
            height: 28,
            overflow: "hidden",
            translate: interpolate(frame, [126, 148], ["0px 28px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [126, 140], [0, 1], {
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
              top: -3509,
              left: -616,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 3540,
          left: 616,
          width: 1144,
          height: 26,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 6"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1144,
            height: 26,
            overflow: "hidden",
            translate: interpolate(frame, [131, 153], ["0px 26px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [131, 145], [0, 1], {
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
              top: -3540,
              left: -616,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
    </>
  );
};
