import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame } from "remotion";

export const PAGE = "arte-main/page.png";

// Every element in this project is a window into the single full-page
// render (page.png) at its page coordinates - a static mask the size of the
// crop, an animated inner layer, and the page image offset negatively so
// the right slice shows through.

// Text: rises up out of its own mask, the way the reference sites reveal
// copy - never a fade, always a mask + rise.
export const RiseWindow: React.FC<{
  name: string;
  top: number;
  left: number;
  width: number;
  height: number;
  from: number;
  duration?: number;
}> = ({ name, top, left, width, height, from, duration = 22 }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{ position: "absolute", top, left, width, height, overflow: "hidden" }}
    >
      <Interactive.Div
        name={name}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height,
          overflow: "hidden",
          translate: interpolate(
            frame,
            [from, from + duration],
            [`0px ${height}px`, "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
          opacity: interpolate(frame, [from, from + duration - 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
          }),
        }}
      >
        <Img
          name="Page"
          src={staticFile(PAGE)}
          style={{ position: "absolute", top: -top, left: -left, width: 1920, maxWidth: "none" }}
        />
      </Interactive.Div>
    </div>
  );
};

// Text, plain fade - used only where a section calls for a simple
// opacity-in rather than the rise treatment (e.g. 문서).
export const FadeWindow: React.FC<{
  name: string;
  top: number;
  left: number;
  width: number;
  height: number;
  from: number;
  duration?: number;
}> = ({ name, top, left, width, height, from, duration = 18 }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{ position: "absolute", top, left, width, height, overflow: "hidden" }}
    >
      <Interactive.Div
        name={name}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height,
          opacity: interpolate(frame, [from, from + duration], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
          }),
        }}
      >
        <Img
          name="Page"
          src={staticFile(PAGE)}
          style={{ position: "absolute", top: -top, left: -left, width: 1920, maxWidth: "none" }}
        />
      </Interactive.Div>
    </div>
  );
};

// Image: a static mask (never animated, so scaling never spills outside its
// frame) with the image inside settling from 120% to 100%.
export const ScaleWindow: React.FC<{
  name: string;
  top: number;
  left: number;
  width: number;
  height: number;
  from: number;
  duration?: number;
}> = ({ name, top, left, width, height, from, duration = 40 }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{ position: "absolute", top, left, width, height, overflow: "hidden" }}
    >
      <Interactive.Div
        name={name}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height,
          overflow: "hidden",
          opacity: interpolate(frame, [from, from + 16], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
          }),
          scale: interpolate(frame, [from, from + duration], [1.2, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        <Img
          name="Page"
          src={staticFile(PAGE)}
          style={{ position: "absolute", top: -top, left: -left, width: 1920, maxWidth: "none" }}
        />
      </Interactive.Div>
    </div>
  );
};

// Category chips: stacked on the anchor chip's slot, then sliding right into
// their own resting position while fading in - the arte-document technique
// (ListHeader.tsx), adapted to window into the shared page render instead of
// per-chip PNGs.
export const SlideWindow: React.FC<{
  name: string;
  top: number;
  left: number;
  width: number;
  height: number;
  offsetX: number;
  from: number;
  duration?: number;
}> = ({ name, top, left, width, height, offsetX, from, duration = 32 }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{ position: "absolute", top, left, width, height, overflow: "hidden" }}
    >
      <Interactive.Div
        name={name}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height,
          overflow: "hidden",
          translate: interpolate(frame, [from, from + duration], [`${offsetX}px 0px`, "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          opacity: interpolate(frame, [from, from + duration], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Img
          name="Page"
          src={staticFile(PAGE)}
          style={{ position: "absolute", top: -top, left: -left, width: 1920, maxWidth: "none" }}
        />
      </Interactive.Div>
    </div>
  );
};

// A row that starts gathered at another row's slot (startOffset px above its
// own resting place) and snaps down into position - the "촤르륵" riffle-open
// used for the 공지·소식 list.
export const CascadeWindow: React.FC<{
  name: string;
  top: number;
  left: number;
  width: number;
  height: number;
  startOffset: number;
  from: number;
  duration?: number;
}> = ({ name, top, left, width, height, startOffset, from, duration = 20 }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{ position: "absolute", top, left, width, height, overflow: "hidden" }}
    >
      <Interactive.Div
        name={name}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height,
          overflow: "hidden",
          translate: interpolate(frame, [from, from + duration], [`0px ${-startOffset}px`, "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          opacity: interpolate(frame, [from, from + Math.min(duration, 12)], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
          }),
        }}
      >
        <Img
          name="Page"
          src={staticFile(PAGE)}
          style={{ position: "absolute", top: -top, left: -left, width: 1920, maxWidth: "none" }}
        />
      </Interactive.Div>
    </div>
  );
};

// A plain crop with no entrance motion - for elements that should just be
// there once the page scrolls under them (partner-logo banner, footer).
export const StaticWindow: React.FC<{
  top: number;
  left: number;
  width: number;
  height: number;
}> = ({ top, left, width, height }) => (
  <div style={{ position: "absolute", top, left, width, height, overflow: "hidden" }}>
    <Img
      name="Page"
      src={staticFile(PAGE)}
      style={{ position: "absolute", top: -top, left: -left, width: 1920, maxWidth: "none" }}
    />
  </div>
);

// A 1px black rule drawn around a box, four segments back to back from the
// top-left corner, running anti-clockwise: down the left edge, across the
// bottom, up the right edge, then back along the top.
export const DrawnBorder: React.FC<{
  top: number;
  left: number;
  width: number;
  height: number;
  from: number;
  segmentDuration?: number;
}> = ({ top, left, width, height, from, segmentDuration = 14 }) => {
  const frame = useCurrentFrame();
  const leftDraw = from;
  const bottomDraw = leftDraw + segmentDuration;
  const rightDraw = bottomDraw + segmentDuration;
  const topDraw = rightDraw + segmentDuration;

  const seg = (f: number) =>
    interpolate(frame, [f, f + segmentDuration], [100, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.linear,
    });

  return (
    <>
      <Interactive.Div
        name="Outline left"
        style={{
          position: "absolute",
          top,
          left,
          width: 1,
          height,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${seg(leftDraw)}% 0)`,
        }}
      />
      <Interactive.Div
        name="Outline bottom"
        style={{
          position: "absolute",
          top: top + height,
          left,
          width,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${seg(bottomDraw)}% 0 0)`,
        }}
      />
      <Interactive.Div
        name="Outline right"
        style={{
          position: "absolute",
          top,
          left: left + width,
          width: 1,
          height,
          backgroundColor: "#000000",
          clipPath: `inset(${seg(rightDraw)}% 0 0 0)`,
        }}
      />
      <Interactive.Div
        name="Outline top"
        style={{
          position: "absolute",
          top,
          left,
          width,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${seg(topDraw)}%)`,
        }}
      />
    </>
  );
};
