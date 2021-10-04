import React from 'react';
import s from './Works.module.scss';
import c from '../Common/styles/Container.module.css'
import { MyWork } from './MyWorks/MyWork';
import { Title } from '../Common/components/Title/Title';
import Priemlemo from '../assets/image/Priemlemo.jpg'
import Dog from '../assets/image/Dog.png'
export { Priemlemo }

export function Works() {
  let works = []
  for (let i = 0; i < 20; i++) {
    works.push(i)
  }
  const social = {
    backgroundImage: `url(${Priemlemo})`,

  }
  const todoList = {
    backgroundImage: `url(${Dog})`,
  }
  return (
    <div className={s.worksBlock}>
      <div className={`${c.container} ${s.worksContainer}`}>
        <Title
          text={'My Projects'}
        />
        <div className={s.works}>
          <MyWork
            title={'Social network'}
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
            style={social}
          />
          <MyWork
            title={'Todolist'}
            description={'Pop police'}
            style={todoList}
          />
          <MyWork
            title={'Todolist'}
            description={'Pop police'}
            style={todoList}
          />
         
          {/* {works.map(() => <MyWork
            title={'Todolist'}
            description={'Pop police'}
            srcForImg={''}
          />)} */}
        </div>
      </div>
    </div>
  );
}


