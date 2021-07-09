import './careerMorePosition.scss';
import { Link } from 'react-router-dom';
import LeftArrowIcon from '../../icon-containers/LeftArrowIcon';
import Title from '../../reusable-components/title/Title';
import CareerStartups_img from './../../../assets/images/career-startups.png';
import { careerMorePositionData } from '../fakeDataCareerMore';
import { ICareerMorePositionType } from '../../model';

const CareerMorePosition = () => {
  return (
    <div className='morePosition__container'>
      <div className='morePosition__container__link'>
        <Link to='/career'>
          <LeftArrowIcon />
          CAREERS
        </Link>
      </div>
      <div className='morePosition__container__header'>
        <h1>ANDROID DEVELOPER</h1>
        <Title
          title='Yerevan, Armenia'
          className='morePosition__container__header--subTitle'
        />
        <p className='morePosition__container__header--text'>
          We develop digital products for Silicon Valley startups: machine
          learning, IoT, fintech, gaming, and more.
        </p>
        <img
          src={CareerStartups_img}
          alt='startup_image'
          className='morePosition__container__header--image'
        />
      </div>
      <div className='morePosition__container__content'>
        {careerMorePositionData.map((item: ICareerMorePositionType) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <ul>
                {item.desc.map((el, index) => {
                  return (
                    <li
                      key={index}
                      className={`${item.desc.length <= 1 ? 'unList' : ''}`}
                    >
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerMorePosition;
