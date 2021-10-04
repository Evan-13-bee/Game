import React from 'react';
import s from './Skill.module.css';


export function Skill(props: any) {
  return (
    <div className={s.skill}>
      <div data-text={props.textData} className={s.topLr}>
        {props.img? <img className={s.topImg} src={props.img}/>: ''}
      </div>
      <div className={s.bottomLr}>
        <h2>{props.title}</h2>
        <ol className={s.description}>
          {props.description.map((e: string) => <li>{e}</li>)}
        </ol>
      </div>
    </div>
  );
}

export default Skill;
