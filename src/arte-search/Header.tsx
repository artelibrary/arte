import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// The pinned header, 133px tall, collapsing on the first scroll (frames
// 280-316, over the first wheel flick).
//
// The masthead strip and the two icons on the right are identical in both
// states, so they are drawn once and never move. What changes:
//
//   - the "arte 라이브러리" wordmark is eaten from the right as its window
//     narrows from 209px down to the 51px the mark occupies, and fades
//   - the blue 51x51 plate with the arte mark fades in behind it
//   - the nav links and the account pill fade out
//
// The narrowing window is what carries the wordmark away, so the two read as
// one move rather than as a crossfade sitting on top of a resize.
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
        height: 133,
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
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
          name="Government masthead"
          src={staticFile("arte-search/page-loaded.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            maxWidth: "none",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 32,
          left: 1685,
          width: 110,
          height: 101,
          overflow: "hidden",
        }}
      >
        <Img
          name="Header icons"
          src={staticFile("arte-search/page-loaded.png")}
          style={{
            position: "absolute",
            top: -32,
            left: -1685,
            width: 1920,
            maxWidth: "none",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 32,
          left: 450,
          width: 1235,
          height: 101,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Header nav and account"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1235,
            height: 101,
            overflow: "hidden",
            opacity: interpolate(frame, [280, 298], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Nav and account"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -32,
              left: -450,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Header plate"
        style={{
          position: "absolute",
          top: 56,
          left: 150,
          height: 51,
          overflow: "hidden",
          opacity: interpolate(frame, [294, 316], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
          }),
          width: 51,
        }}
      >
        <Img
          name="Plate and mark"
          src={staticFile("arte-search/header-scrolled.png")}
          style={{
            position: "absolute",
            top: -56,
            left: -150,
            width: 1920,
            maxWidth: "none",
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Header wordmark window"
        style={{
          position: "absolute",
          top: 56,
          left: 150,
          height: 51,
          overflow: "hidden",
          width: interpolate(frame, [280, 312], [209, 51], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      >
        <Interactive.Div
          name="Header wordmark"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 209,
            height: 51,
            overflow: "hidden",
            opacity: interpolate(frame, [280, 302], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Wordmark"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -56,
              left: -150,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </Interactive.Div>
    </Interactive.Div>
  );
};
