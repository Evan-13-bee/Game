import React from 'react';
import s from './Skills.module.css';
import c from '../Common/styles/Container.module.css'
import Skill from './Skill/Skill';
import { Title } from '../Common/components/Title/Title';
export function Skills() {
  return (
    <div className={s.skillsBlock}>
      <div className={`${c.container} ${s.skillsContainer}`}>
      <Title 
          text={'Skills'}
        />
        <div className={s.skills}>
          <Skill title={'JS'} description={'It\'s revolution'}/>
          <Skill title={'HTML'} description={'Russia for sasd people'}/>
          <Skill title={'CSS'} description={'I love snow'}/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
