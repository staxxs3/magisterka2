import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/About' activeStyle>
            About This App
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;