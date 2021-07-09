import { FC } from 'react';
import BlueLine from '../blueLine/BlueLine';
import Button from '../button/Button';
import { ContentDescriptionProps } from '../models';
import Fade from 'react-reveal/Fade';
import './contentDescription.scss';

const ContentDescription: FC<ContentDescriptionProps> = ({
  firstLine,
  secondLine,
  info,
  buttonClassName,
}) => {
  return (
    <Fade bottom delay={100} duration={1500} distance='5rem'>
      <div className='contentDescription'>
        <h1 className='contentDescription__title'>{firstLine}</h1>
        {secondLine ? (
          <h1 className='contentDescription__title'>{secondLine} </h1>
        ) : null}
        <BlueLine />
        <p className='contentDescription__info'>{info}</p>
        <Button
          className={
            buttonClassName ? buttonClassName : 'contentDescription__button'
          }
          buttonText='Get in touch'
        ></Button>
      </div>
    </Fade>
  );
};

export default ContentDescription;
