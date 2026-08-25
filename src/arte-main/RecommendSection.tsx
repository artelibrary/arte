import { Fragment } from "react";
import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { RiseWindow, FadeWindow, ScaleWindow, DrawnBorder } from "./PageWindow";

const BASE_DELAY = 26;

const FEATURE_CARDS = [
  { left: 160, from: BASE_DELAY },
  { left: 980, from: BASE_DELAY + 8 },
];

const BOOK_CURATION_TOP = 3483;
const BOOK_CURATION_WIDTH = 1600;
const BOOK_CURATION_HEIGHT = 501;
const BOOK_CURATION_CENTER_X = 160 + BOOK_CURATION_WIDTH / 2;
const BACKDROP_FROM = BASE_DELAY + 4;

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
          <RiseWindow name="Feature title" top={3268} left={card.left + 28} width={400} height={60} from={card.from + 14} />
          <RiseWindow name="Feature description" top={3324} left={card.left + 28} width={724} height={27} from={card.from + 22} />
          <RiseWindow name="Feature more link" top={3391} left={card.left + 28} width={200} height={30} from={card.from + 30} />
          <DrawnBorder top={3036} left={card.left} width={780} height={407} from={card.from} />
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
      {/* This section's y leaves no margin below the fold (see ArteMain.tsx),
          so rec-left/rec-books (Figma's own +80 from the backdrop's top) run
          past the frame's bottom edge at their real position - the label's
          date and each cover's author/year line both land off-screen.
          Wrapping the whole row in a plain position:absolute box shifted up
          80px moves it flush with the backdrop's own top instead: a
          position:absolute ancestor is what CSS resolves an absolutely
          positioned descendant's own top/left against, so every child below
          keeps its normal (uncropped-position) numbers and still lands
          correctly, just 80px higher on screen. */}
      <div style={{ position: "absolute", top: -80, left: 0 }}>
        {/* "rec-left" (Figma 18170:5087): title, #미래/AI tag + arrow, and
            the date all fade in together as one block. */}
        <FadeWindow
          name="북 큐레이션 label"
          top={BOOK_CURATION_TOP + 80}
          left={260}
          width={199}
          height={341}
          from={BACKDROP_FROM + 24}
        />
        {/* Each cover is its own "list" frame, same as 문서: "image 9994"
            fills the entire 249x341 box and the title/author pair is one
            fade block overlaid on its lower portion. */}
        {BOOKS.map((book) => (
          <Fragment key={book.left}>
            <ScaleWindow name="Book cover image 9994" top={BOOK_CURATION_TOP + 80} left={book.left} width={249} height={341} from={book.from} />
            <FadeWindow
              name="Book cover text"
              top={BOOK_CURATION_TOP + 80 + 171}
              left={book.left}
              width={249}
              height={170}
              from={book.from + 30}
            />
            <DrawnBorder top={BOOK_CURATION_TOP + 80} left={book.left} width={249} height={341} from={book.from} />
          </Fragment>
        ))}
      </div>
    </>
  );
};
