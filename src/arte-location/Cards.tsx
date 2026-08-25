import { Fragment } from "react";
import { DrawnBorder, RiseWindow, ScaleWindow } from "./PageWindow";

// The 3x3 programme grid. Each card is a 132px cover strip with the copy
// beside it inside a 1px outline, and gets the arte-document card treatment:
// the cover settles from 120% to 100%, the copy rises out of its mask six
// frames later, and the outline is then drawn round the whole card - four
// segments back to back from the top-left corner, anti-clockwise.
//
// The interior windows stop 1px short of the outline on every side, so the
// border only ever arrives by being drawn.
//
// Grid: columns at x592 / x989 / x1386, each 372 wide to the far edge; rows
// at y960 / y1175 / y1391, each 190 tall. Cover strip 131 wide, copy 240.
const COLUMNS = [592, 989, 1386];

const CARD_WIDTH = 372;
const CARD_HEIGHT = 190;
const COVER_WIDTH = 131;
const COPY_LEFT = 132;
const COPY_WIDTH = 240;

// Row 1 is the only one above the fold, so it plays during the intro. Rows 2
// and 3 are carried past the fold by the glide that starts at frame 172 and
// begin a few frames after they arrive, so the motion is still running when
// the page settles under them.
const ROWS = [
  { top: 960, from: 112 },
  { top: 1175, from: 178 },
  { top: 1391, from: 188 },
];

export const Cards: React.FC = () => {
  return (
    <>
      {ROWS.map((row) =>
        COLUMNS.map((left, column) => {
          const from = row.from + column * 6;

          return (
            <Fragment key={`${row.top}-${left}`}>
              <ScaleWindow
                name="Card cover"
                top={row.top + 1}
                left={left + 1}
                width={COVER_WIDTH}
                height={CARD_HEIGHT - 1}
                from={from}
              />
              <RiseWindow
                name="Card copy"
                top={row.top + 1}
                left={left + COPY_LEFT}
                width={COPY_WIDTH}
                height={CARD_HEIGHT - 1}
                from={from + 6}
                duration={26}
              />
              <DrawnBorder
                top={row.top}
                left={left}
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
                from={from + 12}
                segmentDuration={8}
              />
            </Fragment>
          );
        }),
      )}
    </>
  );
};
