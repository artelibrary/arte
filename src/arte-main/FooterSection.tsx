import { RiseWindow } from "./PageWindow";

const BASE_DELAY = 26;

export const FooterSection: React.FC = () => {
  return (
    <>
      <RiseWindow name="Partner logos" top={4749} left={0} width={1920} height={132} from={BASE_DELAY} />
      <RiseWindow name="Footer" top={4881} left={0} width={1920} height={478} from={BASE_DELAY + 14} />
    </>
  );
};
