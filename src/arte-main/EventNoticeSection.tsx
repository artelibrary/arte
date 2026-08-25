import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { RiseWindow, ScaleWindow } from "./PageWindow";

const BASE_DELAY = 26;

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
      <RiseWindow name="Event text" top={4466} left={160} width={700} height={163} from={BASE_DELAY + 24} />

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
      <RiseWindow name="공지·소식 list" top={4226} left={900} width={860} height={403} from={BASE_DELAY + 18} />
    </>
  );
};
