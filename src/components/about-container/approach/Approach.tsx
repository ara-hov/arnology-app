import { approachData } from '../fakeDataApproach';
import './approach.scss';
import { ApproachType } from './../../model';
import Title from '../../reusable-components/title/Title';

const Approach = () => {
  return (
    <div className='approach__container'>
      <h3 className='approach__container--title'>OUR APPROACH</h3>
      <p className='approach__container--text'>
        Whether you are fortune 500 or a startup we can help you to unlock
        opportunity by creating human-centered products.
      </p>
      <div className='approach__container__content'>
        {approachData.map((item: ApproachType, i: number) => {
          return (
            <div key={i}>
              <Title
                title={item.title}
                className='approach__container__content--title'
              />
              {item?.content?.map((el: string, index: number) => (
                <p className='approach__container__content--text' key={index}>
                  {el}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Approach;
