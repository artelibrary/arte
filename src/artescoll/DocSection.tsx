import { Fragment } from "react";
import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame } from "remotion";

const TAB_CHIPS = [
  { file: "doc-tab-1.png", left: 160, width: 75 },
  { file: "doc-tab-2.png", left: 235, width: 189 },
  { file: "doc-tab-3.png", left: 424, width: 132 },
  { file: "doc-tab-4.png", left: 556, width: 113 },
  { file: "doc-tab-5.png", left: 669, width: 113 },
  { file: "doc-tab-6.png", left: 782, width: 170 },
  { file: "doc-tab-7.png", left: 952, width: 132 },
  { file: "doc-tab-8.png", left: 1084, width: 113 },
  { file: "doc-tab-9.png", left: 1197, width: 75 },
];

const DOC_CARD_IMAGE_HEIGHT = 260;

const DOC_CARDS = [
  { index: 1, left: 160, width: 340, from: 10 },
  { index: 2, left: 530, width: 340, from: 14 },
  { index: 3, left: 900, width: 340, from: 18 },
  { index: 4, left: 1270, width: 340, from: 22 },
  { index: 5, left: 1640, width: 280, from: 26 },
];

// Each card's caption fades in as three separate lines - tag, title,
// hashtags - one after another, rather than as a single block.
const CARD_LINES = [
  { suffix: "tag", top: 0, height: 80 },
  { suffix: "title", top: 80, height: 176 },
  { suffix: "hashtags", top: 256, height: 118 },
];

export const DocSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Img
        name="Doc section title"
        src={staticFile("webpage-sections/doc-title.png")}
        style={{
          position: "absolute",
          top: 834,
          left: 160,
          width: 1600,
          opacity: interpolate(frame, [7, 23], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      <Interactive.Div
        name="Doc section title underline"
        style={{
          position: "absolute",
          top: 912,
          left: 160,
          height: 4,
          backgroundColor: "#000000",
          width: interpolate(frame, [23, 43], [0, 1600], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
      {TAB_CHIPS.map((chip, i) => {
        // "전체" slides up into place by itself first; only once it has
        // settled do the rest fade in while fanning out to the right.
        const allChipSettled = 32;
        if (i === 0) {
          return (
            <Img
              key={chip.file}
              name="Doc filter tab 1"
              src={staticFile(`webpage-sections/${chip.file}`)}
              style={{
                position: "absolute",
                top: 956,
                left: chip.left,
                width: chip.width,
                opacity: interpolate(frame, [16, allChipSettled], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.out(Easing.cubic),
                }),
                translate: interpolate(
                  frame,
                  [16, allChipSettled],
                  ["0px 30px", "0px 0px"],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.out(Easing.cubic),
                  },
                ),
              }}
            />
          );
        }

        const spreadStart = allChipSettled + 2 + (i - 1) * 6;
        const spreadEnd = spreadStart + 28;
        return (
          <Img
            key={chip.file}
            name={`Doc filter tab ${i + 1}`}
            src={staticFile(`webpage-sections/${chip.file}`)}
            style={{
              position: "absolute",
              top: 956,
              left: interpolate(
                frame,
                [spreadStart, spreadEnd],
                [160, chip.left],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.out(Easing.cubic),
                },
              ),
              width: chip.width,
              opacity: interpolate(frame, [spreadStart, spreadStart + 16], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        );
      })}
      {DOC_CARDS.map((card) => (
        <Fragment key={card.index}>
          <Interactive.Div
            name={`Doc card ${card.index} image frame`}
            style={{
              position: "absolute",
              top: 1041,
              left: card.left,
              width: card.width,
              height: DOC_CARD_IMAGE_HEIGHT,
              overflow: "hidden",
            }}
          >
            <Img
              name={`Doc card ${card.index} image`}
              src={staticFile(`webpage-sections/doc-card-${card.index}-image.png`)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: card.width,
                scale: interpolate(frame, [card.from, card.from + 28], [1.2, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.out(Easing.cubic),
                  output: "perceptual-scale",
                }),
              }}
            />
          </Interactive.Div>
          <Interactive.Div
            name={`Doc card ${card.index} gradient`}
            style={{
              position: "absolute",
              top: 1041 + 156,
              left: card.left,
              width: card.width,
              height: 104,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.75))",
              opacity: interpolate(
                frame,
                [card.from + 10, card.from + 26],
                [0, 1],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.out(Easing.cubic),
                },
              ),
            }}
          />
          {CARD_LINES.map((line, lineIndex) => (
            <Img
              key={line.suffix}
              name={`Doc card ${card.index} ${line.suffix}`}
              src={staticFile(
                `webpage-sections/doc-card-${card.index}-${line.suffix}.png`,
              )}
              style={{
                position: "absolute",
                top: 1041 + 260 + line.top,
                left: card.left,
                width: card.width,
                opacity: interpolate(
                  frame,
                  [
                    card.from + 20 + lineIndex * 8,
                    card.from + 34 + lineIndex * 8,
                  ],
                  [0, 1],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.out(Easing.cubic),
                  },
                ),
              }}
            />
          ))}
        </Fragment>
      ))}
      <Img
        name="Doc pagination"
        src={staticFile("webpage-sections/doc-pagination-static.png")}
        style={{
          position: "absolute",
          top: 1528,
          left: 882,
          width: 156,
          opacity: interpolate(frame, [46, 58], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
        }}
      />
    </>
  );
};
