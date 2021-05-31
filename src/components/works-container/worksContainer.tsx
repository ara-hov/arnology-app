import { FC, useEffect, useState } from 'react';
import WorksHeader from './works-header/worksHeader';
import CardItems from './items-wrapper/cardItems';
import './worksContainer.scss';

const WorksContainer: FC = () => {
  const [sortLabelName, sortByLabelName] = useState('all');

  useEffect(() => {
    sortByLabelName(sortLabelName);
  }, [sortLabelName]);

  return (
    <div className='worksContainer__Wrapper'>
      <WorksHeader sortByLabelName={sortByLabelName} />
      <CardItems sortLabelName={sortLabelName} />
    </div>
  );
};

export default WorksContainer;
