import { LiftWindow, RiseWindow, Rule, ScaleWindow } from "./PageWindow";

// The rail's group dividers, sampled off the render. Only the section rule
// under 검색 is black.
const DIVIDER = "#858585";

// The 312px filter rail down the left of the list. Its groups are separated
// by rules rather than a panel, and each is drawn left to right by
// retracting its right-hand inset - the arte-document filter treatment. No
// window covers a rule's rows, so a rule only ever appears by being drawn.
//
// 검색 (649) and 지역 + the map (808) are above the fold and play during the
// intro. Everything from the map caption down waits for the glide that
// starts at frame 172 and animates a few frames after the page has carried
// it past the fold, so the motion is still visibly running when it lands.
//
// Rail landmarks: 검색 649, field 689, section rule 780, 지역 808, map
// 832-1276, caption 1307, rule 1380, 장르 1422, rule 1475, 교육대상 1517,
// rule 1570, 운영기간 1612 with its date fields at 1650, closing rule 1726.
export const Sidebar: React.FC = () => {
  return (
    <>
      <RiseWindow name="검색 label" top={649} left={160} width={60} height={24} from={62} duration={28} />
      <RiseWindow name="검색 field" top={689} left={160} width={312} height={51} from={70} />
      <Rule name="Rail section rule" top={780} left={160} width={312} height={4} from={78} />

      <RiseWindow name="지역 label" top={808} left={160} width={60} height={24} from={90} duration={28} />
      <ScaleWindow name="Region map" top={832} left={160} width={312} height={444} from={96} />

      {/* 444px of map has just gone by, so the caption lifts a short fixed
          distance rather than wiping its whole band. */}
      <LiftWindow name="Rail caption" top={1307} left={160} width={312} height={42} from={182} offset={40} />
      <Rule name="Rail rule 2" top={1380} left={160} width={312} height={2} color={DIVIDER} from={186} />

      <RiseWindow name="장르 row" top={1422} left={160} width={332} height={52} from={190} />
      <Rule name="Rail rule 3" top={1475} left={160} width={312} height={2} color={DIVIDER} from={194} />

      <RiseWindow name="교육대상 row" top={1517} left={160} width={332} height={52} from={197} />
      <Rule name="Rail rule 4" top={1570} left={160} width={312} height={2} color={DIVIDER} from={201} />

      <RiseWindow name="운영기간 label" top={1612} left={160} width={60} height={24} from={203} duration={28} />
      <RiseWindow name="운영기간 fields" top={1650} left={160} width={332} height={55} from={207} />
      <Rule name="Rail rule 5" top={1726} left={160} width={312} height={2} color={DIVIDER} from={212} />
    </>
  );
};
