import { RiseWindow } from "./PageWindow";

// "프로그램" heading on the left, then its one-line description over on the
// right - one after the other, not together.
export const SectionIntro: React.FC = () => {
  return (
    <>
      <RiseWindow name="Section heading" top={557} left={160} width={180} height={52} from={45} />
      <RiseWindow name="Section description" top={585} left={1341} width={419} height={24} from={52} duration={28} />
    </>
  );
};
