import './careerMore.scss';
import CareerMorePosition from './career-more-position/CareerMorePosition';
import ApplyPosition from './apply-position/ApplyPosition';

const CareerMoreContainer = () => {
  return (
    <div className='careerMore__wrapper'>
      <div className='careerMore__wrapper__container'>
        <CareerMorePosition />
        <ApplyPosition />
      </div>
    </div>
  );
};

export default CareerMoreContainer;
