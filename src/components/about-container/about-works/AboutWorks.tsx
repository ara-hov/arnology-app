import './aboutWorks.scss';
import { aboutWorksData } from './aboutWorksData';
import { AboutWorksDataType } from '../../model';

const AboutWorks = () => {
  return (
    <div className='about__works__container'>
      <div className='about__works__container__textBlock'>
        <h3 className='about__works__container__textBlock--title'>
          WHY WORK WITH ARNOLOGY?
        </h3>
        <p className='about__works__container__textBlock--text'>
          We are a talented tech team streaming to find the best tech solutions
          for our customers.
        </p>
      </div>

      <div className='about__works__container__infoBlock'>
        {aboutWorksData.map((item: AboutWorksDataType, index: number) => {
          return (
            <div
              className='about__works__container__infoBlock__item'
              key={index}
            >
              <div>{item.img}</div>
              <div>
                <p>{item.result}</p>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutWorks;
