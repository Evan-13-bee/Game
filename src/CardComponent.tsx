import React, { ChangeEvent, useState } from 'react';
import s from './CardComponent.module.css'

type CardComponentType = {
  img: string
  isClicked: boolean
  id: string
  status: 'done' | 'active'
  setVision: (id: string, img: string) => void
}
export const CardComponent = (props: CardComponentType) => {

  return (
    props.status === 'active'
      ? (
        props.isClicked
          ? <img
            className={s.photo}
            src={props.img}
          />
          : <p
            className={`${s.photo} ${s.writing}`}
            onClick={() => props.setVision(props.id, props.img)}
          >?</p>
      )
      : <img
        className={s.photo}
        src={props.img}
      />


  )
}