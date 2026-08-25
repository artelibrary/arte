import "./index.css";
import { CryingRobotComposition } from "./CryingRobot";
import { WebsiteScrollComposition } from "./WebsiteScroll";
import { Scroll2Composition } from "./Scroll2";
import { ArtescollComposition } from "./Artescoll";
import { ArteDocumentComposition } from "./ArteDocument";
import { ArteSearchComposition } from "./ArteSearch";
import { ArteMainComposition } from "./ArteMain";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <CryingRobotComposition />
      <WebsiteScrollComposition />
      <Scroll2Composition />
      <ArtescollComposition />
      <ArteDocumentComposition />
      <ArteSearchComposition />
      <ArteMainComposition />
    </>
  );
};
