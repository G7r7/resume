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
                <b>
                  {experience.companyName} - {experience.city}
                </b>{' '}
                - {moment(experience.startDate).format('MM/YYYY')} -{' '}
                {moment(experience.endDate).format('MM/YYYY')}
              </div>
              <div>{experience.jobTitle[config.language]}</div>
              <div>{experience.description[config.language]}</div>
              {experience.projects.map((project) => {
                return (
                  <div key={project.name}>
                    <div>
                      {project.name} - {project.type.name[config.language]}
                    </div>
                    <div>
                      {project.roles.map((role) => {
                        return (
                          <div key={role.name[config.language]}>
                            {role.name[config.language]}
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      {project.technologies.map((technology) => {
                        return (
                          <div key={technology.name}>{technology.name}</div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
