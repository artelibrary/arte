import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { RiseWindow, ScaleWindow, CascadeWindow, DrawnBorder } from "./PageWindow";

const BASE_DELAY = 26;

// 공지·소식 rows all start gathered on the first row's slot, then riffle
// open downward into their resting positions.
const NOTICE_ROWS = [4226, 4299, 4372, 4444, 4517, 4590];

export const EventNoticeSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      {/* 이벤트·행사 */}
      <RiseWindow name="이벤트·행사 title" top={4104} left={160} width={700} height={62} from={BASE_DELAY} />
      <Interactive.Div
        name="이벤트·행사 title underline"
        style={{
          position: "absolute",
          top: 4182,
          left: 160,
          height: 4,
          backgroundColor: "#000000",
          width: interpolate(frame, [BASE_DELAY + 16, BASE_DELAY + 40], [0, 700], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <ScaleWindow name="Event visual" top={4226} left={160} width={700} height={240} from={BASE_DELAY + 10} />
      <RiseWindow name="Event badges" top={4490} left={200} width={142} height={32} from={BASE_DELAY + 24} />
      <RiseWindow name="Event title" top={4532} left={200} width={636} height={39} from={BASE_DELAY + 32} />
      <RiseWindow name="Event date" top={4581} left={200} width={189} height={24} from={BASE_DELAY + 40} />
      <DrawnBorder top={4226} left={160} width={700} height={403} from={BASE_DELAY + 10} segmentDuration={10} />

      {/* 공지·소식 */}
      <RiseWindow name="공지·소식 title" top={4104} left={900} width={860} height={62} from={BASE_DELAY + 8} />
      <Interactive.Div
        name="공지·소식 title underline"
        style={{
          position: "absolute",
          top: 4182,
          left: 900,
          height: 4,
          backgroundColor: "#000000",
          width: interpolate(frame, [BASE_DELAY + 24, BASE_DELAY + 48], [0, 860], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      {NOTICE_ROWS.map((top, i) => (
        <CascadeWindow
          key={top}
          name={`공지·소식 row ${i + 1}`}
          top={top}
          left={900}
          width={860}
          height={39}
          startOffset={top - NOTICE_ROWS[0]}
          from={BASE_DELAY + 18 + i * 3}
        />
      ))}
    </>
  );
};
