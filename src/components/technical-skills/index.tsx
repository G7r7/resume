import { Component } from 'react';
import React from 'react';
import { config } from '../../config/config';
import { Lang } from '../../types/lang';
import './style.scss';
import { data } from '../../config/data';
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
      <div className="technical-skills">
        <h2>{lang.title[config.language]}</h2>
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
