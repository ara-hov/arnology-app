import Button from '../../reusable-components/button/Button';
import './joinTeam.scss';
import Join_img from './../../../assets/images/contacts.png';

const JoinTeam = () => {
  return (
    <div className='join__team__wrapper'>
      <div className='join__team__wrapper__container'>
        <div className='join__team__wrapper__container__text'>
          <p className='join__team__wrapper__container__text--title'>
            Love building digital products? <br /> Join our team!
          </p>
          <p className='join__team__wrapper__container__text--info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repelle
            ndus esse magni iure enim animi rem vitae.
          </p>
          <Button
            buttonText={'CAREER'}
            className='join__team__wrapper__container__text--btn'
          />
        </div>
        <div className='join__team__wrapper__container__image'>
          <img src={Join_img} alt='img' />
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
