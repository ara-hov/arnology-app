import { SwiperSlide } from 'swiper/react';
import { testimonialsType } from '../../model';
import Title from '../../reusable-components/title/Title';
import { testimonials } from '../fakeData';
import TestimonialsSlide from './testimonials-slide/TestimonialsSlide';
import './testimonials.scss';
import ReusableSwiper from '../../reusable-components/swiper/ReusableSwiper';

const Testimonials = () => {
  return (
    <div className='testimonials__container'>
      <Title
        title='Testimonials'
        className='testimonials__container--title'
        titleClassName='testimonials__container--titleBlock'
      />
      <ReusableSwiper
        pagination={{
          clickable: true,
        }}
      >
        {testimonials.map((item: testimonialsType) => {
          return (
            <SwiperSlide key={item.id}>
              <TestimonialsSlide
                info={item.info}
                name={item.name}
                profession={item.profession}
              />
            </SwiperSlide>
          );
        })}
      </ReusableSwiper>
    </div>
  );
};

export default Testimonials;
