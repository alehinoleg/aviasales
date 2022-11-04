import React from 'react';

import logo from './Logo.svg'
import style from './logo.module.scss'

const Logo = () => {
  return(
    <img src={logo} alt="logo" className={style.logo}/>
  )
}

export default Logo;