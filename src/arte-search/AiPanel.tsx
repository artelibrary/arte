import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// The AI answer panel, and the whole loading -> loaded beat.
//
// The grey #f5f5f5 block unfolds downwards from the top of its own box: it
// opens to the 753px skeleton height first, holds there while the placeholder
// bars sit in place, then grows on to its final 1301px as the real answer
// arrives. Nothing is clipped to the box because every reveal below is timed
// to start only once the box has already grown past it.
//
// The keyword sections further down the page are placed at their final
// coordinates from the start. The 548px the page grows by when the panel
// expands happens entirely below the fold at scroll 0, so pinning them would
// cost a shift nobody can see.
//
// Card outlines are four 1px rules drawn back to back from the top-left
// corner, running anti-clockwise - down the left edge, across the bottom, up
// the right edge, then back along the top - on linear easing so the pen keeps
// a constant speed the whole way round. On row 1 the bottom edge is drawn
// below the fold; the eye picks the line back up as the right edge climbs
// into view.
export const AiPanel: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="AI panel"
        style={{
          position: "absolute",
          top: 401,
          left: 160,
          width: 1600,
          backgroundColor: "#f5f5f5",
          height: interpolate(frame, [8, 34, 118, 146], [0, 753, 753, 1301], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      {/* Loading state - skeleton placeholders. */}
      <div
        style={{
          position: "absolute",
          top: 480,
          left: 240,
          width: 1440,
          height: 44,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Loading heading"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1440,
            height: 44,
            overflow: "hidden",
            translate: interpolate(frame, [20, 44], ["0px 44px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [20, 34, 110, 126], [0, 1, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Loading page"
            src={staticFile("arte-search/page-loading.png")}
            style={{
              position: "absolute",
              top: -480,
              left: -240,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 548,
          left: 240,
          width: 1440,
          height: 33,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Loading description"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1440,
            height: 33,
            overflow: "hidden",
            translate: interpolate(frame, [28, 52], ["0px 33px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [28, 42, 110, 126], [0, 1, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Loading page"
            src={staticFile("arte-search/page-loading.png")}
            style={{
              position: "absolute",
              top: -548,
              left: -240,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 615,
          left: 240,
          width: 1440,
          height: 400,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Loading skeleton"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1440,
            height: 400,
            overflow: "hidden",
            opacity: interpolate(frame, [48, 80, 108, 122], [0, 1, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Loading page"
            src={staticFile("arte-search/page-loading.png")}
            style={{
              position: "absolute",
              top: -615,
              left: -240,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1040,
          left: 240,
          width: 1440,
          height: 40,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Loading pagination"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1440,
            height: 40,
            overflow: "hidden",
            translate: interpolate(frame, [64, 92], ["0px 40px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [64, 78, 108, 122], [0, 1, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Loading page"
            src={staticFile("arte-search/page-loading.png")}
            style={{
              position: "absolute",
              top: -1040,
              left: -240,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      {/* Loaded state - the answer replaces the skeleton. */}
      <div
        style={{
          position: "absolute",
          top: 480,
          left: 240,
          width: 1440,
          height: 44,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="AI heading"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1440,
            height: 44,
            overflow: "hidden",
            opacity: interpolate(frame, [122, 140], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -480,
              left: -240,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 545,
          left: 240,
          width: 1440,
          height: 33,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="AI answer line 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1440,
            height: 33,
            overflow: "hidden",
            translate: interpolate(frame, [128, 154], ["0px 33px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [128, 142], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -545,
              left: -240,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 578,
          left: 240,
          width: 1440,
          height: 34,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="AI answer line 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1440,
            height: 34,
            overflow: "hidden",
            translate: interpolate(frame, [134, 160], ["0px 34px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [134, 148], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -578,
              left: -240,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 650,
          left: 236,
          width: 430,
          height: 50,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="AI category tabs"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 430,
            height: 50,
            overflow: "hidden",
            translate: interpolate(frame, [142, 168], ["0px 50px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [142, 156], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -650,
              left: -236,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      {/* Card 1 */}
      <div
        style={{
          position: "absolute",
          top: 739,
          left: 241,
          width: 276,
          height: 388,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 1 cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 276,
            height: 388,
            overflow: "hidden",
            scale: interpolate(frame, [152, 196], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [152, 170], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -739,
              left: -241,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <Interactive.Div
        name="Card 1 outline left"
        style={{
          position: "absolute",
          top: 738,
          left: 240,
          width: 1,
          height: 390,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [160, 167], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0)`,
        }}
      />
      <Interactive.Div
        name="Card 1 outline bottom"
        style={{
          position: "absolute",
          top: 1127,
          left: 240,
          width: 700,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [167, 179], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0 0)`,
        }}
      />
      <Interactive.Div
        name="Card 1 outline right"
        style={{
          position: "absolute",
          top: 738,
          left: 939,
          width: 1,
          height: 390,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [179, 186], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0 0 0)`,
        }}
      />
      <Interactive.Div
        name="Card 1 outline top"
        style={{
          position: "absolute",
          top: 738,
          left: 240,
          width: 700,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [186, 198], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 787,
          left: 556,
          width: 343,
          height: 27,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 1 text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 27,
            overflow: "hidden",
            translate: interpolate(frame, [168, 190], ["0px 27px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [168, 182], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -787,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 826,
          left: 556,
          width: 343,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 1 text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 24,
            overflow: "hidden",
            translate: interpolate(frame, [173, 195], ["0px 24px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [173, 187], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -826,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 865,
          left: 556,
          width: 343,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 1 text 3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 24,
            overflow: "hidden",
            translate: interpolate(frame, [178, 200], ["0px 24px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [178, 192], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -865,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 932,
          left: 556,
          width: 343,
          height: 36,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 1 text 4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 36,
            overflow: "hidden",
            translate: interpolate(frame, [183, 205], ["0px 36px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [183, 197], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -932,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 986,
          left: 556,
          width: 343,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 1 text 5"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [188, 210], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [188, 202], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -986,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1016,
          left: 556,
          width: 343,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 1 text 6"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [193, 215], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [193, 207], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1016,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1046,
          left: 556,
          width: 343,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 1 text 7"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [198, 220], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [198, 212], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1046,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      {/* Card 2 */}
      <div
        style={{
          position: "absolute",
          top: 739,
          left: 981,
          width: 276,
          height: 388,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 2 cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 276,
            height: 388,
            overflow: "hidden",
            scale: interpolate(frame, [166, 210], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [166, 184], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -739,
              left: -981,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <Interactive.Div
        name="Card 2 outline left"
        style={{
          position: "absolute",
          top: 738,
          left: 980,
          width: 1,
          height: 390,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [174, 181], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0)`,
        }}
      />
      <Interactive.Div
        name="Card 2 outline bottom"
        style={{
          position: "absolute",
          top: 1127,
          left: 980,
          width: 700,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [181, 193], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0 0)`,
        }}
      />
      <Interactive.Div
        name="Card 2 outline right"
        style={{
          position: "absolute",
          top: 738,
          left: 1679,
          width: 1,
          height: 390,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [193, 200], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0 0 0)`,
        }}
      />
      <Interactive.Div
        name="Card 2 outline top"
        style={{
          position: "absolute",
          top: 738,
          left: 980,
          width: 700,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [200, 212], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 787,
          left: 1296,
          width: 343,
          height: 27,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 2 text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 27,
            overflow: "hidden",
            translate: interpolate(frame, [182, 204], ["0px 27px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [182, 196], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -787,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 826,
          left: 1296,
          width: 343,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 2 text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 24,
            overflow: "hidden",
            translate: interpolate(frame, [187, 209], ["0px 24px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [187, 201], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -826,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 865,
          left: 1296,
          width: 343,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 2 text 3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 24,
            overflow: "hidden",
            translate: interpolate(frame, [192, 214], ["0px 24px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [192, 206], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -865,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 951,
          left: 1296,
          width: 343,
          height: 36,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 2 text 4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 36,
            overflow: "hidden",
            translate: interpolate(frame, [197, 219], ["0px 36px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [197, 211], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -951,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1005,
          left: 1296,
          width: 343,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 2 text 5"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [202, 224], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [202, 216], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1005,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1035,
          left: 1296,
          width: 343,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 2 text 6"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [207, 229], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [207, 221], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1035,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1065,
          left: 1296,
          width: 343,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 2 text 7"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [212, 234], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [212, 226], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1065,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      {/* Card 3 */}
      <div
        style={{
          position: "absolute",
          top: 1169,
          left: 241,
          width: 276,
          height: 388,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 3 cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 276,
            height: 388,
            overflow: "hidden",
            scale: interpolate(frame, [248, 292], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [248, 266], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1169,
              left: -241,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <Interactive.Div
        name="Card 3 outline left"
        style={{
          position: "absolute",
          top: 1168,
          left: 240,
          width: 1,
          height: 390,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [254, 261], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0)`,
        }}
      />
      <Interactive.Div
        name="Card 3 outline bottom"
        style={{
          position: "absolute",
          top: 1557,
          left: 240,
          width: 700,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [261, 273], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0 0)`,
        }}
      />
      <Interactive.Div
        name="Card 3 outline right"
        style={{
          position: "absolute",
          top: 1168,
          left: 939,
          width: 1,
          height: 390,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [273, 280], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0 0 0)`,
        }}
      />
      <Interactive.Div
        name="Card 3 outline top"
        style={{
          position: "absolute",
          top: 1168,
          left: 240,
          width: 700,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [280, 292], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 1217,
          left: 556,
          width: 343,
          height: 27,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 3 text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 27,
            overflow: "hidden",
            translate: interpolate(frame, [262, 284], ["0px 27px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [262, 276], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1217,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1256,
          left: 556,
          width: 343,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 3 text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 24,
            overflow: "hidden",
            translate: interpolate(frame, [267, 289], ["0px 24px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [267, 281], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1256,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1381,
          left: 556,
          width: 343,
          height: 36,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 3 text 3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 36,
            overflow: "hidden",
            translate: interpolate(frame, [272, 294], ["0px 36px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [272, 286], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1381,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1434,
          left: 556,
          width: 343,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 3 text 4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [277, 299], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [277, 291], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1434,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1465,
          left: 556,
          width: 343,
          height: 21,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 3 text 5"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 21,
            overflow: "hidden",
            translate: interpolate(frame, [282, 304], ["0px 21px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [282, 296], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1465,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1495,
          left: 556,
          width: 343,
          height: 21,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 3 text 6"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 21,
            overflow: "hidden",
            translate: interpolate(frame, [287, 309], ["0px 21px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [287, 301], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1495,
              left: -556,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      {/* Card 4 */}
      <div
        style={{
          position: "absolute",
          top: 1169,
          left: 981,
          width: 276,
          height: 388,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 4 cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 276,
            height: 388,
            overflow: "hidden",
            scale: interpolate(frame, [262, 306], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [262, 280], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1169,
              left: -981,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <Interactive.Div
        name="Card 4 outline left"
        style={{
          position: "absolute",
          top: 1168,
          left: 980,
          width: 1,
          height: 390,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [268, 275], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0)`,
        }}
      />
      <Interactive.Div
        name="Card 4 outline bottom"
        style={{
          position: "absolute",
          top: 1557,
          left: 980,
          width: 700,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [275, 287], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0 0)`,
        }}
      />
      <Interactive.Div
        name="Card 4 outline right"
        style={{
          position: "absolute",
          top: 1168,
          left: 1679,
          width: 1,
          height: 390,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [287, 294], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}% 0 0 0)`,
        }}
      />
      <Interactive.Div
        name="Card 4 outline top"
        style={{
          position: "absolute",
          top: 1168,
          left: 980,
          width: 700,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [294, 306], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 1217,
          left: 1296,
          width: 343,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 4 text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 24,
            overflow: "hidden",
            translate: interpolate(frame, [276, 298], ["0px 24px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [276, 290], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1217,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1256,
          left: 1296,
          width: 343,
          height: 23,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 4 text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 23,
            overflow: "hidden",
            translate: interpolate(frame, [281, 303], ["0px 23px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [281, 295], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1256,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1432,
          left: 1296,
          width: 343,
          height: 22,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 4 text 3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 22,
            overflow: "hidden",
            translate: interpolate(frame, [286, 308], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [286, 300], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1432,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1463,
          left: 1296,
          width: 343,
          height: 21,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 4 text 4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 21,
            overflow: "hidden",
            translate: interpolate(frame, [291, 313], ["0px 21px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [291, 305], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1463,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1493,
          left: 1296,
          width: 343,
          height: 21,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 4 text 5"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 343,
            height: 21,
            overflow: "hidden",
            translate: interpolate(frame, [296, 318], ["0px 21px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [296, 310], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1493,
              left: -1296,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 1595,
          left: 240,
          width: 1440,
          height: 30,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="AI pagination"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1440,
            height: 30,
            overflow: "hidden",
            translate: interpolate(frame, [290, 316], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [290, 304], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
          }}
        >
          <Img
            name="Page"
            src={staticFile("arte-search/page-loaded.png")}
            style={{
              position: "absolute",
              top: -1595,
              left: -240,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
    </>
  );
};
