import { Component } from 'react';
import React from 'react';
import { config } from '../../data/config';
import { Lang } from '../../types/lang';
import './style.scss';
import { data } from '../../data/data';
import { TechnicalSkill } from '../technical-skill';

type Words = 'title';

const lang: Lang<Words> = {
  title: {
    en: 'Technical Skills',
    fr: 'Compétences techniques',
  },
};

export class TechnicalSkills extends Component {
  render(): React.ReactNode {
    return (
      <div className="box technical-skills">
        <div className="section-title">{lang.title[config.language]}</div>
        {data.technicalSkills
          .sort((sk1, sk2) => (sk1.level < sk2.level ? 1 : -1))
          .map((technicalSkill, index) => {
            return (
              <TechnicalSkill key={index} technicalSkill={technicalSkill} />
            );
          })}
      </div>
    );
  }
}
