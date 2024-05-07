import React from 'react';
import { Lang } from '../../types/lang';
import { data } from '../../data/data';
import { config } from '../../data/config';
import './style.scss';
import { PersonalProject } from '../personal-project';

type Words = 'title';

const lang: Lang<Words> = {
  title: {
    en: 'Personal projects',
    fr: 'Projets personnels',
  },
};

export class PersonalProjects extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="box personal-projects">
        <div className="section-title">{lang.title[config.language]}</div>
        <div className="vertical-group-container">
          {data.personalProjects.map((project, index) => {
            return <PersonalProject key={index} project={project} />;
          })}
        </div>
      </div>
    );
  }
}
