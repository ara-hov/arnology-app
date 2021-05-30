import './ourWorks.scss';
import Works from './works/Works';
import WorksScrollSlider from './works-scroll-slider/WorksScrollSlider';

const OurWorks = () => {
  return (
    <div className='ourWorks__container'>
      <Works />
      <WorksScrollSlider />
    </div>
  );
};
export default OurWorks;
