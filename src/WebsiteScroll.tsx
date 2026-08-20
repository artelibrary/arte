import {
  AbsoluteFill,
  Composition,
  Easing,
  Img,
  Interactive,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const WebsiteScrollComposition = () => {
  return (
    <Composition
      id="WebsiteScroll"
      component={WebsiteScroll}
      durationInFrames={1185}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

const SCROLL_EASING = Easing.bezier(0.45, 0, 0.55, 1);

export const WebsiteScroll: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Scene"
      style={{ backgroundColor: "#ffffff", overflow: "hidden" }}
    >
      <Interactive.Div
        name="Page scroll"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          scale: interpolate(
            frame,
            [0, 25, 610, 616, 626],
            [1.06, 1, 1, 1.02, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            },
          ),
          // Scroll checkpoints (frame -> scrollY), hold/travel per section:
          //   0    hero hold start                        y=0
          //   110  hero hold end / travel start
          //   150  documents hold start                   y=754
          //   280  documents hold end / travel start
          //   320  video feature hold start                y=1625
          //   380  video feature hold end / travel start
          //   415  books hold start                        y=2199
          //   470  books hold end / travel start
          //   510  regional info hold start                y=2767
          //   590  regional info hold end / wipe start
          //   600-605  scroll jump, fully masked by wipe panel
          //   615  추천 hold start (wipe fully open)         y=3505
          //   900  추천 hold end / travel start              y=3655
          //   945  events/notices hold start                y=4735
          //   1020 events/notices hold end / travel start
          //   1050 footer settle                            y=5018
          //   1184 final frame (footer + outro overlay on top)
          translate: interpolate(
            frame,
            [
              0, 110, 150, 280, 320, 380, 415, 470, 510, 590, 600, 605, 615,
              900, 945, 1020, 1050, 1184,
            ],
            [
              "0px 0px",
              "0px 0px",
              "0px -754px",
              "0px -754px",
              "0px -1625px",
              "0px -1625px",
              "0px -2199px",
              "0px -2199px",
              "0px -2767px",
              "0px -2767px",
              "0px -2767px",
              "0px -3505px",
              "0px -3505px",
              "0px -3655px",
              "0px -4735px",
              "0px -4735px",
              "0px -5018px",
              "0px -5018px",
            ],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: SCROLL_EASING,
            },
          ),
        }}
      >
        {/* Header — simple fade + slide up, matches the hero hold's arrival */}
        <Img
          name="Header"
          src={staticFile("webpage-sections/section-01.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            opacity: interpolate(frame, [0, 12], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(frame, [0, 12], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />

        {/* Hero — headline first, search bar 2 frames behind it */}
        <Interactive.Div
          name="Hero headline"
          style={{
            position: "absolute",
            top: 263,
            left: 471,
            width: 978,
            height: 170,
            opacity: interpolate(frame, [0, 10], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(frame, [0, 10], ["0px 40px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Hero headline black"
            src={staticFile("webpage-sections/hero-headline-black.png")}
            style={{ position: "absolute", top: 0, left: 0, width: 978 }}
          />
          <Interactive.Div
            name="Hero headline pink fill"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 978,
              height: 170,
              // Pink floods in from the left edge, starting once the hero's
              // entrance and the scene's settle scale have both landed.
              clipPath: `inset(0% ${interpolate(frame, [25, 55], [100, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.4, 0, 0.2, 1),
              })}% 0% 0%)`,
            }}
          >
            <Img
              name="Hero headline pink"
              src={staticFile("webpage-sections/hero-headline.png")}
              style={{ position: "absolute", top: 0, left: 0, width: 978 }}
            />
          </Interactive.Div>
        </Interactive.Div>
        <Img
          name="Hero search and chips"
          src={staticFile("webpage-sections/hero-search.png")}
          style={{
            position: "absolute",
            top: 473,
            left: 471,
            width: 978,
            opacity: interpolate(frame, [2, 12], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(frame, [2, 12], ["0px 40px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        />

        {/* Documents — title, tabs, then 5 cards curtain-reveal in a fast cascade */}
        <Img
          name="Doc section title"
          src={staticFile("webpage-sections/doc-title.png")}
          style={{
            position: "absolute",
            top: 834,
            left: 160,
            width: 1600,
            opacity: interpolate(frame, [150, 160], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [150, 160],
              ["0px 40px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />
        <Img
          name="Doc filter tabs"
          src={staticFile("webpage-sections/doc-tabs-static.png")}
          style={{
            position: "absolute",
            top: 956,
            left: 160,
            width: 1112,
            opacity: interpolate(frame, [152, 162], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [152, 162],
              ["-24px 0px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />
        <Interactive.Div
          name="Doc card 1 mask"
          style={{
            position: "absolute",
            top: 1041,
            left: 160,
            width: 340,
            overflow: "hidden",
            height: interpolate(frame, [152, 167], [0, 447], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Doc card 1 image"
            src={staticFile("webpage-sections/doc-card-1.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 340,
              scale: interpolate(frame, [152, 167], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [152, 167], ["-3deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>
        <Interactive.Div
          name="Doc card 2 mask"
          style={{
            position: "absolute",
            top: 1041,
            left: 530,
            width: 340,
            overflow: "hidden",
            height: interpolate(frame, [154, 169], [0, 447], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Doc card 2 image"
            src={staticFile("webpage-sections/doc-card-2.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 340,
              scale: interpolate(frame, [154, 169], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [154, 169], ["3deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>
        <Interactive.Div
          name="Doc card 3 mask"
          style={{
            position: "absolute",
            top: 1041,
            left: 900,
            width: 340,
            overflow: "hidden",
            height: interpolate(frame, [156, 171], [0, 447], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Doc card 3 image"
            src={staticFile("webpage-sections/doc-card-3.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 340,
              scale: interpolate(frame, [156, 171], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [156, 171], ["-3deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>
        <Interactive.Div
          name="Doc card 4 mask"
          style={{
            position: "absolute",
            top: 1041,
            left: 1270,
            width: 340,
            overflow: "hidden",
            height: interpolate(frame, [158, 173], [0, 447], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Doc card 4 image"
            src={staticFile("webpage-sections/doc-card-4.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 340,
              scale: interpolate(frame, [158, 173], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [158, 173], ["3deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>
        <Interactive.Div
          name="Doc card 5 mask"
          style={{
            position: "absolute",
            top: 1041,
            left: 1640,
            width: 280,
            overflow: "hidden",
            height: interpolate(frame, [160, 175], [0, 447], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Doc card 5 image"
            src={staticFile("webpage-sections/doc-card-5.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 280,
              scale: interpolate(frame, [160, 175], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [160, 175], ["-3deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>
        <Img
          name="Doc pagination"
          src={staticFile("webpage-sections/doc-pagination-static.png")}
          style={{
            position: "absolute",
            top: 1528,
            left: 882,
            width: 156,
            opacity: interpolate(frame, [175, 185], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [175, 185],
              ["0px 12px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />

        {/* Video feature — no entrance motion, just scrolls into view normally */}
        <Img
          name="Banner photo image"
          src={staticFile("webpage-sections/banner-photo.png")}
          style={{ position: "absolute", top: 1625, left: 0, width: 1920 }}
        />
        <Img
          name="Banner promo card image"
          src={staticFile("webpage-sections/s4-promo-card.png")}
          style={{ position: "absolute", top: 1752, left: 240, width: 648 }}
        />
        <Img
          name="Banner text block"
          src={staticFile("webpage-sections/s4-textblock.png")}
          style={{ position: "absolute", top: 1745, left: 968, width: 712 }}
        />

        {/* Books — title then 3 cards curtain-reveal */}
        <Img
          name="Cards section title"
          src={staticFile("webpage-sections/s5-title.png")}
          style={{
            position: "absolute",
            top: 2279,
            left: 160,
            width: 328,
            opacity: interpolate(frame, [415, 425], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [415, 425],
              ["0px 40px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />
        <Interactive.Div
          name="Cards card 1 mask"
          style={{
            position: "absolute",
            top: 2279,
            left: 632,
            width: 360,
            overflow: "hidden",
            height: interpolate(frame, [417, 432], [0, 408], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Cards card 1 image"
            src={staticFile("webpage-sections/s5-card-1.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 360,
              scale: interpolate(frame, [417, 432], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [417, 432], ["-3deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>
        <Interactive.Div
          name="Cards card 2 mask"
          style={{
            position: "absolute",
            top: 2279,
            left: 1016,
            width: 360,
            overflow: "hidden",
            height: interpolate(frame, [419, 434], [0, 408], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Cards card 2 image"
            src={staticFile("webpage-sections/s5-card-2.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 360,
              scale: interpolate(frame, [419, 434], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [419, 434], ["3deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>
        <Interactive.Div
          name="Cards card 3 mask"
          style={{
            position: "absolute",
            top: 2279,
            left: 1400,
            width: 360,
            overflow: "hidden",
            height: interpolate(frame, [421, 436], [0, 408], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Cards card 3 image"
            src={staticFile("webpage-sections/s5-card-3.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 360,
              scale: interpolate(frame, [421, 436], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [421, 436], ["-3deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>

        {/* Regional info — title then 3 rows fade up in sequence */}
        <Img
          name="Region info title"
          src={staticFile("webpage-sections/region-title.png")}
          style={{
            position: "absolute",
            top: 2847,
            left: 160,
            width: 1600,
            opacity: interpolate(frame, [510, 520], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [510, 520],
              ["0px 40px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />
        <Img
          name="Region info row 1"
          src={staticFile("webpage-sections/region-row-1.png")}
          style={{
            position: "absolute",
            top: 2969,
            left: 160,
            width: 1600,
            opacity: interpolate(frame, [512, 522], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [512, 522],
              ["0px 40px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />
        <Img
          name="Region info row 2"
          src={staticFile("webpage-sections/region-row-2.png")}
          style={{
            position: "absolute",
            top: 3121,
            left: 160,
            width: 1600,
            opacity: interpolate(frame, [514, 524], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [514, 524],
              ["0px 40px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />
        <Img
          name="Region info row 3"
          src={staticFile("webpage-sections/region-row-3.png")}
          style={{
            position: "absolute",
            top: 3273,
            left: 160,
            width: 1600,
            opacity: interpolate(frame, [516, 526], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [516, 526],
              ["0px 40px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />

        {/* 추천 — the visual highlight: title, two feature cards, curated books banner */}
        <Img
          name="Recommended content title"
          src={staticFile("webpage-sections/s7-title.png")}
          style={{
            position: "absolute",
            top: 3585,
            left: 160,
            width: 1600,
            opacity: interpolate(frame, [615, 625], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [615, 625],
              ["0px 40px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />
        <Interactive.Div
          name="Recommended feature left mask"
          style={{
            position: "absolute",
            top: 3707,
            left: 160,
            width: 780,
            overflow: "hidden",
            height: interpolate(frame, [617, 632], [0, 407], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Recommended feature left image"
            src={staticFile("webpage-sections/s7-feature-left.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 780,
              scale: interpolate(frame, [617, 632], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [617, 632], ["-2deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>
        <Interactive.Div
          name="Recommended feature right mask"
          style={{
            position: "absolute",
            top: 3707,
            left: 980,
            width: 780,
            overflow: "hidden",
            height: interpolate(frame, [619, 634], [0, 407], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Recommended feature right image"
            src={staticFile("webpage-sections/s7-feature-right.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 780,
              scale: interpolate(frame, [619, 634], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [619, 634], ["2deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>
        <Img
          name="Recommended book intro"
          src={staticFile("webpage-sections/s7-book-intro.png")}
          style={{
            position: "absolute",
            top: 4234,
            left: 260,
            width: 199,
            opacity: interpolate(frame, [634, 644], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [634, 644],
              ["0px 40px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />
        <Interactive.Div
          name="Recommended book 1 mask"
          style={{
            position: "absolute",
            top: 4234,
            left: 857,
            width: 249,
            overflow: "hidden",
            height: interpolate(frame, [636, 651], [0, 341], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Recommended book 1 image"
            src={staticFile("webpage-sections/s7-book-1.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 249,
              scale: interpolate(frame, [636, 651], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [636, 651], ["-4deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>
        <Interactive.Div
          name="Recommended book 2 mask"
          style={{
            position: "absolute",
            top: 4234,
            left: 1134,
            width: 249,
            overflow: "hidden",
            height: interpolate(frame, [638, 653], [0, 341], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Recommended book 2 image"
            src={staticFile("webpage-sections/s7-book-2.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 249,
              scale: interpolate(frame, [638, 653], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [638, 653], ["4deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>
        <Interactive.Div
          name="Recommended book 3 mask"
          style={{
            position: "absolute",
            top: 4234,
            left: 1411,
            width: 249,
            overflow: "hidden",
            height: interpolate(frame, [640, 655], [0, 341], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
          }}
        >
          <Img
            name="Recommended book 3 image"
            src={staticFile("webpage-sections/s7-book-3.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 249,
              scale: interpolate(frame, [640, 655], [1.06, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              rotate: interpolate(frame, [640, 655], ["-4deg", "0deg"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
            }}
          />
        </Interactive.Div>

        {/* Events/notices — two columns fade up, right slightly behind left */}
        <Img
          name="Two column left"
          src={staticFile("webpage-sections/s8-col-left.png")}
          style={{
            position: "absolute",
            top: 4815,
            left: 160,
            width: 700,
            opacity: interpolate(frame, [945, 955], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [945, 955],
              ["0px 50px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />
        <Img
          name="Two column right"
          src={staticFile("webpage-sections/s8-col-right.png")}
          style={{
            position: "absolute",
            top: 4815,
            left: 900,
            width: 860,
            opacity: interpolate(frame, [947, 957], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [947, 957],
              ["0px 50px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />

        {/* Partner logo strip — passes by during the approach to the footer, quick fade */}
        <Img
          name="Contact bar"
          src={staticFile("webpage-sections/section-09.png")}
          style={{
            position: "absolute",
            top: 5420,
            left: 0,
            width: 1920,
            opacity: interpolate(frame, [1005, 1015], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            translate: interpolate(
              frame,
              [1005, 1015],
              ["0px 30px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            ),
          }}
        />

        {/* Footer — no entrance motion, just scrolls into view normally */}
        <Img
          name="Footer"
          src={staticFile("webpage-sections/section-10.png")}
          style={{ position: "absolute", top: 5592, left: 0, width: 1920 }}
        />
      </Interactive.Div>

      <AbsoluteFill
        name="Vignette"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 14%, rgba(0,0,0,0) 86%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <Sequence
        name="Wipe transition"
        from={590}
        durationInFrames={25}
        premountFor={fps}
      >
        <WipeOverlay />
      </Sequence>

      <Sequence name="Outro" from={1095} durationInFrames={90} premountFor={fps}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

const WipeOverlay: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Wipe panel"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1920,
        height: 1080,
        backgroundColor: "#FF2268",
        // Wipes up from the bottom to fully cover (0-10), holds covered
        // (10-15), then continues wiping up and off the top (15-25).
        clipPath: `inset(${interpolate(frame, [15, 25], [0, 100], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.8, 0, 0.2, 1),
        })}% 0% ${interpolate(frame, [0, 10], [100, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.8, 0, 0.2, 1),
        })}% 0%)`,
      }}
    />
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill name="Outro backdrop" style={{ backgroundColor: "#000000" }}>
      <Interactive.Div
        name="Outro wordmark"
        style={{
          position: "absolute",
          left: 387.5,
          top: 445,
          width: 1590,
          height: 390,
          overflow: "hidden",
          opacity: interpolate(frame, [0, 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
          }),
          scale: interpolate(frame, [0, 30], [0.9, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
            output: "perceptual-scale",
          }),
        }}
      >
        {/*
          Cropped from the footer's "arte 라이브러리" wordmark, pixel-measured
          via a PNG-decode probe script (with generous top padding, since the
          logo's ascenders sit above the Korean text's own bbox). Magnified 6x
          via a `scale` transform anchored at the crop's near corner
          (transformOrigin "0 0" + a matching left/top offset), rather than
          by inflating the <Img>'s own width (silently fails to render past
          ~1920-2000px wide in `remotion still`) or by nesting the <Img>
          inside an extra plain wrapper div (also silently fails to render as
          a grandchild of <Interactive.Div> — keep <Img> a direct child of it).
        */}
        <Img
          name="Wordmark crop"
          src={staticFile("webpage-sections/section-10.png")}
          style={{
            position: "absolute",
            top: -390,
            left: -840,
            width: 1920,
            scale: 6,
            transformOrigin: "0px 0px",
          }}
        />
      </Interactive.Div>
    </AbsoluteFill>
  );
};
