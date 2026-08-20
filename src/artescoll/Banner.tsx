import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame } from "remotion";
import { BottomUpReveal } from "./BottomUpReveal";

export const Banner: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Banner photo frame"
        style={{
          position: "absolute",
          top: 1625,
          left: 0,
          width: 1920,
          height: 574,
          overflow: "hidden",
        }}
      >
        <Img
          name="Banner photo image"
          src={staticFile("webpage-sections/banner-photo.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            scale: interpolate(frame, [0, 28], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Banner promo card frame"
        style={{
          position: "absolute",
          top: 1752,
          left: 240,
          width: 648,
          height: 320,
          overflow: "hidden",
        }}
      >
        <Img
          name="Banner promo card image"
          src={staticFile("webpage-sections/s4-promo-card.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 648,
            scale: interpolate(frame, [8, 36], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
              output: "perceptual-scale",
            }),
          }}
        />
      </Interactive.Div>
      <BottomUpReveal
        name="Banner text badge"
        src="webpage-sections/s4-textblock-badge.png"
        top={1745}
        left={968}
        width={712}
        height={70}
        from={16}
      />
      <BottomUpReveal
        name="Banner text title"
        src="webpage-sections/s4-textblock-title.png"
        top={1745 + 70}
        left={968}
        width={712}
        height={75}
        from={24}
      />
      <BottomUpReveal
        name="Banner text hashtags"
        src="webpage-sections/s4-textblock-hashtags.png"
        top={1745 + 145}
        left={968}
        width={712}
        height={90}
        from={32}
      />
      <BottomUpReveal
        name="Banner text button"
        src="webpage-sections/s4-textblock-button.png"
        top={1745 + 235}
        left={968}
        width={712}
        height={99}
        from={40}
      />
    </>
  );
};
