import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// Pinned outside the scroll container, so these are composition frames.
//
// The header is static until the page starts moving at frame 172, then swaps
// to its compact form: the black logo plate collapses leftwards from 245px to
// 51px, the wordmark and the nav and account links fade out, and the square
// mark fades in inside what is left of the plate. The search and menu icons
// sit at the same coordinates in both states, so they never move.
//
// The wordmark and the mark are children of the plate, which clips them, so
// the wordmark is wiped by the collapsing edge as it fades rather than just
// dissolving in place. The plate collapses fast - it is down to 63px by frame
// 188 - which clips the wordmark away sooner than a matched fade would clear
// it, so the mark rises early (180-200) on an ease-out. Without that the plate
// reads as a solid black square for a few frames around 188.
export const Header: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Header plate"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 143,
          backgroundColor: "#ffffff",
        }}
      />

      <Img
        name="Header top strip"
        src={staticFile("arte-document/hdr-strip.png")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
        }}
      />

      <Img
        name="Header nav links"
        src={staticFile("arte-document/hdr-nav.png")}
        style={{
          position: "absolute",
          top: 78,
          left: 505,
          width: 843,
          opacity: interpolate(frame, [176, 194], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.quad),
          }),
        }}
      />

      <Interactive.Div
        name="Header account links"
        style={{
          position: "absolute",
          top: 72,
          left: 1475,
          width: 201,
          height: 41,
          backgroundColor: "#E5E5E5",
          // Fully rounded ends - 41px tall, so the radius is half of that.
          // Drawn as a real shape rather than relying on the slice's own
          // corners, so the pill stays a pill at any render scale.
          borderRadius: 20.5,
          overflow: "hidden",
          opacity: interpolate(frame, [176, 194], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.quad),
          }),
        }}
      >
        <Img
          name="Header account labels"
          src={staticFile("arte-document/hdr-account.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 201,
          }}
        />
      </Interactive.Div>

      <Img
        name="Header search and menu"
        src={staticFile("arte-document/hdr-icons.png")}
        style={{
          position: "absolute",
          top: 77,
          left: 1690,
          width: 71,
        }}
      />

      <Interactive.Div
        name="Header logo box"
        style={{
          position: "absolute",
          top: 66,
          height: 51,
          backgroundColor: "#000000",
          overflow: "hidden",
          left: interpolate(frame, [176, 206], [147, 150], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          width: interpolate(frame, [176, 206], [245, 51], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Img
          name="Header wordmark"
          src={staticFile("arte-document/hdr-wordmark.png")}
          style={{
            position: "absolute",
            top: 6,
            left: 11,
            width: 222,
            opacity: interpolate(frame, [176, 186], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.quad),
            }),
          }}
        />
        <Img
          name="Header mark"
          src={staticFile("arte-document/hdr-mark.png")}
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            width: 32,
            opacity: interpolate(frame, [180, 200], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        />
      </Interactive.Div>
    </>
  );
};
