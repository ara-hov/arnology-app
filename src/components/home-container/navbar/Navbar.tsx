import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

interface NavbarProps {
  shoWMenu?: () => void;
}

const Navbar: FC<NavbarProps> = ({ shoWMenu }) => {
  return (
    <div className='navbar' onClick={shoWMenu}>
      <NavLink to='/about' activeClassName='navbar__selected'>
        About
      </NavLink>
      <NavLink to='/services' activeClassName='navbar__selected'>
        Services
      </NavLink>
      <NavLink to='/works' activeClassName='navbar__selected'>
        Works
      </NavLink>
      <NavLink to='/career' activeClassName='navbar__selected'>
        Carrier
      </NavLink>
      <NavLink to='/contact' activeClassName='navbar__selected'>
        Contacts
      </NavLink>
    </div>
  );
};

export default Navbar;
