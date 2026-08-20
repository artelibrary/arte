import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// Category tabs, the pink copyright notice and the result-count row.
//
// The category row starts stacked at the left edge of the strip and fans out
// to the right, each chip fading up as it travels. "전체" is the anchor the
// others unfold from, so it sits at full opacity from the first frame and
// never moves. Chips 2-9 are sliced one column early so each carries its own
// 1px left border while it is detached; at rest that column lands exactly on
// the neighbouring chip's right border, so the row reassembles seamlessly.
export const ListHeader: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Img
        name="Category chip All"
        src={staticFile("arte-document/cat-1.png")}
        style={{
          position: "absolute",
          top: 567,
          left: 560,
          width: 75,
          opacity: 1,
        }}
      />

      <Img
        name="Category chip Field"
        src={staticFile("arte-document/cat-2.png")}
        style={{
          position: "absolute",
          top: 567,
          left: 634,
          width: 190,
          opacity: interpolate(frame, [0, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 40], ["-74px 0px", "0px 0px"], {
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
          top: 567,
          left: 823,
          width: 133,
          opacity: interpolate(frame, [0, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 40], ["-263px 0px", "0px 0px"], {
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
          top: 567,
          left: 955,
          width: 114,
          opacity: interpolate(frame, [0, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 40], ["-395px 0px", "0px 0px"], {
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
          top: 567,
          left: 1068,
          width: 114,
          opacity: interpolate(frame, [0, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 40], ["-508px 0px", "0px 0px"], {
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
          top: 567,
          left: 1181,
          width: 171,
          opacity: interpolate(frame, [0, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 40], ["-621px 0px", "0px 0px"], {
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
          top: 567,
          left: 1351,
          width: 114,
          opacity: interpolate(frame, [0, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 40], ["-791px 0px", "0px 0px"], {
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
          top: 567,
          left: 1464,
          width: 133,
          opacity: interpolate(frame, [0, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 40], ["-904px 0px", "0px 0px"], {
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
          top: 567,
          left: 1596,
          width: 76,
          opacity: interpolate(frame, [0, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 40], ["-1036px 0px", "0px 0px"], {
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
          top: 652,
          left: 560,
          width: 1200,
          height: 56,
          overflow: "hidden",
        }}
      >
        <Img
          name="Copyright notice"
          src={staticFile("arte-document/tip-notice.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            translate: interpolate(frame, [10, 40], ["0px 100%", "0px 0%"], {
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
          top: 748,
          left: 560,
          width: 1200,
          height: 39,
          overflow: "hidden",
        }}
      >
        <Img
          name="Result count row"
          src={staticFile("arte-document/count-row.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            translate: interpolate(frame, [20, 50], ["0px 100%", "0px 0%"], {
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
