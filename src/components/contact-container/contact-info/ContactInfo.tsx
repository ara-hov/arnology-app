import './contactInfo.scss';
import SocialIcons from './../../reusable-components/social-icons/SocialIcons';
import Contacts__img from './../../../assets/images/contacts.png';
const ContactInfo = () => {
  return (
    <div className='contact__info__container'>
      <p className='contact__info__container--header'>
        Prefer to email or phone?
      </p>
      <p className='contact__info__container--email'>info@arnology.am</p>
      <p className='contact__info__container--phone'>+374 77 06 53 03</p>
      <p className='contact__info__container--phone'>+374 41 96 06 26</p>
      <p className='contact__info__container--findUs'>Find Us</p>
      <SocialIcons />
      <div className='contact__info__container__address'>
        <h2 className='contact__info__container__address--title'>YEREVAN</h2>
        <p className='contact__info__container__address--text'>
          49 Tigran Mets Avenue, 5th floor Armenia, Yerevan
        </p>

        <div className='contact__info__container__address__info'>
          <div>
            <h4>LEON</h4>
            <p className='contact__info__container__address--text'>
              49 Tigran Mets Avenue, 5th floor Armenia, Yerevan
            </p>
          </div>
          <div className='rightText'>
            <h4>LA</h4>
            <p className='contact__info__container__address--text '>
              49 Tigran Mets Avenue, 5th floor Armenia, Yerevan
            </p>
          </div>
        </div>
      </div>
      <div className='contact__info__container__img'>
        <img src={Contacts__img} alt='' />
      </div>
    </div>
  );
};

export default ContactInfo;
