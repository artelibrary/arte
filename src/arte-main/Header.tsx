import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame } from "remotion";

// The pinned header. It starts as the full masthead and crossfades the first
// time the page scrolls, over the first wheel flick (frames 160-190):
//
//   - the wordmark, nav links and login pill (everything left of the icon
//     pair) fade out together
//   - a blue mark fades in to take their place
//
// The search and menu icons on the right belong to both states and sit at
// the same coordinates in each, so they are drawn once, statically.
//
// Landmarks in page coordinates: masthead 0-32 (always static), gnb 32-133,
// left content x0-1680, icon pair x1680-1920, blue mark at x150 y56 51x51.
export const Header: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 32,
          overflow: "hidden",
        }}
      >
        <Img
          name="Masthead"
          src={staticFile("arte-main/page.png")}
          style={{ position: "absolute", top: 0, left: 0, width: 1920, maxWidth: "none" }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 32,
          left: 0,
          width: 1920,
          height: 101,
          backgroundColor: "#ffffff",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 32,
          left: 0,
          width: 1680,
          height: 101,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Header left content"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1680,
            height: 101,
            opacity: interpolate(frame, [160, 178], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Wordmark, nav and login"
            src={staticFile("arte-main/page.png")}
            style={{
              position: "absolute",
              top: -32,
              left: 0,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 32,
          left: 1680,
          width: 240,
          height: 101,
          overflow: "hidden",
        }}
      >
        <Img
          name="Search and menu icons"
          src={staticFile("arte-main/page.png")}
          style={{
            position: "absolute",
            top: -32,
            left: -1680,
            width: 1920,
            maxWidth: "none",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 56,
          left: 150,
          width: 51,
          height: 51,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Header blue mark"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 51,
            height: 51,
            opacity: interpolate(frame, [172, 194], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Blue mark"
            src={staticFile("arte-main/header-scrolled.png")}
            style={{
              position: "absolute",
              top: -56,
              left: -150,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
    </>
  );
};
