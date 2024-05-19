import React from 'react';
import { Lang } from '../../types/lang';
import { data } from '../../data/data';
import { config } from '../../data/config';
import './style.scss';
import { ProfessionalExperience } from '../professional-experience';
import { SectionTitle } from '../commons/section-title';
import { ReactComponent as WORKLogo } from '../../assets/images/concepts/work.svg';

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
      <div className="box professional-experiences">
        <SectionTitle logo={WORKLogo} badge={{}}>
          {lang.title[config.language]}
        </SectionTitle>
        <div className="vertical-group-container">
          {data.profesionalExperiences.map((experience, index) => {
            return (
              <ProfessionalExperience key={index} experience={experience} />
            );
          })}
        </div>
      </div>
    );
  }
}
