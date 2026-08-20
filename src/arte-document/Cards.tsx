import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// The two result cards. The sequence starts at frame 118, so a local frame
// number plus 118 gives the composition frame.
//
// The cover art is the only part of a card that is above the fold at scroll 0,
// so it settles from 120% to 100% during the intro, finishing just as the
// scroll starts at frame 172.
//
// The copy then cascades as the page glides down. Card 1 line 1 opens at local
// 56 (frame 174) so that it is already three-quarters revealed by frame 180 -
// starting it exactly on 180 would mean the card still reads as empty there.
// Lines are 7 frames apart, card 2 trails card 1 by 20 frames:
//   f180  card 1 line 1
//   f192  card 1 lines 1-2
//   f200  card 1 lines 1-4, card 2 line 1
//   f208  card 1 lines 1-5, card 2 lines 1-2
//   f247  card 1 complete      f267  card 2 complete
//
// The outline starts on local 62 (frame 180) and is four separate 1px rules
// drawn back to back from the top-left corner, running anti-clockwise: down
// the left edge, across the bottom, up the right edge, then back along the
// top. Each segment uses linear easing so the pen keeps a constant speed the
// whole way around. It cannot start earlier than this: the card's bottom edge
// only clears the fold around frame 190, and this ordering keeps the bottom
// segment on screen for its whole draw.
//
// The copy is sliced one visual line per tile - the line bands were read off
// the artwork rather than guessed - and each line rises out of its own mask.
export const Cards: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Card 1 image crop"
        style={{
          position: "absolute",
          top: 812,
          left: 561,
          width: 586,
          height: 259,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 cover"
          src={staticFile("arte-document/card1-image.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            opacity: interpolate(frame, [0, 16], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
            scale: interpolate(frame, [0, 40], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 2 image crop"
        style={{
          position: "absolute",
          top: 812,
          left: 1173,
          width: 586,
          height: 259,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 cover"
          src={staticFile("arte-document/card2-image.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            opacity: interpolate(frame, [10, 26], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
            scale: interpolate(frame, [10, 50], [1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 1 outline left"
        style={{
          position: "absolute",
          top: 811,
          left: 560,
          width: 1,
          height: 630,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [62, 76], [100, 0], {
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
          top: 1440,
          left: 560,
          width: 588,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [76, 90], [100, 0], {
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
          top: 811,
          left: 1147,
          width: 1,
          height: 630,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [90, 104], [100, 0], {
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
          top: 811,
          left: 560,
          width: 588,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [104, 118], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}%)`,
        }}
      />

      <Interactive.Div
        name="Card 2 outline left"
        style={{
          position: "absolute",
          top: 811,
          left: 1172,
          width: 1,
          height: 630,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [82, 96], [100, 0], {
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
          top: 1440,
          left: 1172,
          width: 588,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [96, 110], [100, 0], {
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
          top: 811,
          left: 1759,
          width: 1,
          height: 630,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [110, 124], [100, 0], {
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
          top: 811,
          left: 1172,
          width: 588,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [124, 138], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          })}%)`,
        }}
      />

      <Interactive.Div
        name="Card 1 line 1 mask"
        style={{
          position: "absolute",
          top: 1104,
          left: 561,
          width: 586,
          height: 23,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 category"
          src={staticFile("arte-document/card1-line1.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [56, 80], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 1 line 2 mask"
        style={{
          position: "absolute",
          top: 1131,
          left: 561,
          width: 586,
          height: 38,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 title"
          src={staticFile("arte-document/card1-line2.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [63, 87], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 1 line 3 mask"
        style={{
          position: "absolute",
          top: 1199,
          left: 561,
          width: 586,
          height: 29,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 summary line 1"
          src={staticFile("arte-document/card1-line3.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [70, 94], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 1 line 4 mask"
        style={{
          position: "absolute",
          top: 1229,
          left: 561,
          width: 586,
          height: 29,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 summary line 2"
          src={staticFile("arte-document/card1-line4.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [77, 101], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 1 line 5 mask"
        style={{
          position: "absolute",
          top: 1294,
          left: 561,
          width: 586,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 material type"
          src={staticFile("arte-document/card1-line5.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [84, 108], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 1 line 6 mask"
        style={{
          position: "absolute",
          top: 1324,
          left: 561,
          width: 586,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 genre"
          src={staticFile("arte-document/card1-line6.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [91, 115], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 1 line 7 mask"
        style={{
          position: "absolute",
          top: 1354,
          left: 561,
          width: 586,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 publication year"
          src={staticFile("arte-document/card1-line7.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [98, 122], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 1 line 8 mask"
        style={{
          position: "absolute",
          top: 1384,
          left: 561,
          width: 586,
          height: 26,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 publisher"
          src={staticFile("arte-document/card1-line8.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [105, 129], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 2 line 1 mask"
        style={{
          position: "absolute",
          top: 1104,
          left: 1173,
          width: 586,
          height: 23,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 category"
          src={staticFile("arte-document/card2-line1.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [76, 100], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 2 line 2 mask"
        style={{
          position: "absolute",
          top: 1131,
          left: 1173,
          width: 586,
          height: 38,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 title"
          src={staticFile("arte-document/card2-line2.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [83, 107], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 2 line 3 mask"
        style={{
          position: "absolute",
          top: 1199,
          left: 1173,
          width: 586,
          height: 29,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 summary line 1"
          src={staticFile("arte-document/card2-line3.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [90, 114], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 2 line 4 mask"
        style={{
          position: "absolute",
          top: 1229,
          left: 1173,
          width: 586,
          height: 29,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 summary line 2"
          src={staticFile("arte-document/card2-line4.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [97, 121], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 2 line 5 mask"
        style={{
          position: "absolute",
          top: 1294,
          left: 1173,
          width: 586,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 material type"
          src={staticFile("arte-document/card2-line5.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [104, 128], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 2 line 6 mask"
        style={{
          position: "absolute",
          top: 1324,
          left: 1173,
          width: 586,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 genre"
          src={staticFile("arte-document/card2-line6.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [111, 135], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 2 line 7 mask"
        style={{
          position: "absolute",
          top: 1354,
          left: 1173,
          width: 586,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 publication year"
          src={staticFile("arte-document/card2-line7.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [118, 142], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Card 2 line 8 mask"
        style={{
          position: "absolute",
          top: 1384,
          left: 1173,
          width: 586,
          height: 26,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 publisher"
          src={staticFile("arte-document/card2-line8.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 586,
            translate: interpolate(frame, [125, 149], ["0px 100%", "0px 0%"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </Interactive.Div>
    </>
  );
};
