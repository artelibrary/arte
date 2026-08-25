import { RiseWindow } from "./PageWindow";

// The 3x3 programme grid. Each card is one window over the whole card - cover
// strip, copy and outline together - so the outline arrives exactly once, as
// part of the card. Drawing a border on top of the render would put a crisp
// line over the one already baked in and read as a doubled rule.
//
// The three cards in a row share a "from", so a row lands as a single beat,
// and the rows run top down.
//
// Cards sit at x592 / x989 / x1386 and y960 / y1175 / y1391, each 372x190 to
// the far edge of its outline. The windows start 1px left and 2px above that
// so the outline's antialiasing is inside the crop rather than straddling it.
const COLUMNS = [591, 988, 1385];

const CARD_WIDTH = 375;
const CARD_HEIGHT = 196;

// Row 1 is the only one above the fold, so it closes the intro. Rows 2 and 3
// are carried past the fold by the glide that starts at frame 172 and land a
// few frames after they arrive, while the page is still settling.
const ROWS = [
  { top: 958, from: 132 },
  { top: 1173, from: 178 },
  { top: 1389, from: 192 },
];

export const Cards: React.FC = () => {
  return (
    <>
      {ROWS.map((row) =>
        COLUMNS.map((left) => (
          <RiseWindow
            key={`${row.top}-${left}`}
            name="Programme card"
            top={row.top}
            left={left}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            from={row.from}
            duration={30}
          />
        )),
      )}
    </>
  );
};
