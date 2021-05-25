import Button from '../../../reusable-components/button/Button';
import Title from '../../../reusable-components/title/Title';
import './works.scss';
import { worksData } from '../worksFakeData';
import WorksContentTab from '../worksContentTab/WorksContentTab';

const Works = () => {
  return (
    <div className='works__container'>
      <Title title='OUR WORKS' className='works__container--title' />
      <p className='works__container--text'>
        There is nothing more important for us than our client's success. That's
        why we build our applications with great attention to detail and a
        business-oriented approach. But enough with the words - let's make our
        work speak for ourselves!
      </p>
      <div className='works__container__slider'>
        {/* {worksData.map((item) => {
          return (
            <WorksContentTab
              title={item.title}
              info={item.info}
              img={item.img}
            />
          );
        })} */}
      </div>
      <Button buttonText='SEE PORTFOLIO' className='works__container--button' />
    </div>
  );
};

export default Works;
