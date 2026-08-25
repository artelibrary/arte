import { RiseWindow, Rule } from "./PageWindow";

// The row above the results - the 전체 / 페이지 counts and the sort controls -
// then the three cumulative-total tiles, then the registration note.
//
// 프로그램 누적 is a solid pink plate with no outline of its own, so it rises
// whole. The other two tiles are white boxes: their figures rise cropped to
// the text, and the box the three share is drawn round them afterwards - a
// rule along the top and the bottom, the divider between tiles 2 and 3, and
// the right-hand edge. The pink plate's own edge is what separates it from
// tile 2, so nothing is drawn there.
//
// Landmarks: count row 649, tile box 712-831 running x592-1759, pink plate
// x592-980, divider x1369, figures at x1102 and x1480 on y728, note row 912.
export const ListHeader: React.FC = () => {
  return (
    <>
      <RiseWindow name="Count and sort row" top={649} left={592} width={1168} height={39} from={81} />

      <RiseWindow name="프로그램 누적" top={712} left={592} width={389} height={120} from={88} />
      <RiseWindow name="운영단체 누적" top={728} left={1102} width={148} height={88} from={95} duration={26} />
      <RiseWindow name="지역별 자료 누적" top={728} left={1480} width={171} height={88} from={102} duration={26} />

      <Rule name="Tile box top" top={712} left={981} width={779} height={1} from={104} />
      <Rule name="Tile box bottom" top={831} left={981} width={779} height={1} from={104} />
      <Rule name="Tile divider" top={712} left={1369} width={2} height={120} from={110} vertical />
      <Rule name="Tile box right" top={712} left={1759} width={1} height={120} from={110} vertical />

      <RiseWindow name="Registration note" top={912} left={592} width={1168} height={24} from={124} duration={28} />
    </>
  );
};
