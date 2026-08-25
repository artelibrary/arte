import { DrawnBorder, RiseWindow, Rule, ScaleWindow } from "./PageWindow";

// The rail's group dividers, sampled off the render. Only the section rule
// under 검색 is black.
const DIVIDER = "#858585";

// The 312px filter rail down the left of the list.
//
// Every reveal here is either text or a line, never both: the 검색 field and
// the two date inputs have their placeholder cropped clear of the box, and
// the box is drawn round it. The group separators are drawn the same way, and
// no window covers their rows, so a rule only ever appears by being drawn.
//
// 검색 (649) and 지역 + the map (808) are above the fold and play during the
// intro. Everything from the caption down waits for the glide that starts at
// frame 172 and animates a few frames after the page has carried it past the
// fold, so the motion is still visibly running when it lands.
//
// Rail landmarks: 검색 649 with its field box 689-738 (x160-471), section rule
// 780, 지역 808, map 832-1276, caption lines 1309 and 1331, rules
// 1380/1475/1570/1726, 장르 1422, 교육대상 1517, 운영기간 1612 with its two
// date boxes at x160-304 and x327-471 on y1651-1702.
export const Sidebar: React.FC = () => {
  return (
    <>
      <RiseWindow name="검색 label" top={649} left={160} width={60} height={24} from={60} duration={28} />
      <RiseWindow name="검색 placeholder" top={697} left={168} width={296} height={36} from={67} duration={26} />
      <DrawnBorder top={689} left={160} width={311} height={49} from={75} segmentDuration={7} />
      <Rule name="Rail section rule" top={780} left={160} width={312} height={4} from={74} />

      <RiseWindow name="지역 label" top={808} left={160} width={60} height={24} from={109} duration={28} />
      <ScaleWindow name="Region map" top={832} left={160} width={312} height={444} from={116} />

      <RiseWindow name="Rail caption line 1" top={1305} left={160} width={312} height={21} from={186} duration={26} />
      <RiseWindow name="Rail caption line 2" top={1327} left={160} width={312} height={22} from={193} duration={26} />
      <Rule name="Rail rule 2" top={1380} left={160} width={312} height={2} color={DIVIDER} from={200} />

      <RiseWindow name="장르 row" top={1422} left={160} width={332} height={52} from={206} />
      <Rule name="Rail rule 3" top={1475} left={160} width={312} height={2} color={DIVIDER} from={213} />

      <RiseWindow name="교육대상 row" top={1517} left={160} width={332} height={52} from={219} />
      <Rule name="Rail rule 4" top={1570} left={160} width={312} height={2} color={DIVIDER} from={226} />

      <RiseWindow name="운영기간 label" top={1612} left={160} width={60} height={24} from={232} duration={28} />
      <RiseWindow name="시작일 placeholder" top={1661} left={170} width={126} height={32} from={239} duration={26} />
      <RiseWindow name="종료일 placeholder" top={1661} left={337} width={126} height={32} from={239} duration={26} />
      <RiseWindow name="Date range dash" top={1672} left={310} width={12} height={10} from={243} duration={20} />
      <DrawnBorder top={1651} left={160} width={144} height={51} from={247} segmentDuration={7} />
      <DrawnBorder top={1651} left={327} width={144} height={51} from={247} segmentDuration={7} />
      <Rule name="Rail rule 5" top={1726} left={160} width={312} height={2} color={DIVIDER} from={254} />
    </>
  );
};
