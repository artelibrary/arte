import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame } from "remotion";

// Hero. The two headline lines start as their black default and fill pink
// left-to-right, one after another. The search bar and hashtag chips rise
// out of their own masks the way the reference sites reveal copy.
export const Section01: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Img
        name="Headline line 1 backdrop"
        src={staticFile("arte-main/headline-line1-black.png")}
        style={{ position: "absolute", top: 213, left: 713, width: 494 }}
      />
      <Interactive.Div
        name="Headline line 1 pink wipe"
        style={{
          position: "absolute",
          top: 213,
          left: 713,
          width: 494,
          height: 85,
          overflow: "hidden",
          clipPath: `inset(0 ${interpolate(frame, [0, 24], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
        }}
      >
        <Img
          name="Headline line 1 pink"
          src={staticFile("arte-main/headline-line1.png")}
          style={{ position: "absolute", top: 0, left: 0, width: 494 }}
        />
      </Interactive.Div>

      <Img
        name="Headline line 2 backdrop"
        src={staticFile("arte-main/headline-line2-black.png")}
        style={{ position: "absolute", top: 298, left: 471, width: 978 }}
      />
      <Interactive.Div
        name="Headline line 2 pink wipe"
        style={{
          position: "absolute",
          top: 298,
          left: 471,
          width: 978,
          height: 85,
          overflow: "hidden",
          clipPath: `inset(0 ${interpolate(frame, [14, 38], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
        }}
      >
        <Img
          name="Headline line 2 pink"
          src={staticFile("arte-main/headline-line2.png")}
          style={{ position: "absolute", top: 0, left: 0, width: 978 }}
        />
      </Interactive.Div>

      <div
        style={{
          position: "absolute",
          top: 423,
          left: 471,
          width: 978,
          height: 98,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Search bar"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 978,
            height: 98,
            overflow: "hidden",
            translate: interpolate(frame, [40, 62], ["0px 98px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [40, 54], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-main/page.png")}
            style={{
              position: "absolute",
              top: -423,
              left: -471,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 541,
          left: 471,
          width: 978,
          height: 43,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Hashtag chips"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 978,
            height: 43,
            overflow: "hidden",
            translate: interpolate(frame, [48, 70], ["0px 43px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [48, 62], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-main/page.png")}
            style={{
              position: "absolute",
              top: -541,
              left: -471,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
    </>
  );
};
