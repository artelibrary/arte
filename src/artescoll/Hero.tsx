import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

const BAR_TOP = 473;
const BAR_LEFT = 471;
const BAR_WIDTH = 978;
const BAR_HEIGHT = 97;
const BAR_CENTER_X = BAR_LEFT + BAR_WIDTH / 2;

const ICON_WIDTH = 52.5;
const ICON_HEIGHT = 60;
const ICON_CENTERED_LEFT = BAR_CENTER_X - ICON_WIDTH / 2;
const ICON_CENTERED_TOP = BAR_TOP + (BAR_HEIGHT - ICON_HEIGHT) / 2;
const ICON_FINAL_LEFT = BAR_LEFT + 897.5;
const ICON_FINAL_TOP = BAR_TOP + 25;

export const Hero: React.FC = () => {
  const frame = useCurrentFrame();

  const pillWidth = interpolate(frame, [80, 110], [BAR_HEIGHT, BAR_WIDTH], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <>
      <Img
        name="Hero headline line 1 backdrop"
        src={staticFile("webpage-sections/hero-headline-line1-black.png")}
        style={{
          position: "absolute",
          top: 263,
          left: 713,
          width: 494,
        }}
      />
      <Interactive.Div
        name="Hero headline line 1 pink wipe"
        style={{
          position: "absolute",
          top: 263,
          left: 713,
          width: 494,
          height: 84.5,
          overflow: "hidden",
          clipPath: `inset(0 ${interpolate(frame, [0, 24], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.cubic),
          })}% 0 0)`,
        }}
      >
        <Img
          name="Hero headline line 1 pink"
          src={staticFile("webpage-sections/hero-headline-line1.png")}
          style={{ position: "absolute", top: 0, left: 0, width: 494 }}
        />
      </Interactive.Div>

      <Img
        name="Hero headline line 2 backdrop"
        src={staticFile("webpage-sections/hero-headline-line2-black.png")}
        style={{
          position: "absolute",
          top: 348,
          left: 471,
          width: 978,
        }}
      />
      <Interactive.Div
        name="Hero headline line 2 pink wipe"
        style={{
          position: "absolute",
          top: 348,
          left: 471,
          width: 978,
          height: 85.5,
          overflow: "hidden",
          clipPath: `inset(0 ${interpolate(frame, [14, 38], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.cubic),
          })}% 0 0)`,
        }}
      >
        <Img
          name="Hero headline line 2 pink"
          src={staticFile("webpage-sections/hero-headline-line2.png")}
          style={{ position: "absolute", top: 0, left: 0, width: 978 }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Hero search pill outline"
        style={{
          position: "absolute",
          top: BAR_TOP,
          left: BAR_CENTER_X - pillWidth / 2,
          width: pillWidth,
          height: BAR_HEIGHT,
          borderRadius: BAR_HEIGHT / 2,
          border: "4px solid #000000",
          backgroundColor: "#ffffff",
          opacity: interpolate(frame, [38, 54, 105, 120], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [38, 54], ["0px 20px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Img
        name="Hero search icon"
        src={staticFile("webpage-sections/hero-search-icon.png")}
        style={{
          position: "absolute",
          top: interpolate(
            frame,
            [80, 110],
            [ICON_CENTERED_TOP, ICON_FINAL_TOP],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.cubic),
            },
          ),
          left: interpolate(
            frame,
            [80, 110],
            [ICON_CENTERED_LEFT, ICON_FINAL_LEFT],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.cubic),
            },
          ),
          width: ICON_WIDTH,
          opacity: interpolate(frame, [38, 54, 105, 120], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [38, 54], ["0px 20px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />

      <Img
        name="Hero search final bar"
        src={staticFile("webpage-sections/hero-search.png")}
        style={{
          position: "absolute",
          top: BAR_TOP,
          left: BAR_LEFT,
          width: BAR_WIDTH,
          opacity: interpolate(frame, [98, 120], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          scale: interpolate(frame, [98, 120], [1.2, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
            output: "perceptual-scale",
          }),
        }}
      />
    </>
  );
};
