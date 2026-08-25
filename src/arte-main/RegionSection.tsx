import { Fragment } from "react";
import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { RiseWindow, DrawnBorder } from "./PageWindow";

const BASE_DELAY = 26;

const ROWS = [
  { top: 2338, from: BASE_DELAY },
  { top: 2490, from: BASE_DELAY + 10 },
  { top: 2642, from: BASE_DELAY + 20 },
];

export const RegionSection: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <RiseWindow name="지역별 정보 title" top={2216} left={160} width={1600} height={62} from={BASE_DELAY} />
      <Interactive.Div
        name="지역별 정보 title underline"
        style={{
          position: "absolute",
          top: 2294,
          left: 160,
          height: 4,
          backgroundColor: "#000000",
          width: interpolate(frame, [BASE_DELAY + 16, BASE_DELAY + 40], [0, 1600], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      {ROWS.map((row) => (
        <Fragment key={row.top}>
          <RiseWindow name="Region row" top={row.top} left={160} width={1600} height={152} from={row.from} />
          <DrawnBorder top={row.top} left={160} width={1600} height={152} from={row.from} />
        </Fragment>
      ))}
    </>
  );
};
