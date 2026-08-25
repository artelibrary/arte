import {
  AbsoluteFill,
  Composition,
  Easing,
  Interactive,
  interpolate,
  Sequence,
  useCurrentFrame,
} from "remotion";
import { Header } from "./arte-document/Header";
import { TitleBlock } from "./arte-document/TitleBlock";
import { SectionIntro } from "./arte-document/SectionIntro";
import { Filter } from "./arte-document/Filter";
import { ListHeader } from "./arte-document/ListHeader";
import { Cards } from "./arte-document/Cards";
import { Pagination } from "./arte-document/Pagination";

export const ArteDocumentComposition = () => {
  return (
    <Composition
      id="arte-document"
      component={ArteDocument}
      durationInFrames={380}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

// The revised Figma frame is 1920x1844. The header is 133px and pinned, so
// the body scrolls inside a 947px viewport underneath it - 764px of travel.
//
// Every section mounts from frame 0 and animates on absolute frame numbers,
// so a number in a component is the composition frame with no offset to
// carry in your head.
export const ArteDocument: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Scene"
      style={{ backgroundColor: "#ffffff", overflow: "hidden" }}
    >
      <Interactive.Div
        name="Viewport"
        style={{
          position: "absolute",
          top: 133,
          left: 0,
          width: 1920,
          height: 947,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Page scroll"
          style={{
            position: "absolute",
            top: -133,
            left: 0,
            width: 1920,
            height: 1844,
            // One continuous glide down the page, keeping the ease-out the
            // earlier flicks used. It waits for the intro - including the
            // card covers, the only part of the list above the fold - then
            // runs the full 764px in a single move:
            //   0    intro, page top          y=0
            //   172  scroll starts
            //   280  page bottom              y=764
            // The span is chosen so the page clears each element before that
            // element's own animation begins - most importantly the card
            // bottom edge, which the outline draws along at frames 194-208.
            translate: interpolate(
              frame,
              [0, 172, 280, 380],
              ["0px 0px", "0px 0px", "0px -764px", "0px -764px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              },
            ),
          }}
        >
          <Sequence name="Title block">
            <TitleBlock />
          </Sequence>
          <Sequence name="Section intro">
            <SectionIntro />
          </Sequence>
          <Sequence name="Filter rail">
            <Filter />
          </Sequence>
          <Sequence name="List header">
            <ListHeader />
          </Sequence>
          <Sequence name="Result cards">
            <Cards />
          </Sequence>
          <Sequence name="Pagination">
            <Pagination />
          </Sequence>
        </Interactive.Div>
      </Interactive.Div>

      <Sequence name="Header">
        <Header />
      </Sequence>
    </AbsoluteFill>
  );
};
