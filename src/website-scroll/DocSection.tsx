import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const DocSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Img
        name="Doc section title"
        src={staticFile("webpage-sections/doc-title.png")}
        style={{
          position: "absolute",
          top: 834,
          left: 160,
          width: 1600,
          opacity: interpolate(frame, [7, 23], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [7, 23], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Img
        name="Doc filter tabs"
        src={staticFile("webpage-sections/doc-tabs-static.png")}
        style={{
          position: "absolute",
          top: 956,
          left: 160,
          width: 1112,
          opacity: interpolate(frame, [10, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [10, 24], ["-24px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Interactive.Div
        name="Doc card 1 mask"
        style={{
          position: "absolute",
          top: 1041,
          left: 160,
          width: 340,
          overflow: "hidden",
          height: interpolate(frame, [10, 30], [0, 447], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Doc card 1 image"
          src={staticFile("webpage-sections/doc-card-1.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 340,
            scale: interpolate(frame, [10, 30], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [10, 30], ["-3deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Doc card 2 mask"
        style={{
          position: "absolute",
          top: 1041,
          left: 530,
          width: 340,
          overflow: "hidden",
          height: interpolate(frame, [14, 34], [0, 447], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Doc card 2 image"
          src={staticFile("webpage-sections/doc-card-2.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 340,
            scale: interpolate(frame, [14, 34], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [14, 34], ["3deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Doc card 3 mask"
        style={{
          position: "absolute",
          top: 1041,
          left: 900,
          width: 340,
          overflow: "hidden",
          height: interpolate(frame, [18, 38], [0, 447], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Doc card 3 image"
          src={staticFile("webpage-sections/doc-card-3.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 340,
            scale: interpolate(frame, [18, 38], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [18, 38], ["-3deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Doc card 4 mask"
        style={{
          position: "absolute",
          top: 1041,
          left: 1270,
          width: 340,
          overflow: "hidden",
          height: interpolate(frame, [22, 42], [0, 447], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Doc card 4 image"
          src={staticFile("webpage-sections/doc-card-4.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 340,
            scale: interpolate(frame, [22, 42], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [22, 42], ["3deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Doc card 5 mask"
        style={{
          position: "absolute",
          top: 1041,
          left: 1640,
          width: 280,
          overflow: "hidden",
          height: interpolate(frame, [26, 46], [0, 447], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Doc card 5 image"
          src={staticFile("webpage-sections/doc-card-5.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 280,
            scale: interpolate(frame, [26, 46], [1.06, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [26, 46], ["-3deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />
      </Interactive.Div>
      <Img
        name="Doc pagination"
        src={staticFile("webpage-sections/doc-pagination-static.png")}
        style={{
          position: "absolute",
          top: 1528,
          left: 882,
          width: 156,
          opacity: interpolate(frame, [46, 58], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [46, 58], ["0px 12px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
    </>
  );
};
