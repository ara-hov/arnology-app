import BlueLine from '../../../reusable-components/blueLine/BlueLine';
import Button from '../../../reusable-components/button/Button';
import ChareEstimate from '../../../../assets/images/chart_estimate.png';
import './estimate.scss';

const Estimate = () => {
  return (
    <div className='estimate__container'>
      <div className='estimate__container__text'>
        <h1 className='estimate__container__text--title'>GET AN ESTIMATE</h1>
        <BlueLine />
        <p className='estimate__container__text--subTitle'>
          Interested in discussing a project? Let’s build something great.
        </p>
        <Button
          buttonText='Get in touch'
          className='estimate__container__text__button'
        />
      </div>
      <div className='estimate__container__image'>
        <img src={ChareEstimate} alt='' />
      </div>
    </div>
  );
};

export default Estimate;
