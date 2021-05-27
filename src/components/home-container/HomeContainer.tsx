import { useRef, useState } from 'react';
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
import OurServices from './our-services/OurServices';
import Testimonials from './testimonials/Testimonials';
import OurWorks from './our-works/OurWorks';
import ReactPlayer from 'react-player';
import './homeContainer.scss';

const HomeContainer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const videoRef = useRef<any>();

  const [currentVideoTime, setCurrentVideoTime] = useState<any>(null);

  const openVideoPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const playVideo = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef?.current?.play();
    } else {
      videoRef?.current?.pause();
    }
  };

  const [played, setPlayed] = useState(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [seeking, setSeeking] = useState(false);
  const url =
    'https://strvothers.s3.amazonaws.com/web-videos/website-home-background-1080p.mp4';
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
        {/* <VideoContainer
          ref={videoRef}
          className='video-js'
          autoPlay={!isPlaying ? true : false}
          controls={false}
          onClick={playVideo}
        /> */}
        <ReactPlayer
          ref={videoRef}
          url={url}
          controls={true}
          playing={playing}
          onProgress={(newState) => {
            if (!seeking) {
              setPlayed(newState.played);
            }
          }}
          onPlay={() => {
            setPlaying(true);
          }}
          onPause={() => {
            setPlaying(false);
          }}
        />
        <input
          style={{ width: '100%' }}
          type='range'
          min={0}
          max={0.999999}
          step='any'
          value={played}
          onMouseDown={() => {
            setSeeking(true);
          }}
          onChange={({ target: { value } }) => {
            setPlayed(parseFloat(value));
          }}
          onMouseUp={({ target: { value } }: any) => {
            setSeeking(false);
            videoRef?.current?.seekTo(parseFloat(value));
            videoRef?.current?.seekTo(parseFloat(value));
          }}
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
