import { RiseWindow } from "./PageWindow";

// The row above the results - the 전체 / 페이지 counts and the sort controls -
// then the three cumulative-total tiles, then the registration note. Each
// takes its own turn.
//
// A tile is a whole slice carrying its own share of the box's border, so the
// border arrives with it rather than being drawn over the one in the render.
// Seven frames apart, the box reads as assembling left to right.
//
// Landmarks: count row 649, tile box 712-832 divided at x981 and x1370,
// note row 912.
export const ListHeader: React.FC = () => {
  return (
    <>
      <RiseWindow name="Count and sort row" top={649} left={592} width={1168} height={39} from={81} />

      <RiseWindow name="프로그램 누적" top={712} left={592} width={389} height={120} from={88} />
      <RiseWindow name="운영단체 누적" top={712} left={981} width={389} height={120} from={95} />
      <RiseWindow name="지역별 자료 누적" top={712} left={1370} width={390} height={120} from={102} />

      <RiseWindow name="Registration note" top={912} left={592} width={1168} height={24} from={124} duration={28} />
    </>
  );
};
