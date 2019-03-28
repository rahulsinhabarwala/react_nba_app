import React,{Component} from 'react';
import style from './header.css';
import {Link} from 'react-router-dom';

const Header =()=>{

    const logo =()=>{
        return(
            <Link to='/' className="style.logo">
            <img alt='nba logo' src='/images/nba_logo.png'>
            </img>
            </Link>
        )
    }
    
return(
    <header className={style.header}>
      <div className={style.headerOpt}>
       
       {logo()}
      </div>
    </header>
    )
}
export default Header;  