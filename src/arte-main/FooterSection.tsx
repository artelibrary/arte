import { StaticWindow } from "./PageWindow";

// Banner and footer carry no entrance motion - they're just there once the
// page scrolls under them.
export const FooterSection: React.FC = () => {
  return (
    <>
      <StaticWindow top={4749} left={0} width={1920} height={132} />
      <StaticWindow top={4881} left={0} width={1920} height={478} />
    </>
  );
};
