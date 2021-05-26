import { useCallback, useEffect, useRef, useState } from 'react';
import ContentDescription from '../reusable-components/content-description/ContentDescription';
import VideoContainer from '../reusable-components/video-container/VideoContainer';
import PlayIcon from '../icon-containers/PlayIcon';
import Fade from 'react-reveal/Fade';
import ImageContainer from './image-container/ImageContainer';
import Popup from '../reusable-components/popup/Popup';
import CloseIcon from '../icon-containers/CloseIcon';
import SliderContainer from '../reusable-components/slider/Slider';
import HomeContainerTab from './home-container-tab/HomeContainerTab';
import { technologies } from './fakeData';
import BlueLine from '../reusable-components/blueLine/BlueLine';
import RightArrowIcon from '../icon-containers/RightArrowIcon';
import LeftArrowIcon from '../icon-containers/LeftArrowIcon';
import { technologiesType } from '../model';
import ContactUs from './contact-us/ContactUs';
import './homeContainer.scss';
import OurServices from './our-services/OurServices';
import Testimonials from './testimonials/Testimonials';
import OurWorks from './our-works/OurWorks';
import { VideoSeekSlider } from 'react-video-seek-slider';

const HomeContainer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [videoSettings, setVideoSettings] = useState<any>({
    currentTime: 0,
    maxTime: 0,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideoPopup = () => {
    setIsPopupOpen(!isPopupOpen);
    console.log(videoRef?.current, '1111111111111111111111111111111');
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const playVideo = useCallback(
    (e) => {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        videoRef?.current?.play();
      } else {
        videoRef?.current?.pause();
      }
      setVideoSettings({
        currentTime: e.target.currentTime,
        maxTime: e.target.currentTime,
      });
    },
    [isPlaying]
  );

  useEffect(() => {
    if (!isPlaying) {
      console.log(
        videoRef?.current,
        '---------------1111111111111111111111111111111'
      );
    }
  }, [isPlaying]);

  return (
    <div className='homeContainer__wrapper'>
      <div className='homeContainer__wrapper__videoAndImage'>
        <VideoContainer autoPlay muted loop={true} />
        <ImageContainer />
      </div>
      <div className='homeContainer__wrapper__desc'>
        <ContentDescription
          firstLine='next step'
          secondLine='let your ideas come true'
          info='You have the vision for a stunning digital experience. We’re the software &nbsp; 
          design and engineering team that can bring it to life.'
        />
        <Fade bottom delay={100} duration={1100}>
          <div
            className='homeContainer__wrapper__desc__play'
            onClick={openVideoPopup}
          >
            <PlayIcon />
          </div>
        </Fade>
      </div>
      <Fade bottom cascade delay={100} duration={1100}>
        <div className='homeContainer__wrapper__video__info'>
          <p className='homeContainer__wrapper__video__info--text'>
            we've built solutions for...
          </p>
        </div>
      </Fade>
      <Popup
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
        className='homeContainer__wrapper__popup'
      >
        <CloseIcon
          onClick={closePopup}
          className='homeContainer__wrapper__popup--close'
        />
        <PlayIcon
          className={
            isPlaying
              ? 'homeContainer__wrapper__popup--videoPlay'
              : 'homeContainer__wrapper__popup--videoPause'
          }
          onClick={playVideo}
        />
        <VideoContainer
          ref={videoRef}
          className='homeContainer__wrapper__popup__video'
          autoPlay={!isPlaying ? true : false}
          controls={false}
          onClick={playVideo}
        />
        <VideoSeekSlider
          max={videoSettings.maxTime}
          currentTime={videoSettings.currentTime}
          progress={1000}
          onChange={(time) => {
            setVideoSettings({
              ...videoSettings,
              currentTime: time,
            });
            console.log(time, 'timememememem77777777777777777777777');
          }}
          offset={0}
          secondsPrefix='00:00:'
          minutesPrefix='00:'
        />
      </Popup>
      <SliderContainer
        settings={{
          slidesPerRow: 1,
          dots: true,
          className: 'center',
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          prevArrow: <LeftArrowIcon />,
          nextArrow: <RightArrowIcon />,
        }}
      >
        {technologies.map((desc: technologiesType) => {
          return (
            <div className='homeContainer__wrapper__slide' key={desc.id}>
              <h2>{desc.title}</h2>
              <BlueLine />
              <HomeContainerTab desc={[...desc.desc]} />
            </div>
          );
        })}
      </SliderContainer>
      <OurServices />
      <Testimonials />
      <OurWorks />
      <ContactUs />
    </div>
  );
};

export default HomeContainer;
