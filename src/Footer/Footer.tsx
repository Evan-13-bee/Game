import React from 'react';
import s from './Footer.module.css';
import c from '../Common/styles/Container.module.css'

export function Footer() {
  return (
    <div className={s.footerContainer}>
      <div className={`${c.container} ${s.footer}`}>
        <h3 className={s.name}>Самочернов Ярослав</h3>
        <div className={s.boxes}>
          <div className={s.box}></div>
          <div className={s.box}></div>
          <div className={s.box}></div>
          <div className={s.box}></div>
        </div>
        <p className={s.name}>2021 Все права защищены</p>
      </div>
    </div>
  );
}
