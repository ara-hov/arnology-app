import PhoneIcon from '../../../icon-containers/PhoneIcon';
import { servicesType } from '../../../model';
import './slideContentTab.scss';

const SlideContentTab = ({ title, desc }: servicesType) => {
  return (
    <div className='contentTab'>
      <div className='contentTab__container'>
        <div className='contentTab__container__title'>
          <h3>{title}</h3>
          <p className='contentTab__container__title--text'>{desc}</p>
        </div>
        <div className='contentTab__container__info'>
          <p>Read More</p>
        </div>
        <figure className='contentTab__container__phoneIcon'>
          <PhoneIcon />
        </figure>
      </div>
    </div>
  );
};

export default SlideContentTab;
