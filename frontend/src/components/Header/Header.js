import React from 'react';
import NavBarRight from './NavbarRight';
/* import NavBarLeft from './NavBarLeft'; */
import Logo from './Logo';
import './header.scss';


const Header = () => {
  return (
    <div className="header">
      <header>
        <NavBarRight/>
        {/*   <Logo/> */}
        {/* <NavBarLeft/> */}
      </header>
    </div>
  )
}

export default Header;
