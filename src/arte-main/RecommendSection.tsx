import { Fragment } from "react";
import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { RiseWindow, ScaleWindow, DrawnBorder } from "./PageWindow";

const BASE_DELAY = 26;

const FEATURE_CARDS = [
  { left: 160, from: BASE_DELAY },
  { left: 980, from: BASE_DELAY + 8 },
];

const BOOK_CURATION_TOP = 3483;
const BOOK_CURATION_WIDTH = 1600;
const BOOK_CURATION_HEIGHT = 501;
const BOOK_CURATION_CENTER_X = 160 + BOOK_CURATION_WIDTH / 2;
const BACKDROP_FROM = BASE_DELAY + 70;

const BOOKS = [
  { left: 857, from: BACKDROP_FROM + 30 },
  { left: 1134, from: BACKDROP_FROM + 38 },
  { left: 1411, from: BACKDROP_FROM + 46 },
];

export const RecommendSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <RiseWindow name="추천 title" top={2914} left={160} width={1600} height={62} from={BASE_DELAY} />
      <Interactive.Div
        name="추천 title underline"
        style={{
          position: "absolute",
          top: 2992,
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

      {FEATURE_CARDS.map((card) => (
        <Fragment key={card.left}>
          <ScaleWindow name="Feature image" top={3036} left={card.left} width={780} height={204} from={card.from} />
          <RiseWindow name="Feature text" top={3240} left={card.left} width={780} height={203} from={card.from + 14} />
          <DrawnBorder top={3036} left={card.left} width={780} height={407} from={card.from + 44} />
        </Fragment>
      ))}

      {/* Book curation strip: the black backdrop opens from the centre
          outward to both sides, then the label and covers rise in. */}
      <Interactive.Div
        name="Book curation backdrop"
        style={{
          position: "absolute",
          top: BOOK_CURATION_TOP,
          left: interpolate(
            frame,
            [BACKDROP_FROM, BACKDROP_FROM + 24],
            [BOOK_CURATION_CENTER_X, 160],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            },
          ),
          width: interpolate(frame, [BACKDROP_FROM, BACKDROP_FROM + 24], [0, BOOK_CURATION_WIDTH], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          height: BOOK_CURATION_HEIGHT,
          backgroundColor: "#000000",
        }}
      />
      <RiseWindow
        name="북 큐레이션 label"
        top={BOOK_CURATION_TOP + 80}
        left={260}
        width={199}
        height={341}
        from={BACKDROP_FROM + 24}
      />
      {BOOKS.map((book) => (
        <Fragment key={book.left}>
          <ScaleWindow name="Book cover art" top={BOOK_CURATION_TOP + 80} left={book.left} width={249} height={171} from={book.from} />
          <RiseWindow
            name="Book cover caption"
            top={BOOK_CURATION_TOP + 80 + 171}
            left={book.left}
            width={249}
            height={170}
            from={book.from + 10}
          />
          <DrawnBorder top={BOOK_CURATION_TOP + 80} left={book.left} width={249} height={341} from={book.from + 40} />
        </Fragment>
      ))}
    </>
  );
};
