import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import Dropdown from 'react-dropdown';
import Logo from '../../components/icon-containers/Logo';
import Navbar from '../home-container/navbar/Navbar';
import Button from '../reusable-components/button/Button';
import MobileNavbar from '../mobile-navbar/MobileNavbar';
import { SelectType } from '../model';
import './header.scss';

const Header: FC = () => {
  const [color, setColor] = useState('#ffffff');
  const [isOpen, setOpen] = useState(false);
  const [lang, setLang] = useState({ value: 'en', label: 'EN' });
  const [langOptions, setLangOptions] = useState([
    { value: 'ru', label: 'RU' },
    { value: 'hy', label: 'HY' },
    { value: 'fr', label: 'FR' },
  ]);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [isOpen]);

  const shoWMenu = () => {
    setOpen(!isOpen);
  };

  const handleLangChange = (option: SelectType) => {
    const filteredLang = langOptions.filter(
      (langOption) => langOption.value !== option.value
    );
    setLangOptions([...filteredLang, lang]);
    setLang(option);
  };

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
        <Dropdown
          options={langOptions}
          value={lang}
          onChange={(option) => handleLangChange(option)}
        />
        ;
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
        <MobileNavbar shoWMenu={shoWMenu} selectedLang={lang.label} />
      </div>
    </div>
  );
};

export default Header;
