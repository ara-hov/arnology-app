import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './swiper.scss';

import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const ServicesSwiper = ({ children }: any) => {
  return (
    <>
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        className='mySwiper'
        navigation
        breakpoints={{
          1680: {
            width: 1100,
            slidesPerView: 3,
          },
          600: {
            width: 630,
            slidesPerView: 2,
          },

          361: {
            width: 310,
            slidesPerView: 1,
          },
          320: {
            width: 270,
            slidesPerView: 1,
          },
        }}
      >
        {children}
      </Swiper>
    </>
  );
};

export default ServicesSwiper;
