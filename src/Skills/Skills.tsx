import React from 'react';
import s from './Skills.module.css';
import c from '../Common/styles/Container.module.css'
import Skill from './Skill/Skill';
import { Title } from '../Common/components/Title/Title';
import reactImg from '../assets/image/react.png'
import ts from '../assets/image/ts.png'
import css from '../assets/image/css.png'
import server from '../assets/image/server.png'
import vue from '../assets/image/Vue.png'
export function Skills() {
  return (
    <div className={s.skillsBlock}>
      <div className={`${c.container} ${s.skillsContainer}`}>
        <Title
          text={'Skills'}
        />
        <div className={s.skills}>
          <Skill
            textData={'React'}
            img={reactImg}
            title={'React'}
            description={[
              'Hooks',
              'Redux',
              'React - Redux',
              'UniTest',
              'HOC',
              'storyBook(low)'
            ]}
          />
          <Skill
            textData={'TS'}
            img={ts}
            title={'TypeScript'}
            description={[
              'type of data',
              'callback',
              'type function',
              'type AXIOS',
              'type of generic',
            ]}
          />
          <Skill
            textData={'Server'}
            img={server}
            title={'server requests'}
            description={[
              'Promises',
              'Thunk',
              'axios',
            ]}
          />
          <Skill
            textData={'CSS'}
            img={css}
            title={'CSS'}
            description={[
              'flex',
              'SASS',
              'grid(low)'
            ]}
          />
          <Skill
            textData={'Vue'}
            img={vue}
            title={'VUE'}
            description={[
              'Vuex',
              'Filters',
              'Mixins',
              'Directives'
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
