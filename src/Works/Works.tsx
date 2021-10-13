import React from 'react';
import s from './Works.module.scss';
import c from '../Common/styles/Container.module.css'
import { MyWork } from './MyWorks/MyWork';
import { Title } from '../Common/components/Title/Title';
import todolist from '../assets/image/todolist.png'
import game from '../assets/image/game.png'
export { todolist as Priemlemo }

export function Works() {
  let works = []
  for (let i = 0; i < 20; i++) {
    works.push(i)
  }
  const social = {
    backgroundImage: `url(${todolist})`,

  }
  const todoList = {
    backgroundImage: `url(${game})`,
  }
  return (
    <div className={s.worksBlock}>
      <div className={`${c.container} ${s.worksContainer}`}>
        <Title
          text={'My Projects'}
        />
        <div className={s.works}>
          <MyWork
            title={'Todolist'}
            description={'Todolist for your tasks'}
            style={social}
            hrefToProject={'https://evan-13-bee.github.io/todolist/'}
          />
          <MyWork
            title={'Game'}
            description={'Build simple memory game with colored (or any images) cards.'}
            style={todoList}
            hrefToProject={'https://evan-13-bee.github.io/page/'}
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


