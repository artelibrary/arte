import {
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const Hero: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Img
        name="Hero headline"
        src={staticFile("webpage-sections/hero-headline.png")}
        style={{
          position: "absolute",
          top: 263,
          left: 471,
          width: 978,
          opacity: interpolate(frame, [0, 16], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [0, 16], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Img
        name="Hero search and chips"
        src={staticFile("webpage-sections/hero-search.png")}
        style={{
          position: "absolute",
          top: 473,
          left: 471,
          width: 978,
          opacity: interpolate(frame, [3, 19], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          translate: interpolate(frame, [3, 19], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: [
              Easing.bezier(0.33333333333333337, 1, 0.6666666666666667, 1),
            ],
          }),
          scale: interpolate(
            frame,
            [
              19, 49, 79, 109, 139, 169, 199, 229, 259, 289, 319, 349, 379, 409,
              439, 469, 499, 529, 559, 589, 619, 649, 679, 709, 739, 749,
            ],
            [
              1, 1.018, 1, 1.018, 1, 1.018, 1, 1.018, 1, 1.018, 1, 1.018, 1,
              1.018, 1, 1.018, 1, 1.018, 1, 1.018, 1, 1.018, 1, 1.018, 1, 1.018,
            ],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.quad),
              output: "perceptual-scale",
            },
          ),
        }}
      />
    </>
  );
};
