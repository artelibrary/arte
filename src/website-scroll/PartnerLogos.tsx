import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame } from "remotion";

export const PartnerLogos: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Partner logos bar"
      style={{
        position: "absolute",
        top: 5420,
        left: 0,
        width: 1920,
        height: 172,
        opacity: interpolate(frame, [497, 521], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        }),
        translate: interpolate(frame, [497, 521], ["0px 40px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        }),
      }}
    >
      <Interactive.Div
        name="Partner logos backdrop"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 172,
          backgroundColor: "#000000",
        }}
      />
      <Img
        name="Partner logos left arrow"
        src={staticFile("webpage-sections/partner-arrow-left.png")}
        style={{ position: "absolute", top: 71, left: 160, width: 30 }}
      />
      <Img
        name="Partner logos right arrow"
        src={staticFile("webpage-sections/partner-arrow-right.png")}
        style={{ position: "absolute", top: 71, left: 1760, width: 30 }}
      />
      <Interactive.Div
        name="Partner logos marquee window"
        style={{
          position: "absolute",
          top: 60,
          left: 300,
          width: 1320,
          height: 52,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Partner logos marquee track"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 3960,
            height: 52,
            translate: interpolate(frame, [0, 360], ["0px 0px", "-1320px 0px"], {
              extrapolateLeft: "wrap",
              extrapolateRight: "wrap",
              easing: Easing.linear,
            }),
          }}
        >
          <Img
            name="Partner logos row copy 1"
            src={staticFile("webpage-sections/partner-logos-row.png")}
            style={{ position: "absolute", top: 0, left: 0, width: 1320 }}
          />
          <Img
            name="Partner logos row copy 2"
            src={staticFile("webpage-sections/partner-logos-row.png")}
            style={{ position: "absolute", top: 0, left: 1320, width: 1320 }}
          />
          <Img
            name="Partner logos row copy 3"
            src={staticFile("webpage-sections/partner-logos-row.png")}
            style={{ position: "absolute", top: 0, left: 2640, width: 1320 }}
          />
        </Interactive.Div>
      </Interactive.Div>
    </Interactive.Div>
  );
};
