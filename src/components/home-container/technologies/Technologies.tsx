import BlueLine from '../../reusable-components/blueLine/BlueLine';
import './technologies.scss';

const Technologies = () => {
  return (
    <div className='techno__wrapper'>
      <div className='techno__wrapper__square__container'>
        <div className='techno__wrapper__square__container__first-square'>
          <div className={`inner__square`}></div>
        </div>
        <div className='techno__wrapper__square__container__second-square'>
          <div className={`inner__square`}></div>
        </div>
        <div className='techno__wrapper__square__container__third-square'>
          <div className={`inner__square`}></div>
        </div>
      </div>

      <p className='techno__wrapper__title'>
        Web development technologies we use
      </p>
      <BlueLine width='6rem' />
    </div>
  );
};

export default Technologies;
