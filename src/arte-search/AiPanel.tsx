import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// The AI answer panel and the whole loading -> answered beat.
//
// The panel is a white box with a 4px black rule around it, so the unfold
// reads on the border rather than on a fill: it opens downwards from y335 to
// the 421px skeleton height, holds while the placeholder sits there, then
// grows on to 811px as the answer lands.
//
// All four result cards and the "20개 자료 모두 보기" bar are above the fold
// at scroll 0, so they belong to this load beat rather than to a scroll stop.
//
// Card outlines are four 1px rules drawn back to back from the top-left
// corner, running anti-clockwise, each timed to its own edge length so the
// pen keeps a constant speed the whole way round.
export const AiPanel: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="AI panel"
        style={{
          position: "absolute",
          top: 335,
          left: 160,
          width: 1600,
          borderLeft: "4px solid #000000",
          borderRight: "4px solid #000000",
          borderTop: "4px solid #000000",
          borderBottom: "4px solid #000000",
          boxSizing: "border-box",
          backgroundColor: "#ffffff",
          height: interpolate(frame, [8, 34, 118, 146], [0, 425, 425, 815], {
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
          top: 399,
          left: 224,
          width: 1472,
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
            width: 1472,
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
              top: -399,
              left: -224,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 471,
          left: 224,
          width: 1472,
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
            width: 1472,
            height: 33,
            overflow: "hidden",
            translate: interpolate(frame, [28, 52], ["0px 35px", "0px 0px"], {
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
              top: -471,
              left: -224,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 544,
          left: 224,
          width: 1472,
          height: 152,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Loading skeleton"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1472,
            height: 152,
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
              top: -544,
              left: -224,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      {/* Answered state - the answer replaces the skeleton. */}
      <div
        style={{
          position: "absolute",
          top: 399,
          left: 224,
          width: 1472,
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
            width: 1472,
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
              top: -399,
              left: -224,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 471,
          left: 224,
          width: 1472,
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
            width: 1472,
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
              top: -471,
              left: -224,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 504,
          left: 224,
          width: 1472,
          height: 33,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="AI answer line 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1472,
            height: 33,
            overflow: "hidden",
            translate: interpolate(frame, [134, 160], ["0px 33px", "0px 0px"], {
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
              top: -504,
              left: -224,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 577,
          left: 224,
          width: 340,
          height: 49,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="AI category tabs"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 340,
            height: 49,
            overflow: "hidden",
            translate: interpolate(frame, [142, 168], ["0px 53px", "0px 0px"], {
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
              top: -577,
              left: -224,
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
          top: 667,
          left: 225,
          width: 108,
          height: 152,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 1 cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 108,
            height: 152,
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
              top: -667,
              left: -225,
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
          top: 666,
          left: 224,
          width: 1,
          height: 154,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [160, 163], [100, 0], {
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
          top: 819,
          left: 224,
          width: 730,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [163, 179], [100, 0], {
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
          top: 666,
          left: 953,
          width: 1,
          height: 154,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [179, 182], [100, 0], {
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
          top: 666,
          left: 224,
          width: 730,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [182, 198], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 687,
          left: 357,
          width: 572,
          height: 33,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 1 text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 572,
            height: 33,
            overflow: "hidden",
            translate: interpolate(frame, [168, 190], ["0px 23px", "0px 0px"], {
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
              top: -687,
              left: -357,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 740,
          left: 357,
          width: 142,
          height: 27,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 1 text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 142,
            height: 27,
            overflow: "hidden",
            translate: interpolate(frame, [173, 195], ["0px 27px", "0px 0px"], {
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
              top: -740,
              left: -357,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 775,
          left: 357,
          width: 572,
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
            width: 572,
            height: 24,
            overflow: "hidden",
            translate: interpolate(frame, [178, 200], ["0px 17px", "0px 0px"], {
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
              top: -775,
              left: -357,
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
          top: 667,
          left: 967,
          width: 108,
          height: 152,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 2 cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 108,
            height: 152,
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
              top: -667,
              left: -967,
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
          top: 666,
          left: 966,
          width: 1,
          height: 154,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [174, 177], [100, 0], {
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
          top: 819,
          left: 966,
          width: 730,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [177, 193], [100, 0], {
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
          top: 666,
          left: 1695,
          width: 1,
          height: 154,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [193, 196], [100, 0], {
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
          top: 666,
          left: 966,
          width: 730,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [196, 212], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 687,
          left: 1099,
          width: 572,
          height: 33,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 2 text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 572,
            height: 33,
            overflow: "hidden",
            translate: interpolate(frame, [182, 204], ["0px 23px", "0px 0px"], {
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
              top: -687,
              left: -1099,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 740,
          left: 1099,
          width: 142,
          height: 27,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 2 text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 142,
            height: 27,
            overflow: "hidden",
            translate: interpolate(frame, [187, 209], ["0px 27px", "0px 0px"], {
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
              top: -740,
              left: -1099,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 775,
          left: 1099,
          width: 572,
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
            width: 572,
            height: 24,
            overflow: "hidden",
            translate: interpolate(frame, [192, 214], ["0px 17px", "0px 0px"], {
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
              top: -775,
              left: -1099,
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
          top: 833,
          left: 225,
          width: 108,
          height: 152,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 3 cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 108,
            height: 152,
            overflow: "hidden",
            scale: interpolate(frame, [180, 224], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [180, 198], [0, 1], {
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
              top: -833,
              left: -225,
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
          top: 832,
          left: 224,
          width: 1,
          height: 154,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [188, 191], [100, 0], {
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
          top: 985,
          left: 224,
          width: 730,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [191, 207], [100, 0], {
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
          top: 832,
          left: 953,
          width: 1,
          height: 154,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [207, 210], [100, 0], {
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
          top: 832,
          left: 224,
          width: 730,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [210, 226], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 853,
          left: 353,
          width: 406,
          height: 33,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 3 text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 406,
            height: 33,
            overflow: "hidden",
            translate: interpolate(frame, [196, 218], ["0px 23px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [196, 210], [0, 1], {
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
              top: -853,
              left: -353,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 906,
          left: 353,
          width: 109,
          height: 27,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 3 text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 109,
            height: 27,
            overflow: "hidden",
            translate: interpolate(frame, [201, 223], ["0px 27px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [201, 215], [0, 1], {
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
              top: -906,
              left: -353,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 941,
          left: 353,
          width: 580,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 3 text 3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 580,
            height: 24,
            overflow: "hidden",
            translate: interpolate(frame, [206, 228], ["0px 17px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [206, 220], [0, 1], {
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
              top: -941,
              left: -353,
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
          top: 833,
          left: 967,
          width: 108,
          height: 152,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 4 cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 108,
            height: 152,
            overflow: "hidden",
            scale: interpolate(frame, [194, 238], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [194, 212], [0, 1], {
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
              top: -833,
              left: -967,
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
          top: 832,
          left: 966,
          width: 1,
          height: 154,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [202, 205], [100, 0], {
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
          top: 985,
          left: 966,
          width: 730,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [205, 221], [100, 0], {
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
          top: 832,
          left: 1695,
          width: 1,
          height: 154,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [221, 224], [100, 0], {
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
          top: 832,
          left: 966,
          width: 730,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [224, 240], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 853,
          left: 1099,
          width: 406,
          height: 33,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 4 text 1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 406,
            height: 33,
            overflow: "hidden",
            translate: interpolate(frame, [210, 232], ["0px 21px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [210, 224], [0, 1], {
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
              top: -853,
              left: -1099,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 917,
          left: 1099,
          width: 479,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 4 text 2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 479,
            height: 24,
            overflow: "hidden",
            translate: interpolate(frame, [215, 237], ["0px 17px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [215, 229], [0, 1], {
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
              top: -917,
              left: -1099,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 941,
          left: 1099,
          width: 479,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Card 4 text 3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 479,
            height: 24,
            overflow: "hidden",
            translate: interpolate(frame, [220, 242], ["0px 17px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [220, 234], [0, 1], {
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
              top: -941,
              left: -1099,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>

      {/* The "20개 자료 모두 보기" bar closes the panel. */}
      <div
        style={{
          position: "absolute",
          top: 1026,
          left: 224,
          width: 1472,
          height: 66,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="AI more results bar"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1472,
            height: 66,
            overflow: "hidden",
            translate: interpolate(frame, [226, 252], ["0px 66px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [226, 240], [0, 1], {
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
              top: -1026,
              left: -224,
              width: 1920,
              maxWidth: "none",
            }}
          />
        </Interactive.Div>
      </div>
    </>
  );
};
