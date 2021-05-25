import { testimonialsType } from '../../../model';
import './testimonialsSlide.scss';
import CommaIcon from './../../../icon-containers/CommaIcon';

const TestimonialsSlide = ({ info, name, profession }: testimonialsType) => {
  return (
    <div className='testimonials__slide'>
      <p className='testimonials__slide--info'>{info}</p>
      <p className='testimonials__slide--name'>{name}</p>
      <p className='testimonials__slide--profession'>{profession}</p>
      <div className='testimonials__slide--icon'>
        <CommaIcon />
      </div>
    </div>
  );
};

export default TestimonialsSlide;
