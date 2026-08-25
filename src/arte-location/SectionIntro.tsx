import { RiseWindow } from "./PageWindow";

// "프로그램" heading on the left, its one-line description over on the right.
export const SectionIntro: React.FC = () => {
  return (
    <>
      <RiseWindow name="Section heading" top={557} left={160} width={180} height={52} from={46} />
      <RiseWindow name="Section description" top={585} left={1341} width={419} height={24} from={54} duration={28} />
    </>
  );
};
