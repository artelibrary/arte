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
// The header swaps to its compact form just after the page starts moving at
// frame 172. In the revised design the two states share only the masthead and
// the search/menu icons: the wordmark, the nav and the account pill all go,
// and a 51px blue square with a mark takes the logo's place.
//
// The wordmark sits in a mask that collapses leftwards from 200px to 51px as
// it fades, so it is wiped by the closing edge rather than dissolving in
// place, and the mask lands exactly where the square does. The square fades
// in from frame 182 - early enough that the collapsing mask never leaves the
// logo slot empty.
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
          height: 133,
          backgroundColor: "#ffffff",
        }}
      />
      <Img
        name="Header masthead"
        src={staticFile("arte-document/hd-masthead.png")}
        style={{ position: "absolute", top: 0, left: 0, width: 1920 }}
      />

      <Img
        name="Header nav"
        src={staticFile("arte-document/hd-nav.png")}
        style={{
          position: "absolute",
          top: 60,
          left: 459,
          width: 917,
          opacity: interpolate(frame, [176, 194], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.quad),
          }),
        }}
      />
      <Img
        name="Header account links"
        src={staticFile("arte-document/hd-account.png")}
        style={{
          position: "absolute",
          top: 62,
          left: 1475,
          width: 201,
          opacity: interpolate(frame, [176, 194], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.quad),
          }),
        }}
      />
      <Img
        name="Header search and menu"
        src={staticFile("arte-document/hd-icons.png")}
        style={{ position: "absolute", top: 66, left: 1690, width: 71 }}
      />

      <Interactive.Div
        name="Header wordmark mask"
        style={{
          position: "absolute",
          top: 66,
          height: 32,
          overflow: "hidden",
          left: interpolate(frame, [176, 206], [160, 150], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          width: interpolate(frame, [176, 206], [200, 51], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Img
          name="Header wordmark"
          src={staticFile("arte-document/hd-logo.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 200,
            opacity: interpolate(frame, [176, 190], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.quad),
            }),
          }}
        />
      </Interactive.Div>

      <Img
        name="Header mark"
        src={staticFile("arte-document/hd-mark.png")}
        style={{
          position: "absolute",
          top: 56,
          left: 150,
          width: 51,
          opacity: interpolate(frame, [182, 202], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
          }),
        }}
      />
    </>
  );
};
