import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import Logo from '../../components/icon-containers/Logo';
import Navbar from '../home-container/navbar/Navbar';
import Button from '../reusable-components/button/Button';
import MobileNavbar from '../mobile-navbar/MobileNavbar';
import './header.scss';
import Select from '../reusable-components/select/Select';

const Header: FC = () => {
  const [color, setColor] = useState('#ffffff');
  const [isOpen, setOpen] = useState(false);

  const shoWMenu = () => {
    setOpen(!isOpen);
  };

  const languages = ['EN', 'RU', 'HY'];

  return (
    <div className='header__container'>
      <Link to='/'>
        <Logo className='logo' />
      </Link>
      <div className='header__container__last'>
        <Navbar />
        <Button
          className='header__container__button'
          buttonText='Get an estimate'
        ></Button>
        <Select className='header__container__last__select'>
          {languages.map((language: string) => {
            return <option>{language}</option>;
          })}
        </Select>
      </div>
      <div
        className='header__container__mobile'
        onClick={shoWMenu}
        onMouseOver={() => setColor('#03c4c7')}
        onMouseLeave={() => setColor('#ffffff')}
      >
        <Hamburger color={color} size={30} toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={
          isOpen
            ? 'header__container__mobile__menu'
            : 'header__container__mobile__menu__hide'
        }
      >
        <Logo className='header__container__mobile__menu--logo' />
        <MobileNavbar shoWMenu={shoWMenu} />
      </div>
    </div>
  );
};

export default Header;
