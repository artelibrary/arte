import { RiseWindow, Rule, ScaleWindow } from "./PageWindow";

// The rail's group dividers, sampled off the render. Only the section rule
// under 검색 is black.
const DIVIDER = "#858585";

// The 312px filter rail down the left of the list. Its groups are separated
// by rules rather than a panel, and each is drawn left to right by
// retracting its right-hand inset - the arte-document filter treatment. No
// window covers a rule's rows, so a rule only ever appears by being drawn,
// never on top of one already in the render.
//
// Every text element takes its own turn: the rail's labels, fields and the
// caption's two lines come up one after another rather than as blocks.
//
// 검색 (649) and 지역 + the map (808) are above the fold and play during the
// intro. Everything from the caption down waits for the glide that starts at
// frame 172 and animates a few frames after the page has carried it past the
// fold, so the motion is still visibly running when it lands.
//
// Rail landmarks: 검색 649, field 689, section rule 780, 지역 808, map
// 832-1276, caption lines 1309 and 1331, rules 1380/1475/1570/1726, 장르
// 1422, 교육대상 1517, 운영기간 1612 with its date fields at 1650.
export const Sidebar: React.FC = () => {
  return (
    <>
      <RiseWindow name="검색 label" top={649} left={160} width={60} height={24} from={60} duration={28} />
      <RiseWindow name="검색 field" top={689} left={160} width={312} height={51} from={67} />
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
      <RiseWindow name="운영기간 fields" top={1650} left={160} width={332} height={55} from={239} />
      <Rule name="Rail rule 5" top={1726} left={160} width={312} height={2} color={DIVIDER} from={246} />
    </>
  );
};
