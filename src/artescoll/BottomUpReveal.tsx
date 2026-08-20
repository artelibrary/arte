import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame } from "remotion";

// A title or text image appears fully opaque, masked within its own box,
// rising up into view from below - never fading. Used for every section
// title and text label so entrances read as a consistent mask reveal.
export const BottomUpReveal: React.FC<{
  name: string;
  src: string;
  top: number;
  left: number;
  width: number;
  height: number;
  from: number;
  duration?: number;
}> = ({ name, src, top, left, width, height, from, duration = 22 }) => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name={`${name} mask`}
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        overflow: "hidden",
      }}
    >
      <Img
        name={name}
        src={staticFile(src)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          translate: interpolate(
            frame,
            [from, from + duration],
            [`0px ${height}px`, "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            },
          ),
        }}
      />
    </Interactive.Div>
  );
};
