// import video1 from '../../../assets/videos/sample.mp4';
import { forwardRef } from 'react';
import { VideoContainerProps } from '../models';
import './videoContainer.scss';

const VideoContainer = forwardRef<HTMLVideoElement, VideoContainerProps>(
  ({ className, autoPlay, loop, muted, controls, preload, onClick }, ref) => {
    return (
      <video
        className={className ? className : 'background__video'}
        autoPlay={autoPlay}
        loop={loop}
        preload={preload}
        muted={muted}
        controls={controls}
        ref={ref}
        onClick={onClick}
      >
        <source
          src='https://strvothers.s3.amazonaws.com/web-videos/website-home-background-1080p.mp4'
          type='video/mp4'
        />
      </video>
    );
  }
);

export default VideoContainer;
