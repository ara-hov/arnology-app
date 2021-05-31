import { SwiperSlide } from 'swiper/react';
import { servicesData } from '../fakeDataServices';
import { servicesType } from '../../../model';
import SlideContentTab from './../slideContentTab/SlideContentTab';
import RightArrowIcon from '../../../icon-containers/RightArrowIcon';
import ReusableSwiper from '../../../reusable-components/swiper/ReusableSwiper';
import Title from '../../../reusable-components/title/Title';
import './services.scss';

const Services = () => {
  return (
    <div className='services__container'>
      <div className='services__container__head'>
        <Title
          title='our services'
          className='services__container__head--title'
        />
        <div className='services__container__head__textBlock'>
          <span className='services__container__head__textBlock--text'>
            Read More
          </span>
          <span className='services__container__head__textBlock--icon'>
            <RightArrowIcon />
          </span>
        </div>
      </div>
      <ReusableSwiper
        spaceBetween={5}
        centeredSlides={true}
        navigation={true}
        pagination={false}
        className='mySwiper'
        breakpoints={{
          1680: {
            width: 1000,
            slidesPerView: 3,
          },
          768: {
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
        {servicesData.map((item: servicesType) => {
          return (
            <SwiperSlide key={item.id}>
              <SlideContentTab title={item.title} desc={item.desc} />
            </SwiperSlide>
          );
        })}
      </ReusableSwiper>
    </div>
  );
};

export default Services;
