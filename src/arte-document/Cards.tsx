import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// The two result cards, now 572px wide at x592 and x1188.
//
// The cover art is the only part above the fold at scroll 0, so it settles
// from 120% to 100% during the intro. The copy and the outline are below the
// fold and run as the single scroll carries them up: copy from frame 174 at
// 7 frames a line, card 2 trailing card 1 by 20.
//
// The outline starts at 180 - late enough that the card's bottom edge has
// cleared the fold before the second segment is drawn along it. It is four
// 1px rules drawn back to back from the top-left corner, running
// anti-clockwise - down the left edge, across the bottom, up the right edge,
// then back along the top - each on linear easing so the pen keeps a
// constant speed the whole way around.
export const Cards: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Card 1 image crop"
        style={{
          position: "absolute",
          top: 858,
          left: 593,
          width: 570,
          height: 259,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 cover"
          src={staticFile("arte-document/c1-img.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            opacity: interpolate(frame, [118, 134], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
            scale: interpolate(frame, [118, 158], [1.2, 1], {
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
          top: 858,
          left: 1189,
          width: 570,
          height: 259,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 cover"
          src={staticFile("arte-document/c2-img.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            opacity: interpolate(frame, [128, 144], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }),
            scale: interpolate(frame, [128, 168], [1.2, 1], {
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
          top: 857,
          left: 592,
          width: 1,
          height: 630,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [180, 194], [100, 0], {
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
          top: 1486,
          left: 592,
          width: 572,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [194, 208], [100, 0], {
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
          top: 857,
          left: 1163,
          width: 1,
          height: 630,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [208, 222], [100, 0], {
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
          top: 857,
          left: 592,
          width: 572,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [222, 236], [100, 0], {
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
          top: 857,
          left: 1188,
          width: 1,
          height: 630,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 ${interpolate(frame, [200, 214], [100, 0], {
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
          top: 1486,
          left: 1188,
          width: 572,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 ${interpolate(frame, [214, 228], [100, 0], {
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
          top: 857,
          left: 1759,
          width: 1,
          height: 630,
          backgroundColor: "#000000",
          clipPath: `inset(${interpolate(frame, [228, 242], [100, 0], {
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
          top: 857,
          left: 1188,
          width: 572,
          height: 1,
          backgroundColor: "#000000",
          clipPath: `inset(0 0 0 ${interpolate(frame, [242, 256], [100, 0], {
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
          top: 1150,
          left: 593,
          width: 570,
          height: 23,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 category"
          src={staticFile("arte-document/c1-l1.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [174, 198], ["0px 100%", "0px 0%"], {
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
          top: 1177,
          left: 593,
          width: 570,
          height: 38,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 title"
          src={staticFile("arte-document/c1-l2.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [181, 205], ["0px 100%", "0px 0%"], {
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
          top: 1245,
          left: 593,
          width: 570,
          height: 29,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 summary line 1"
          src={staticFile("arte-document/c1-l3.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [188, 212], ["0px 100%", "0px 0%"], {
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
          top: 1275,
          left: 593,
          width: 570,
          height: 29,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 summary line 2"
          src={staticFile("arte-document/c1-l4.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [195, 219], ["0px 100%", "0px 0%"], {
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
          top: 1340,
          left: 593,
          width: 570,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 material type"
          src={staticFile("arte-document/c1-l5.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [202, 226], ["0px 100%", "0px 0%"], {
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
          top: 1370,
          left: 593,
          width: 570,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 genre"
          src={staticFile("arte-document/c1-l6.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [209, 233], ["0px 100%", "0px 0%"], {
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
          top: 1400,
          left: 593,
          width: 570,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 publication year"
          src={staticFile("arte-document/c1-l7.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [216, 240], ["0px 100%", "0px 0%"], {
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
          top: 1430,
          left: 593,
          width: 570,
          height: 26,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 1 publisher"
          src={staticFile("arte-document/c1-l8.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [223, 247], ["0px 100%", "0px 0%"], {
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
          top: 1150,
          left: 1189,
          width: 570,
          height: 23,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 category"
          src={staticFile("arte-document/c2-l1.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [194, 218], ["0px 100%", "0px 0%"], {
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
          top: 1177,
          left: 1189,
          width: 570,
          height: 38,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 title"
          src={staticFile("arte-document/c2-l2.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [201, 225], ["0px 100%", "0px 0%"], {
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
          top: 1245,
          left: 1189,
          width: 570,
          height: 29,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 summary line 1"
          src={staticFile("arte-document/c2-l3.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [208, 232], ["0px 100%", "0px 0%"], {
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
          top: 1275,
          left: 1189,
          width: 570,
          height: 29,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 summary line 2"
          src={staticFile("arte-document/c2-l4.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [215, 239], ["0px 100%", "0px 0%"], {
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
          top: 1340,
          left: 1189,
          width: 570,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 material type"
          src={staticFile("arte-document/c2-l5.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [222, 246], ["0px 100%", "0px 0%"], {
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
          top: 1370,
          left: 1189,
          width: 570,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 genre"
          src={staticFile("arte-document/c2-l6.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [229, 253], ["0px 100%", "0px 0%"], {
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
          top: 1400,
          left: 1189,
          width: 570,
          height: 24,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 publication year"
          src={staticFile("arte-document/c2-l7.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [236, 260], ["0px 100%", "0px 0%"], {
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
          top: 1430,
          left: 1189,
          width: 570,
          height: 26,
          overflow: "hidden",
        }}
      >
        <Img
          name="Card 2 publisher"
          src={staticFile("arte-document/c2-l8.png")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 570,
            translate: interpolate(frame, [243, 267], ["0px 100%", "0px 0%"], {
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
