import { Fragment } from "react";
import { DrawnBorder, RiseWindow, ScaleWindow } from "./PageWindow";

// The 3x3 programme grid, with the arte-document card treatment: the cover
// settles from 120% to 100%, the copy rises out of its mask, and the outline
// is then drawn round the card - four segments back to back from the
// top-left corner, anti-clockwise.
//
// Both interior windows are inset clear of the outline, so the card's lines
// never ride up inside the cover or the copy, and are never drawn on top of
// a line already showing. The three cards in a row share a "from", so a row
// lands as a single beat, and the rows run top down.
//
// Outlines sit at x592-964 / x989-1361 / x1386-1759 and y960-1150 /
// y1175-1366 / y1391-1582. Inside each the cover strip starts 1px in - flush
// against the outline with no seam - and the copy 148px in.
const COLUMNS = [
  { left: 592, width: 372 },
  { left: 989, width: 372 },
  { left: 1386, width: 373 },
];

const COVER_INSET = 1;
const COVER_WIDTH = 131;
const COPY_LEFT = 148;
const COPY_TOP = 16;
const COPY_WIDTH = 210;
const COPY_HEIGHT = 160;

// Row 1 is the only one above the fold, so it closes the intro - its outline
// finishes at 166, just before the glide starts at 172. Rows 2 and 3 are
// carried past the fold by that glide and land a few frames after they
// arrive, while the page is still settling.
const ROWS = [
  { top: 960, height: 190, from: 130 },
  { top: 1175, height: 191, from: 178 },
  { top: 1391, height: 191, from: 192 },
];

export const Cards: React.FC = () => {
  return (
    <>
      {ROWS.map((row) =>
        COLUMNS.map((column) => (
          <Fragment key={`${row.top}-${column.left}`}>
            <ScaleWindow
              name="Card cover"
              top={row.top + COVER_INSET}
              left={column.left + COVER_INSET}
              width={COVER_WIDTH}
              height={row.height - COVER_INSET}
              from={row.from}
            />
            <RiseWindow
              name="Card copy"
              top={row.top + COPY_TOP}
              left={column.left + COPY_LEFT}
              width={COPY_WIDTH}
              height={COPY_HEIGHT}
              from={row.from}
              duration={26}
            />
            <DrawnBorder
              top={row.top}
              left={column.left}
              width={column.width}
              height={row.height}
              from={row.from + 8}
              segmentDuration={7}
            />
          </Fragment>
        )),
      )}
    </>
  );
};
