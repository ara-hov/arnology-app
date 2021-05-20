import Navbar from '../home-container/navbar/Navbar';
import Fade from 'react-reveal/Fade';
import SocialIcons from '../reusable-components/social-icons/SocialIcons';
import './mobileNavbar.scss';
import { FC } from 'react';

interface MobileNavbarProps {
  shoWMenu: () => void;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ shoWMenu }) => {
  return (
    <Fade top fraction={0.5} delay={100} duration={1500} distance='7rem'>
      <div className='mobileNavbar__container'>
        <Navbar shoWMenu={shoWMenu} />
        <Fade top cascade>
          <SocialIcons />
        </Fade>
      </div>
    </Fade>
  );
};

export default MobileNavbar;
