import {
  AbsoluteFill,
  Composition,
  Easing,
  Interactive,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
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
      durationInFrames={450}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

// The Figma frame is 1920x1697. The header (143px) is pinned, so the body
// scrolls inside a 937px viewport underneath it - 617px of travel in total.
export const ArteDocument: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Scene"
      style={{ backgroundColor: "#ffffff", overflow: "hidden" }}
    >
      <Interactive.Div
        name="Viewport"
        style={{
          position: "absolute",
          top: 143,
          left: 0,
          width: 1920,
          height: 937,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Page scroll"
          style={{
            position: "absolute",
            top: -143,
            left: 0,
            width: 1920,
            height: 1697,
            // One continuous glide down the page instead of two wheel
            // flicks, keeping the same ease-out the flicks used. It starts
            // where the first flick did, once the card covers have settled,
            // and covers the full 617px in one move:
            //   0    intro, page top          y=0
            //   172  scroll starts
            //   280  page bottom              y=617
            // The span is chosen so the page still clears each element before
            // that element's own animation begins - most importantly the card
            // bottom edge, which the outline draws along at frames 194-208.
            translate: interpolate(
              frame,
              [0, 172, 280, 450],
              ["0px 0px", "0px 0px", "0px -617px", "0px -617px"],
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
          <Sequence name="Section intro" from={40}>
            <SectionIntro />
          </Sequence>
          <Sequence name="Filter rail" from={58} premountFor={fps}>
            <Filter />
          </Sequence>
          <Sequence name="List header" from={62} premountFor={fps}>
            <ListHeader />
          </Sequence>
          <Sequence name="Result cards" from={118} premountFor={fps}>
            <Cards />
          </Sequence>
          <Sequence name="Pagination" from={205} premountFor={fps}>
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
