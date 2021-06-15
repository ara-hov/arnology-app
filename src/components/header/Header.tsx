import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import Dropdown from 'react-dropdown';
import Logo from '../../components/icon-containers/Logo';
import Navbar from '../home-container/navbar/Navbar';
import Button from '../reusable-components/button/Button';
import MobileNavbar from '../mobile-navbar/MobileNavbar';
import { SelectType } from '../model';
import './header.scss';
import { useActions } from '../../hooks/useActions';
import MobileLogo from '../icon-containers/MobileLogo';

const Header: FC = () => {
  const { pathname } = useLocation();

  const [color, setColor] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [lang, setLang] = useState({ value: 'en', label: 'EN' });
  const [langOptions, setLangOptions] = useState([
    { value: 'ru', label: 'RU' },
    { value: 'hy', label: 'HY' },
    { value: 'fr', label: 'FR' },
  ]);

  const { getNavlinks } = useActions();

  useEffect(() => {
    getNavlinks(lang.value);
    // eslint-disable-next-line
  }, [lang]);

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

  useEffect(() => {
    if (pathname === '/' || pathname === '/about' || pathname === '/career') {
      setColor('#ffffff');
    } else {
      setColor('#1f2935');
    }
  }, [pathname]);

  return (
    <div className='header__container'>
      <Link to='/'>
        <Logo className='logo' />
      </Link>
      <div className='header__container__last'>
        <Navbar />
        <Button
          className={
            pathname === '/' || pathname === '/about' || pathname === '/career'
              ? 'header__container__button--dark'
              : 'header__container__button--light'
          }
          buttonText='Get an estimate'
        ></Button>
        <Dropdown
          className={
            pathname === '/' || pathname === '/about' || pathname === '/career'
              ? 'Dropdown__root__dark'
              : 'Dropdown__root__light'
          }
          options={langOptions}
          value={lang}
          onChange={(option) => handleLangChange(option)}
        />
      </div>
      <div
        className='header__container__mobile'
        onClick={shoWMenu}
        onMouseOver={() => {
          setColor('#03c4c7');
        }}
        onMouseLeave={() =>
          setColor(`${pathname === '/' ? '#ffffff' : '#1f2935'}`)
        }
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
        <MobileLogo className='header__container__mobile__menu--logo' />
        {/* <Logo className='header__container__mobile__menu--logo' /> */}
        <MobileNavbar shoWMenu={shoWMenu} selectedLang={lang.label} />
      </div>
    </div>
  );
};

export default Header;
