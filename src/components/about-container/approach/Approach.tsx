import { approachData } from '../fakeDataApproach';
import './approach.scss';
import { ApproachType } from './../../model';
import Title from '../../reusable-components/title/Title';

const Approach = () => {
  return (
    <div className='approach__container'>
      <h3 className='approach__container--title'>OUR APPROACH</h3>
      <p className='approach__container--text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        perspiciatis deserunt voluptatum iusto animi.
      </p>
      <div className='approach__container__content'>
        {approachData.map((item: ApproachType) => {
          return (
            <div>
              <Title
                title={item.title}
                className='approach__container__content--title'
              />
              {item?.content?.map((el: string) => (
                <p className='approach__container__content--text'>{el}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Approach;
