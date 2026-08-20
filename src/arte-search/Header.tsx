import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// The pinned header. It starts as the full masthead and collapses the first
// time the page scrolls, over the first wheel flick at frames 240-276:
//
//   - the black plate behind the wordmark shrinks from 245px wide down to
//     51px, holding its left edge, so it closes leftwards into a square
//   - the wordmark is clipped away by that shrink and fades out with it
//   - the 32px arte mark fades in inside the square that is left
//   - the nav links and the account pill fade out
//
// The search and menu icons on the right belong to both states and sit at the
// same coordinates in each, so they are drawn once, statically - cross-fading
// them would only make them dip in brightness halfway through.
//
// Landmarks in page coordinates: top bar 0-42, white bar 42-143, plate at y66
// 51px tall, nav ink x509-1342, account pill x1475-1675, icons x1693-1756.
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
          height: 42,
          overflow: "hidden",
        }}
      >
        <Img
          name="Top bar"
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
          top: 42,
          left: 0,
          width: 1920,
          height: 101,
          backgroundColor: "#ffffff",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 42,
          left: 400,
          width: 1285,
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
            width: 1285,
            height: 101,
            overflow: "hidden",
            opacity: interpolate(frame, [240, 258], [1, 0], {
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
              top: -42,
              left: -400,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 42,
          left: 1685,
          width: 105,
          height: 101,
          overflow: "hidden",
        }}
      >
        <Img
          name="Header icons"
          src={staticFile("arte-search/page-loaded.png")}
          style={{
            position: "absolute",
            top: -42,
            left: -1685,
            width: 1920,
            maxWidth: "none",
          }}
        />
      </div>

      <Interactive.Div
        name="Header plate"
        style={{
          position: "absolute",
          top: 66,
          height: 51,
          backgroundColor: "#000000",
          overflow: "hidden",
          left: interpolate(frame, [240, 272], [147, 150], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          width: interpolate(frame, [240, 272], [245, 51], {
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
            width: 245,
            height: 51,
            overflow: "hidden",
            opacity: interpolate(frame, [240, 256], [1, 0], {
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
              top: -66,
              left: -147,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>

        <Interactive.Div
          name="Header mark"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 51,
            height: 51,
            overflow: "hidden",
            opacity: interpolate(frame, [252, 274], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Mark"
            src={staticFile("arte-search/header-scrolled.png")}
            style={{
              position: "absolute",
              top: -66,
              left: -150,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </Interactive.Div>
    </>
  );
};
