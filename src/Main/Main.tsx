import React, { useEffect, useState } from 'react';
import s from './Main.module.css';
import c from '../Common/styles/Container.module.css'
import { Button } from '../Common/components/Button/Button';

export function Main() {
  const text = `Frontend developer `
  let line = 0
  let count = 0
  let [result, setResult] = useState('')
  function typeLine() {
    let interval = setTimeout(() => {
      setResult(state => state + text[line][count])
      count++
      if (count >= text[line].length) {
        count = 0;
        line++;
        if (line == text.length) {
            clearTimeout(interval);
            setResult(state => '')//
            count = 0//
            line = 0//
            // return 
          }
        }
        typeLine()
    }, 200+Math.random()*500)
  }
  useEffect(() => {
    typeLine()
  }, [])
  return (
    <div className={s.mainBlock}>
      <div className={c.container}>
        <div className={s.text}>
          <span>Hi there</span>
          <h1>I am Evan Smith</h1>
          <p>{result}|</p>
          <Button />
        </div>
        <div className={s.photo}></div>
      </div>
    </div>
  )
}

export default Main;
