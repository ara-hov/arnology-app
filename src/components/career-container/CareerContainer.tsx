import './careerContainer.scss';
import Career_bgImg from './../../assets/images/career_image.png';
import ImageContainer from './../reusable-components/image-container/ImageContainer';
import ContentDescription from './../reusable-components/content-description/ContentDescription';
import Position from './position/Position';
import Offer from './offers/Offer';
import Values from './values/Values';
import { Link } from 'react-router-dom';

const CareerContainer = () => {
  return (
    <div className='career__wrapper'>
      <div className='career__wrapper__image'>
        <ImageContainer img={Career_bgImg} />
      </div>
      <div className='career__wrapper__desc'>
        <ContentDescription
          secondLine='BRAVE THINKERS
          WANTED'
          info='We’re fearless collaborators, and we’re looking for people with the skills and ambition 
          to make us even better.'
        />
      </div>
      <Position />
      <Offer />
      <Values />
      <div className='career__wrapper__footer'>
        <p>
          ARE YOU ALREADY A MEMEBER? PLEASE <Link to='/'>LOGIN</Link>
        </p>
      </div>
    </div>
  );
};

export default CareerContainer;
