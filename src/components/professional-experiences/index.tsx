import React from 'react';
import { Lang } from '../../types/lang';
import { data } from '../../config/data';
import { config } from '../../config/config';
import './style.scss';
import { ProfessionalExperience } from '../professional-experience';

type Words = 'title';

const lang: Lang<Words> = {
  title: {
    en: 'Professional Experiences',
    fr: 'Expériences professionelles',
  },
};

export class ProfessionalExperiences extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="professional-experiences">
        <h2>{lang.title[config.language]}</h2>
        {data.profesionalExperiences.map((experience, index) => {
          return (
            <ProfessionalExperience key={index} experience={experience}/>
          );
        })}
      </div>
    );
  }
}
