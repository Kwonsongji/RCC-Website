import React from 'react';
import NavBarRight from './NavbarRight';
/* import NavBarLeft from './NavBarLeft'; */
import Logo from './Logo';


const Header = () => {
  return (
    <div className="header">
      <NavBarRight/>
      <Logo/>
      {/* <NavBarLeft/> */}
    </div>
  )
}

export default Header;
