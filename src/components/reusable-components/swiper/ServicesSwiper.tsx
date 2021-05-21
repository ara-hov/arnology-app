import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './swiper.scss';

import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const ServicesSwiper = ({
  children,
  spaceBetween,
  centeredSlides,
  navigation,
  breakpoints,
  className,
}: any) => {
  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        className={className}
        navigation={navigation}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    </>
  );
};

export default ServicesSwiper;
