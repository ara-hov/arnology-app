import { testimonialsType } from '../../../model';
import './testimonialsSlide.scss';

const TestimonialsSlide = ({ info, name, profession }: testimonialsType) => {
  return (
    <div className='testimonials__slide'>
      <p className='testimonials__slide--info'>{info}</p>
      <p className='testimonials__slide--name'>{name}</p>
      <p className='testimonials__slide--profession'>{profession}</p>
    </div>
  );
};

export default TestimonialsSlide;
