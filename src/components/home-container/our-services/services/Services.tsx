import { SwiperSlide } from 'swiper/react';
import { servicesData } from '../fakeDataServices';
import SlideContentTab from './../slideContentTab/SlideContentTab';
import RightArrowIcon from '../../../icon-containers/RightArrowIcon';
import BlueLine from '../../../reusable-components/blueLine/BlueLine';
import ServicesSwiper from '../../../reusable-components/swiper/ServicesSwiper';
import { servicesType } from '../../../model';
import './services.scss';

const Services = () => {
  return (
    <div className='services__container'>
      <div className='services__container__head'>
        <h1 className='services__container__head--title'>OUR SERVICES</h1>

        <div className='services__container__head__textBlock'>
          <span className='services__container__head__textBlock--text'>
            Read More
          </span>
          <span className='services__container__head__textBlock--icon'>
            <RightArrowIcon />
          </span>
        </div>
      </div>
      <div className='services__container__head__blueLineBlock'>
        <BlueLine />
      </div>

      <ServicesSwiper>
        {servicesData.map((item: servicesType) => {
          return (
            <SwiperSlide key={item.id}>
              <SlideContentTab title={item.title} desc={item.desc} />
            </SwiperSlide>
          );
        })}
      </ServicesSwiper>
    </div>
  );
};

export default Services;
