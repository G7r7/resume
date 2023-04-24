import React from 'react';
import { Lang } from '../../types/lang';
import { data } from '../../config/data';
import { config } from '../../config/config';
import moment from 'moment';
import './style.scss';

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
        {data.profesionalExperiences.map((experience) => {
          return (
            <div key={experience.companyName}>
              <div>
                {experience.companyName} - {experience.city}
              </div>
              <div>{experience.jobTitle[config.language]}</div>
              <div>
                {moment(experience.startDate).format('MM/YYYY')} -{' '}
                {moment(experience.endDate).format('MM/YYYY')}
              </div>
              <div>{experience.description[config.language]}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
