import { DrawnBorder, RiseWindow } from "./PageWindow";

// Breadcrumb, the "지역별 정보" headline and the three large tabs.
//
// 프로그램 is a solid black plate rather than an outlined box, so it has no
// line to separate out and rises whole. The other two are outlined: the label
// rises on its own, cropped to the text and nothing else, and the box is
// drawn round it afterwards.
//
// Page landmarks: breadcrumb 153, headline 257, tab row 377-456, boxes at
// x160-688 / x696-1222 / x1232-1758, labels at x904 and x1423 on y393.
export const TitleBlock: React.FC = () => {
  return (
    <>
      <RiseWindow name="Breadcrumb" top={153} left={160} width={241} height={24} from={6} duration={28} />
      <RiseWindow name="Page title" top={257} left={160} width={337} height={80} from={14} duration={32} />

      <RiseWindow name="Tab 프로그램" top={377} left={160} width={528} height={80} from={22} />

      <RiseWindow name="Tab 운영단체 label" top={393} left={904} width={111} height={48} from={29} duration={26} />
      <DrawnBorder top={377} left={696} width={526} height={79} from={37} segmentDuration={7} />

      <RiseWindow name="Tab 지역별 자료 label" top={393} left={1423} width={146} height={48} from={36} duration={26} />
      <DrawnBorder top={377} left={1232} width={526} height={79} from={44} segmentDuration={7} />
    </>
  );
};
