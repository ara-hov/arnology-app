import { FC, useEffect, useState } from "react";
import "./worksContainer.scss";
import WorksHeader from "./works-header/worksHeader";
import CardItems from "./items-wrapper/cardItems";

const WorksContainer: FC = () => {
  const [sortLableName, sortByLabelName] = useState("all");

  useEffect(() => {
    sortByLabelName(sortLableName);
  }, []);

  return (
    <div className="worksContainer__Wrapper">
      <WorksHeader sortByLabelName={sortByLabelName} />
      <CardItems sortLableName={sortLableName} />
    </div>
  );
};

export default WorksContainer;
