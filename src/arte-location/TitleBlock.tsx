import { RiseWindow } from "./PageWindow";

// Breadcrumb, the "지역별 정보" headline and the three large tabs, each taking
// its own turn rather than arriving as a block. A tab is a whole slice - its
// outline is part of the render and rides up with it, so no line is ever
// drawn over one already there.
//
// Page landmarks: breadcrumb 153, headline 257, tab row 377-457 with the
// boxes at x160 / x696 / x1232, each 528 wide.
export const TitleBlock: React.FC = () => {
  return (
    <>
      <RiseWindow name="Breadcrumb" top={153} left={160} width={241} height={24} from={6} duration={28} />
      <RiseWindow name="Page title" top={257} left={160} width={337} height={80} from={14} duration={32} />

      <RiseWindow name="Tab 프로그램" top={377} left={160} width={528} height={80} from={22} />
      <RiseWindow name="Tab 운영단체" top={377} left={696} width={528} height={80} from={29} />
      <RiseWindow name="Tab 지역별 자료" top={377} left={1232} width={528} height={80} from={36} />
    </>
  );
};
