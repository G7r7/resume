import React from 'react';
import { Lang } from '../../types/lang';
import { data } from '../../data/data';
import { config } from '../../data/config';
import './style.scss';
import { PersonalProject } from '../personal-project';
import { ReactComponent as PERSONALWORKLogo } from '../../assets/images/concepts/personal-work.svg';
import { SectionTitle } from '../commons/section-title';

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
        <SectionTitle badge={{}} logo={PERSONALWORKLogo}>
          {lang.title[config.language]}
        </SectionTitle>
        <div className="vertical-group-container">
          {data.personalProjects.map((project, index) => {
            return <PersonalProject key={index} project={project} />;
          })}
        </div>
      </div>
    );
  }
}
