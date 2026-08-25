import { Fragment } from "react";
import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { FadeWindow, ScaleWindow, SlideWindow, DrawnBorder } from "./PageWindow";

// 문서: text fades in (no rise/mask), only the cover art scales 120% -> 100%.
// The flick that brings this section into view is 30 frames (160-190), so
// every "from" here is offset by 26 - just short of that - meaning the
// motion is only really getting underway once the section is actually on
// screen, not mid-flick where it would be missed.
const BASE_DELAY = 26;

const TAB_CHIPS = [
  { left: 160, width: 75 },
  { left: 235, width: 189 },
  { left: 424, width: 132 },
  { left: 556, width: 113 },
  { left: 669, width: 113 },
  { left: 782, width: 170 },
  { left: 952, width: 132 },
  { left: 1084, width: 113 },
  { left: 1197, width: 75 },
];

// Each card is its own "list" frame in Figma (18172:6852 children), 340x447,
// with "doc_img" filling that entire frame and "text" as a single block
// overlaid on its lower portion - not a separately-cropped image strip.
const CARD_WIDTH = 340;
const CARD_HEIGHT = 447;
const CARD_TEXT_TOP = 232;
const CARD_TEXT_HEIGHT = 215;

const CARDS = [
  { left: 160, from: BASE_DELAY + 0 },
  { left: 530, from: BASE_DELAY + 8 },
  { left: 900, from: BASE_DELAY + 16 },
  { left: 1270, from: BASE_DELAY + 24 },
  { left: 1640, from: BASE_DELAY + 32 },
];

export const DocSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <FadeWindow name="Doc title" top={684} left={160} width={1600} height={62} from={BASE_DELAY} />
      <Interactive.Div
        name="Doc title underline"
        style={{
          position: "absolute",
          top: 762,
          left: 160,
          height: 4,
          backgroundColor: "#000000",
          width: interpolate(frame, [BASE_DELAY + 16, BASE_DELAY + 40], [0, 1600], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      {/* Tabs fan out from "전체" (arte-document's ListHeader technique):
          the anchor chip just steps in, every other chip starts stacked on
          its slot and slides right into its own resting position. */}
      <FadeWindow name="Doc tab 전체" top={806} left={TAB_CHIPS[0].left} width={TAB_CHIPS[0].width} height={45} from={BASE_DELAY} duration={8} />
      {TAB_CHIPS.slice(1).map((chip, i) => (
        <SlideWindow
          key={chip.left}
          name={`Doc tab ${i + 2}`}
          top={806}
          left={chip.left}
          width={chip.width}
          height={45}
          offsetX={TAB_CHIPS[0].left - chip.left}
          from={BASE_DELAY + 4}
        />
      ))}

      {CARDS.map((card, i) => {
        const textFrom = card.from + 30;
        const borderFrom = textFrom + 20;

        return (
          <Fragment key={card.left}>
            <ScaleWindow
              name={`Doc card ${i + 1} doc_img`}
              top={891}
              left={card.left}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
              from={card.from}
            />
            <FadeWindow
              name={`Doc card ${i + 1} text`}
              top={891 + CARD_TEXT_TOP}
              left={card.left}
              width={CARD_WIDTH}
              height={CARD_TEXT_HEIGHT}
              from={textFrom}
            />
            <DrawnBorder
              top={891}
              left={card.left}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
              from={borderFrom}
            />
          </Fragment>
        );
      })}
    </>
  );
};
