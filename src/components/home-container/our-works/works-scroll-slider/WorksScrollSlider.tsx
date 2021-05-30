import './worksScrollSlider.scss';
import { worksData } from '../worksFakeData';
import WorksContentTab from '../worksContentTab/WorksContentTab';
import { worksType } from '../../../model';

const WorksScrollSlider = () => {
  return (
    <div className='worksSlider__container'>
      {worksData.map((item: worksType) => {
        return (
          <div key={item.id} className='worksSlider__container__slide'>
            <WorksContentTab
              title={item.title}
              info={item.info}
              img={item.img}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WorksScrollSlider;
