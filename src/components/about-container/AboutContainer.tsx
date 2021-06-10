import './aboutContainer.scss';
import ImageContainer from './../reusable-components/image-container/ImageContainer';
import about_background_img from './../../assets/images/about_image.png';
import ContentDescription from './../reusable-components/content-description/ContentDescription';
import AboutWorks from './about-works/AboutWorks';
import ReusableSwiper from './../reusable-components/swiper/ReusableSwiper';
import { testimonials } from '../home-container/fakeData';
import { SwiperSlide } from 'swiper/react';
import TestimonialsSlide from './../home-container/testimonials/testimonials-slide/TestimonialsSlide';
import { testimonialsType } from '../model';
import AboutUs from './about-us/AboutUs';
import JoinTeam from './join-team/JoinTeam';
import Approach from './approach/Approach';

const AboutContainer = () => {
  return (
    <div className='about__wrapper'>
      <div className='about__wrapper__image'>
        <ImageContainer img={about_background_img} />
      </div>
      <div className='about__wrapper__desc'>
        <ContentDescription
          secondLine='SPECIALISTS IN
          DIGITAL SOLUTIONS'
          info='Our designers and engineers know collaboration is the essence of any project.
          It’s a simple philosophy we’ve followed for nearly two decades. And it delivers 
          results.'
        />
      </div>
      <AboutWorks />
      <AboutUs />
      <JoinTeam />
      <Approach />

      <div className='about__wrapper__slider'>
        <h3 className='about__wrapper__slider--title'>
          WHAT THEY SAY ABOUT US
        </h3>
        <ReusableSwiper
          pagination={{
            clickable: true,
          }}
        >
          {testimonials.map((item: testimonialsType, index: number) => {
            return (
              <SwiperSlide key={index}>
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
    </div>
  );
};

export default AboutContainer;
