import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import { testimonialsType } from '../../model';
import Title from '../../reusable-components/title/Title';
import { testimonials } from '../fakeData';
import TestimonialsSlide from './testimonials-slide/TestimonialsSlide';
import './testimonials.scss';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination]);

const Testimonials = () => {
  return (
    <div className='testimonials__container'>
      <Title title='Testimonials' className='testimonials__container--title' />
      <Swiper pagination={true}>
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
      </Swiper>
    </div>
  );
};

export default Testimonials;
