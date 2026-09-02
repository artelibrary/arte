import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// 지역 - the last section. Its heading is on screen at the 추천 stop, so it
// reveals there; the still and the copy wait for the final flick.
export const RegionSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 2908,
          left: 160,
          width: 1600,
          height: 60,
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
              top: -2908,
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
          top: 3005,
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
            scale: interpolate(frame, [66, 110], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [66, 84], [0, 1], {
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
              top: -3005,
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
          top: 3008,
          left: 619,
          width: 1141,
          height: 17,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1141,
            height: 17,
            overflow: "hidden",
            translate: interpolate(frame, [74, 96], ["0px 15px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [74, 88], [0, 1], {
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
              top: -3008,
              left: -619,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 3062,
          left: 619,
          width: 1141,
          height: 37,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1141,
            height: 37,
            overflow: "hidden",
            translate: interpolate(frame, [79, 101], ["0px 29px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [79, 93], [0, 1], {
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
              top: -3062,
              left: -619,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 3116,
          left: 619,
          width: 1141,
          height: 16,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1141,
            height: 16,
            overflow: "hidden",
            translate: interpolate(frame, [84, 106], ["0px 14px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [84, 98], [0, 1], {
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
              top: -3116,
              left: -619,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 3166,
          left: 619,
          width: 1141,
          height: 23,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1141,
            height: 23,
            overflow: "hidden",
            translate: interpolate(frame, [89, 111], ["0px 20px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [89, 103], [0, 1], {
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
              top: -3166,
              left: -619,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 3196,
          left: 619,
          width: 1141,
          height: 21,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 5"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1141,
            height: 21,
            overflow: "hidden",
            translate: interpolate(frame, [94, 116], ["0px 19px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [94, 108], [0, 1], {
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
              top: -3196,
              left: -619,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 3226,
          left: 619,
          width: 1141,
          height: 21,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Region text 6"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1141,
            height: 21,
            overflow: "hidden",
            translate: interpolate(frame, [99, 121], ["0px 18px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [99, 113], [0, 1], {
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
              top: -3226,
              left: -619,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
    </>
  );
};
