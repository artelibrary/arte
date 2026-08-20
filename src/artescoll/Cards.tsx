import { Fragment } from "react";
import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { BottomUpReveal } from "./BottomUpReveal";

const CARD_WIDTH = 360;
const CARD_IMAGE_HEIGHT = 260;
const CARD_TEXT_HEIGHT = 148;
const CARD_HEIGHT = CARD_IMAGE_HEIGHT + CARD_TEXT_HEIGHT;

const CARDS = [
  { left: 632, imageFrom: 8, textFrom: 26, borderFrom: 34 },
  { left: 1016, imageFrom: 13, textFrom: 31, borderFrom: 39 },
  { left: 1400, imageFrom: 18, textFrom: 36, borderFrom: 44 },
];

export const Cards: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <BottomUpReveal
        name="Cards section title"
        src="webpage-sections/s5-title-crop.png"
        top={2318}
        left={160}
        width={328}
        height={61}
        from={0}
      />
      {CARDS.map((card, i) => {
        // Outline is four 1px rules drawn back to back from the top-left
        // corner, running anti-clockwise: down the left edge, across the
        // bottom, up the right edge, then back along the top.
        const leftDraw = card.borderFrom;
        const bottomDraw = leftDraw + 14;
        const rightDraw = bottomDraw + 14;
        const topDraw = rightDraw + 14;

        return (
          <Fragment key={card.left}>
            <Interactive.Div
              name={`Cards card ${i + 1} image frame`}
              style={{
                position: "absolute",
                top: 2279,
                left: card.left,
                width: CARD_WIDTH,
                height: CARD_IMAGE_HEIGHT,
                overflow: "hidden",
              }}
            >
              <Img
                name={`Cards card ${i + 1} image`}
                src={staticFile(`webpage-sections/s5-card-${i + 1}-image.png`)}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: CARD_WIDTH,
                  scale: interpolate(
                    frame,
                    [card.imageFrom, card.imageFrom + 28],
                    [1.2, 1],
                    {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: Easing.out(Easing.cubic),
                      output: "perceptual-scale",
                    },
                  ),
                }}
              />
            </Interactive.Div>
            <BottomUpReveal
              name={`Cards card ${i + 1} text`}
              src={`webpage-sections/s5-card-${i + 1}-text.png`}
              top={2539}
              left={card.left}
              width={CARD_WIDTH}
              height={CARD_TEXT_HEIGHT}
              from={card.textFrom}
            />

            <Interactive.Div
              name={`Cards card ${i + 1} outline left`}
              style={{
                position: "absolute",
                top: 2279,
                left: card.left,
                width: 1,
                height: CARD_HEIGHT,
                backgroundColor: "#000000",
                clipPath: `inset(0 0 ${interpolate(
                  frame,
                  [leftDraw, leftDraw + 14],
                  [100, 0],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.linear,
                  },
                )}% 0)`,
              }}
            />
            <Interactive.Div
              name={`Cards card ${i + 1} outline bottom`}
              style={{
                position: "absolute",
                top: 2279 + CARD_HEIGHT,
                left: card.left,
                width: CARD_WIDTH,
                height: 1,
                backgroundColor: "#000000",
                clipPath: `inset(0 ${interpolate(
                  frame,
                  [bottomDraw, bottomDraw + 14],
                  [100, 0],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.linear,
                  },
                )}% 0 0)`,
              }}
            />
            <Interactive.Div
              name={`Cards card ${i + 1} outline right`}
              style={{
                position: "absolute",
                top: 2279,
                left: card.left + CARD_WIDTH,
                width: 1,
                height: CARD_HEIGHT,
                backgroundColor: "#000000",
                clipPath: `inset(${interpolate(
                  frame,
                  [rightDraw, rightDraw + 14],
                  [100, 0],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.linear,
                  },
                )}% 0 0 0)`,
              }}
            />
            <Interactive.Div
              name={`Cards card ${i + 1} outline top`}
              style={{
                position: "absolute",
                top: 2279,
                left: card.left,
                width: CARD_WIDTH,
                height: 1,
                backgroundColor: "#000000",
                clipPath: `inset(0 0 0 ${interpolate(
                  frame,
                  [topDraw, topDraw + 14],
                  [100, 0],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.linear,
                  },
                )}%)`,
              }}
            />
          </Fragment>
        );
      })}
    </>
  );
};
