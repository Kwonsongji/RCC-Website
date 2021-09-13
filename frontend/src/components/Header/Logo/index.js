import React from "react";
import logoImg from '../../../assets/logo_rcc.png'

const Logo = () => {
  return (
    <div className="logo" >
      <img  className="logo__main" src={logoImg} alt="Necromancers"/> 
    </div>
  )
}

export default Logo;
