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
// frame 172, on arte-document's timing. The two states share only the
// masthead strip and the search/menu icons: the wordmark, the nav and the
// account pill all go, and a 51px blue square with a mark takes the logo's
// place.
//
// The wordmark sits in a mask that collapses leftwards from 200px to 51px as
// it fades, so it is wiped by the closing edge rather than dissolving in
// place, and the mask lands exactly where the square does. The square fades
// in from frame 182 - early enough that the collapsing mask never leaves the
// logo slot empty.
//
// Page landmarks: masthead 0-32, gnb 32-133, wordmark x160 y68 199x28, nav
// x459-1375, account pill x1475-1676, icons x1690-1760 (돋보기 1690, 메뉴
// 1730), blue mark x150 y56 51x51.
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

      <div
        style={{ position: "absolute", top: 0, left: 0, width: 1920, height: 32, overflow: "hidden" }}
      >
        <Img
          name="Header masthead"
          src={staticFile("arte-location/page.png")}
          style={{ position: "absolute", top: 0, left: 0, width: 1920, maxWidth: "none" }}
        />
      </div>

      <div
        style={{ position: "absolute", top: 62, left: 459, width: 917, height: 40, overflow: "hidden" }}
      >
        <Interactive.Div
          name="Header nav"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 917,
            height: 40,
            opacity: interpolate(frame, [176, 194], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.quad),
            }),
          }}
        >
          <Img
            name="Nav links"
            src={staticFile("arte-location/page.png")}
            style={{ position: "absolute", top: -62, left: -459, width: 1920, maxWidth: "none" }}
          />
        </Interactive.Div>
      </div>

      <div
        style={{ position: "absolute", top: 62, left: 1475, width: 201, height: 41, overflow: "hidden" }}
      >
        <Interactive.Div
          name="Header account links"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 201,
            height: 41,
            opacity: interpolate(frame, [176, 194], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.quad),
            }),
          }}
        >
          <Img
            name="Account links"
            src={staticFile("arte-location/page.png")}
            style={{ position: "absolute", top: -62, left: -1475, width: 1920, maxWidth: "none" }}
          />
        </Interactive.Div>
      </div>

      {/* Both header states put the 돋보기 and 메뉴 icons at the same
          coordinates, so they are drawn once and never move. */}
      <div
        style={{ position: "absolute", top: 66, left: 1690, width: 71, height: 34, overflow: "hidden" }}
      >
        <Img
          name="Header search and menu"
          src={staticFile("arte-location/page.png")}
          style={{ position: "absolute", top: -66, left: -1690, width: 1920, maxWidth: "none" }}
        />
      </div>

      <Interactive.Div
        name="Header wordmark mask"
        style={{
          position: "absolute",
          top: 64,
          height: 36,
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
          src={staticFile("arte-location/page.png")}
          style={{
            position: "absolute",
            top: -64,
            left: -160,
            width: 1920,
            maxWidth: "none",
            opacity: interpolate(frame, [176, 190], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.quad),
            }),
          }}
        />
      </Interactive.Div>

      <div
        style={{ position: "absolute", top: 56, left: 150, width: 51, height: 51, overflow: "hidden" }}
      >
        <Interactive.Div
          name="Header mark"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 51,
            height: 51,
            opacity: interpolate(frame, [182, 202], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Blue mark"
            src={staticFile("arte-location/header-scrolled.png")}
            style={{ position: "absolute", top: -56, left: -150, width: 1920, maxWidth: "none" }}
          />
        </Interactive.Div>
      </div>
    </>
  );
};
