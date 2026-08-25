import {
  AbsoluteFill,
  Composition,
  Easing,
  Interactive,
  interpolate,
  Sequence,
  useCurrentFrame,
} from "remotion";
import { Header } from "./arte-location/Header";
import { TitleBlock } from "./arte-location/TitleBlock";
import { SectionIntro } from "./arte-location/SectionIntro";
import { Sidebar } from "./arte-location/Sidebar";
import { ListHeader } from "./arte-location/ListHeader";
import { Cards } from "./arte-location/Cards";
import { Pagination } from "./arte-location/Pagination";

export const ArteLocationComposition = () => {
  return (
    <Composition
      id="arte-location"
      component={ArteLocation}
      durationInFrames={380}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

// The 지역별 정보 screen is 1920x1808. The header is 133px and pinned, so the
// body scrolls inside a 947px viewport underneath it - 728px of travel.
//
// Built the same way as arte-document: every section mounts from frame 0 and
// animates on absolute frame numbers, so a number in a component is the
// composition frame with no offset to carry in your head. The whole screen is
// one render (page.png) and each element is a window onto it, so anything no
// window covers stays white - which is what lets the rail rules be drawn
// rather than arrive baked in.
//
// Two rules keep the reveal legible. Text takes one line at a time, roughly
// seven frames apart, so no two lines are ever coming up at once. The card
// grid is the exception: a row of three lands as a single beat, and the rows
// run top down. And nothing draws a line over a line the render already has -
// a card carries its own outline inside its window, and the rail's rules are
// drawn only because no window covers their rows.
export const ArteLocation: React.FC = () => {
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
            height: 1808,
            // One continuous glide down the page - not wheel flicks. It waits
            // for the intro, which runs 6-162 and covers everything above the
            // fold down to the first card row, then runs the full 728px in a
            // single move:
            //   0    intro, page top          y=0
            //   172  scroll starts
            //   280  page bottom              y=728
            // The ease-out front-loads the travel, so every element below the
            // fold has arrived by frame 202 and can start its own animation
            // while the page is still settling under it.
            translate: interpolate(
              frame,
              [0, 172, 280, 380],
              ["0px 0px", "0px 0px", "0px -728px", "0px -728px"],
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
            <Sidebar />
          </Sequence>
          <Sequence name="List header">
            <ListHeader />
          </Sequence>
          <Sequence name="Programme cards">
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
