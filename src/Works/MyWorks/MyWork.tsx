import React from 'react';
import { Button } from '../../Common/components/Button/Button';
import { Priemlemo } from '../Works';
import s from './MyWork.module.scss';
type MyWorkType = {
  title: string
  description: string
  style: Object
}
export function MyWork(props: MyWorkType) {
  return (
    <div className={s.workContainer}>
      <div className={s.img} style={props.style}>
          <Button/>
      </div>
      <div className={s.projectInfo}>
        <p className={s.projectTitle}>{props.title}</p>
        <p className={s.projectDescription}>{props.description}</p>
      </div>
    </div>

  );
}

