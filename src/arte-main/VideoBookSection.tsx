import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { RiseWindow, ScaleWindow } from "./PageWindow";

// 영상 (left column) + 도서 (right column). Offset by 26 so the motion is
// underway once the section is actually on screen, not mid-flick.
const BASE_DELAY = 26;

const underline = (frame: number, from: number, width: number) =>
  interpolate(frame, [from, from + 24], [0, width], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

export const VideoBookSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      {/* 영상 */}
      <RiseWindow name="영상 title" top={1562} left={160} width={780} height={62} from={BASE_DELAY} />
      <Interactive.Div
        name="영상 title underline"
        style={{
          position: "absolute",
          top: 1640,
          left: 160,
          height: 4,
          backgroundColor: "#000000",
          width: underline(frame, BASE_DELAY + 16, 780),
        }}
      />
      <ScaleWindow
        name="영상 thumbnail"
        top={1684}
        left={160}
        width={780}
        height={314}
        from={BASE_DELAY + 10}
      />
      <RiseWindow name="영상 caption title" top={2012} left={160} width={780} height={39} from={BASE_DELAY + 24} />
      <RiseWindow name="영상 caption hashtags" top={2067} left={160} width={780} height={27} from={BASE_DELAY + 32} />

      {/* 도서 */}
      <RiseWindow name="도서 title" top={1562} left={980} width={780} height={62} from={BASE_DELAY} />
      <Interactive.Div
        name="도서 title underline"
        style={{
          position: "absolute",
          top: 1640,
          left: 980,
          height: 4,
          backgroundColor: "#000000",
          width: underline(frame, BASE_DELAY + 16, 780),
        }}
      />
      <ScaleWindow name="도서 book 1 cover" top={1684} left={980} width={360} height={194} from={BASE_DELAY + 10} />
      <RiseWindow name="도서 book 1 text" top={1684} left={1340} width={420} height={194} from={BASE_DELAY + 24} />
      <ScaleWindow name="도서 book 2 cover" top={1902} left={980} width={360} height={194} from={BASE_DELAY + 18} />
      <RiseWindow name="도서 book 2 text" top={1902} left={1340} width={420} height={194} from={BASE_DELAY + 32} />
    </>
  );
};
