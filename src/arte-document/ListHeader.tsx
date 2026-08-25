import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// Category tabs, the copyright notice - now right-aligned pink type rather
// than a full-width pink band - and the result-count row.
//
// The tabs start stacked on "전체" and fan out to the right, each chip fading
// up as it travels. "전체" is the anchor they unfold from, so it is at full
// opacity and never moves. Chips 2-9 are sliced one column early so each
// carries its own 1px left border while detached; at rest that column lands
// on the neighbouring chip's right border and the row reassembles seamlessly.
export const ListHeader: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Img
        name="Category chip All"
        src={staticFile("arte-document/cat-1.png")}
        style={{
          position: "absolute",
          top: 649,
          left: 592,
          width: 79,
          // "전체" neither travels nor fades - but it should not be on screen
          // before the row's turn either, so this steps it in on the same
          // frame the others start fanning out.
          opacity: interpolate(frame, [61, 62], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          }),
        }}
      />

      <Img
        name="Category chip Field"
        src={staticFile("arte-document/cat-2.png")}
        style={{
          position: "absolute",
          top: 649,
          left: 670,
          width: 199,
          opacity: interpolate(frame, [62, 102], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [62, 102], ["-78px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      <Img
        name="Category chip Research report"
        src={staticFile("arte-document/cat-3.png")}
        style={{
          position: "absolute",
          top: 649,
          left: 868,
          width: 140,
          opacity: interpolate(frame, [62, 102], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [62, 102], ["-276px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      <Img
        name="Category chip Event material"
        src={staticFile("arte-document/cat-4.png")}
        style={{
          position: "absolute",
          top: 649,
          left: 1007,
          width: 120,
          opacity: interpolate(frame, [62, 102], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [62, 102], ["-415px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      <Img
        name="Category chip Training material"
        src={staticFile("arte-document/cat-5.png")}
        style={{
          position: "absolute",
          top: 649,
          left: 1126,
          width: 119,
          opacity: interpolate(frame, [62, 102], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [62, 102], ["-534px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      <Img
        name="Category chip Educator"
        src={staticFile("arte-document/cat-6.png")}
        style={{
          position: "absolute",
          top: 649,
          left: 1244,
          width: 180,
          opacity: interpolate(frame, [62, 102], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [62, 102], ["-652px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      <Img
        name="Category chip International"
        src={staticFile("arte-document/cat-7.png")}
        style={{
          position: "absolute",
          top: 649,
          left: 1423,
          width: 120,
          opacity: interpolate(frame, [62, 102], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [62, 102], ["-831px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      <Img
        name="Category chip Annual report"
        src={staticFile("arte-document/cat-8.png")}
        style={{
          position: "absolute",
          top: 649,
          left: 1542,
          width: 139,
          opacity: interpolate(frame, [62, 102], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [62, 102], ["-950px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      <Img
        name="Category chip Other"
        src={staticFile("arte-document/cat-9.png")}
        style={{
          position: "absolute",
          top: 649,
          left: 1680,
          width: 80,
          opacity: interpolate(frame, [62, 102], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [62, 102], ["-1088px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      <Interactive.Div
        name="Copyright notice mask"
        style={{
          position: "absolute",
          top: 712,
          left: 1320,
          width: 445,
          height: 36,
          overflow: "hidden",
        }}
      >
        <Img
          name="Copyright notice"
          src={staticFile("arte-document/tip.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 445,
            translate: interpolate(frame, [72, 102], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Result count row mask"
        style={{
          position: "absolute",
          top: 790,
          left: 592,
          width: 1168,
          height: 47,
          overflow: "hidden",
        }}
      >
        <Img
          name="Result count row"
          src={staticFile("arte-document/count.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1168,
            translate: interpolate(frame, [82, 112], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>
    </>
  );
};
