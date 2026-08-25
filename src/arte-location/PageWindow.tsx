import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const PAGE = "arte-location/page.png";

// The whole screen is a single 1920x1808 render (page.png) and every element
// is a window onto it - a static mask the size of the crop, an animated inner
// layer, and the page image offset negatively so the right slice shows
// through. Anything no window covers stays white, which is what lets the
// rules below be drawn as their own divs rather than arriving baked in.
//
// Same helper set as arte-main/PageWindow.tsx, retimed for the single
// continuous glide arte-document uses.

const RISE_EASING = Easing.bezier(0.16, 1, 0.3, 1);

type Rect = { top: number; left: number; width: number; height: number };
type Timed = Rect & { name: string; from: number; duration?: number };

const pageImg = (top: number, left: number) => (
  <Img
    name="Page"
    src={staticFile(PAGE)}
    style={{
      position: "absolute",
      top: -top,
      left: -left,
      width: 1920,
      maxWidth: "none",
    }}
  />
);

// Text: rises up out of its own mask. Never a fade on its own - always a
// mask + rise, the way arte-document reveals every line of copy.
export const RiseWindow: React.FC<Timed> = ({
  name,
  top,
  left,
  width,
  height,
  from,
  duration = 30,
}) => {
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
            ["0px 100%", "0px 0%"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: RISE_EASING,
            },
          ),
        }}
      >
        {pageImg(top, left)}
      </Interactive.Div>
    </div>
  );
};

// Tall blocks travel a fixed distance and fade instead of wiping the whole
// band, which over a few hundred px would read as a curtain rather than a
// rise. Used for the region map caption and the date-range group.
export const LiftWindow: React.FC<Timed & { offset?: number }> = ({
  name,
  top,
  left,
  width,
  height,
  from,
  duration = 34,
  offset = 72,
}) => {
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
            [`0px ${offset}px`, "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: RISE_EASING,
            },
          ),
          opacity: interpolate(frame, [from, from + 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
          }),
        }}
      >
        {pageImg(top, left)}
      </Interactive.Div>
    </div>
  );
};

// Image: a static mask (never animated, so the scale never spills outside
// its frame) with the crop inside settling from 120% to 100%.
export const ScaleWindow: React.FC<Timed> = ({
  name,
  top,
  left,
  width,
  height,
  from,
  duration = 40,
}) => {
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
            easing: RISE_EASING,
            output: "perceptual-scale",
          }),
        }}
      >
        {pageImg(top, left)}
      </Interactive.Div>
    </div>
  );
};

// A plain crop with no entrance motion.
export const StaticWindow: React.FC<Rect> = ({ top, left, width, height }) => (
  <div style={{ position: "absolute", top, left, width, height, overflow: "hidden" }}>
    {pageImg(top, left)}
  </div>
);

// A horizontal rule drawn left to right by retracting its right-hand inset -
// the filter-rail treatment from arte-document. The render underneath has
// these baked in, so no window covers their rows and they only ever appear
// by being drawn.
//
// `color` matters: unlike arte-document's black rail, this screen separates
// its groups with a 2px grey divider and reserves black for the one section
// rule under 검색. Sampled off the render so the drawn rule and the baked
// one are the same weight.
export const Rule: React.FC<{
  name: string;
  top: number;
  left: number;
  width: number;
  height: number;
  from: number;
  duration?: number;
  color?: string;
}> = ({ name, top, left, width, height, from, duration = 30, color = "#000000" }) => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name={name}
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        backgroundColor: color,
        clipPath: `inset(0 ${interpolate(frame, [from, from + duration], [100, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: RISE_EASING,
        })}% 0 0)`,
      }}
    />
  );
};

// A 1px black rule drawn around a box, four segments back to back from the
// top-left corner, running anti-clockwise: down the left edge, across the
// bottom, up the right edge, then back along the top. Each segment is linear
// so the pen keeps a constant speed the whole way around.
export const DrawnBorder: React.FC<{
  top: number;
  left: number;
  width: number;
  height: number;
  from: number;
  segmentDuration?: number;
}> = ({ top, left, width, height, from, segmentDuration = 10 }) => {
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
