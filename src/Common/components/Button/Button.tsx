import React, { MouseEventHandler, useState } from "react"
import s from './Button.module.scss'

export const Button = () => {
  const [state, setState] = useState<any>()
  let m: boolean = false
  const onButtonEnter = (e: any) => {
    // let x = e.clientX - e.currentTarget.offsetLeft
    // let y = e.clientY - e.currentTarget.offsetTop
    if(m===true) return
    m=true
    var bounds = e.target.getBoundingClientRect();
    var x = e.clientX - bounds.left;
    var y = e.clientY - bounds.top;

    let ripple = <span
      className={s.spanni}
      style={
        {
          left: `${x}px`,
          top: `${y}px`,
        }
      }></span>
    setState(ripple)
    setTimeout(() => {
      setState(null)
      m=false
    }, 1000)
  }
  return (
    <>
      <a
        className={s.f}
        onMouseEnter={onButtonEnter}
        href="#"
      >{state}Watch</a>
    </>
  )
}