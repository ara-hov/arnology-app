import Navbar from '../home-container/navbar/Navbar';
import Fade from 'react-reveal/Fade';
import SocialIcons from '../reusable-components/social-icons/SocialIcons';
import './mobileNavbar.scss';
import { FC } from 'react';
import MobileTranslate from './mobile-translate/MobileTranslate';
import Button from '../reusable-components/button/Button';

interface MobileNavbarProps {
  shoWMenu: () => void;
  selectedLang: any;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ shoWMenu, selectedLang }) => {
  return (
    <Fade top fraction={0.5} delay={100} duration={1500} distance='7rem'>
      <div className='mobileNavbar__container'>
        <div className='mobileNavbar__container__navbar'>
          <div>
            <Navbar shoWMenu={shoWMenu} />
            <MobileTranslate selectedLang={selectedLang} />
            <Button
              className='mobileNavbar__container__navbar--button'
              buttonText='GET AN ESTIMATE'
            />
          </div>
        </div>

        <div className='mobileNavbar__container__iconBlock'>
          <div className='mobileNavbar__container__iconBlock--icons'>
            <SocialIcons />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MobileNavbar;
