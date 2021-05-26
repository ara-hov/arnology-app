import Logo from '../../components/icon-containers/Logo';
import WorldMap from '../icon-containers/WorldMap';
import SocialIcons from '../reusable-components/social-icons/SocialIcons';
import { footerData } from './fakeFooterData';
import './footer.scss';

const Footer = () => {
  const { contacts, company, services } = footerData;
  return (
    <div className='footer__wrapper'>
      <Logo className='footer__wrapper--logo' />
      <div className='footer__wrapper__content'>
        <div className='footer__wrapper__content__info'>
          <h6 className='footer__wrapper__content__info--title'>Contacts</h6>
          {contacts?.map((item, i) => {
            return (
              <p key={i} className='footer__wrapper__content__info--text'>
                {item}
              </p>
            );
          })}
        </div>
        <div className='footer__wrapper__content__info'>
          <h6 className='footer__wrapper__content__info--title'>Company</h6>
          {company?.map((item, i) => {
            return (
              <p key={i} className='footer__wrapper__content__info--text'>
                {item}
              </p>
            );
          })}
        </div>
        <div className='footer__wrapper__content__info'>
          <h6 className='footer__wrapper__content__info--title'>Services</h6>
          {services?.map((item, i) => {
            return (
              <p key={i} className='footer__wrapper__content__info--text'>
                {item}
              </p>
            );
          })}
        </div>
        <div className='footer__wrapper__content__image'>
          <WorldMap />
        </div>
      </div>
      <div className='footer__wrapper__bottom'>
        <p className='footer__wrapper__bottom--text'>Copyright. 2021</p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Footer;
