import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame } from "remotion";

// The pinned header. Pinned outside the scroll container, so these are
// composition frames.
//
// It collapses to its compact form over the first wheel flick (the page
// starts moving at frame 160), the same way arte-document does: the two
// states share only the masthead and the search/menu icons, while the nav
// and the login pill go, and a 51px blue square with a mark takes the
// wordmark's place.
//
// The wordmark sits in a mask that collapses leftwards from 200px to 51px as
// it fades, so it is wiped by the closing edge rather than dissolving in
// place, and the mask lands exactly where the square does. The square fades
// in from frame 170 - early enough that the collapsing mask never leaves the
// logo slot empty.
//
// Landmarks in page coordinates, shared with arte-document: masthead 0-32
// (always static), gnb 32-133, wordmark x160 y66 200x32, nav x459 y60
// 917x45, login pill x1475 y62 201x41, icon pair x1680-1920, blue mark x150
// y56 51x51. Every crop windows into the full page render, except the blue
// square, which only exists in the scrolled-state export.
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

      <Interactive.Div
        name="Header nav"
        style={{
          position: "absolute",
          top: 60,
          left: 459,
          width: 917,
          height: 45,
          overflow: "hidden",
          opacity: interpolate(frame, [164, 182], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.quad),
          }),
        }}
      >
        <Img
          name="Page"
          src={staticFile("arte-main/page.png")}
          style={{ position: "absolute", top: -60, left: -459, width: 1920, maxWidth: "none" }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Header account links"
        style={{
          position: "absolute",
          top: 62,
          left: 1475,
          width: 201,
          height: 41,
          overflow: "hidden",
          opacity: interpolate(frame, [164, 182], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.quad),
          }),
        }}
      >
        <Img
          name="Page"
          src={staticFile("arte-main/page.png")}
          style={{ position: "absolute", top: -62, left: -1475, width: 1920, maxWidth: "none" }}
        />
      </Interactive.Div>

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

      <Interactive.Div
        name="Header wordmark mask"
        style={{
          position: "absolute",
          top: 66,
          height: 32,
          overflow: "hidden",
          left: interpolate(frame, [164, 194], [160, 150], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          width: interpolate(frame, [164, 194], [200, 51], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Header wordmark"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 200,
            height: 32,
            overflow: "hidden",
            opacity: interpolate(frame, [164, 178], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-main/page.png")}
            style={{ position: "absolute", top: -66, left: -160, width: 1920, maxWidth: "none" }}
          />
        </Interactive.Div>
      </Interactive.Div>

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
            opacity: interpolate(frame, [170, 190], [0, 1], {
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
