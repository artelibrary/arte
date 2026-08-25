import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// The pinned header, 133px tall: a 32px government masthead strip over the
// 101px gnb bar.
//
// On the first scroll the masthead rolls up and the gnb rides to the top, so
// the header settles at 101px. The redesign dropped the black plate the old
// masthead collapse animated, and the scrolled-header component in Figma
// (18140:12164) has not been redrawn to match the new look yet - so the
// collapse is derived from this design instead: nothing is faded or swapped,
// the strip simply stops taking up room.
//
// Both halves are windows onto the same page render, and the band that clips
// them shrinks with the masthead.
export const Header: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Pinned header"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1920,
        overflow: "hidden",
        backgroundColor: "#ffffff",
        height: interpolate(frame, [280, 312], [133, 101], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        }),
      }}
    >
      <Interactive.Div
        name="Government masthead"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          overflow: "hidden",
          height: interpolate(frame, [280, 312], [32, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Masthead"
          src={staticFile("arte-search/page-loaded.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            maxWidth: "none",
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Global nav"
        style={{
          position: "absolute",
          left: 0,
          width: 1920,
          height: 101,
          overflow: "hidden",
          top: interpolate(frame, [280, 312], [32, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Img
          name="Nav bar"
          src={staticFile("arte-search/page-loaded.png")}
          style={{
            position: "absolute",
            top: -32,
            left: 0,
            width: 1920,
            maxWidth: "none",
          }}
        />
      </Interactive.Div>
    </Interactive.Div>
  );
};
