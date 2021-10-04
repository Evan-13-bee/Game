import React, { useState } from 'react';
import s from './Nav.module.css';


type MyLiComponentType = {
  style?: { animation: string },
  list: string
}

export function Nav() {
  const [navStyle, setNavStyle] = useState('')
  const list = ['Home', 'About', 'Works', 'Projects']
  const [status, setStatus] = useState(false)
  const style = (index: number) => {
    return {
      animation: `${s.navLinkFade} 0.5s ease forwards ${index / 7 + 0.4}s`,
    }
  }
  
  const listOfLi = () => {
    if (status) {
      return list.map((list, index) => {
        return <MyLiComponent list={list} style={style(index)} />
      })
    }
    else {
      return list.map((list, index) => {
        return <MyLiComponent list={list} />
      })
    }
  }
  const navSlide = (e: any) => {
    navStyle === '' ? setNavStyle(s.navActive) : setNavStyle('')
    setStatus(!status)
  }


  return (
    <nav className={s.mainNav}>
      <div className={s.logo}>
        <h4>The Nav</h4>
      </div>
      <ul className={`${s.navLinks} ${navStyle}`}>
        {listOfLi()}
      </ul>
      <div onClick={navSlide} className={s.burger}>
        <div className={s.line1}></div>
        <div className={s.line2}></div>
        <div className={s.line3}></div>
      </div>
    </nav>
  );
}




export const MyLiComponent = (props: MyLiComponentType) => {
  return <li style={props.style || {}}><a href="#">{props.list}</a></li>
}

export default Nav;
