import React from 'react';
import { Lang } from '../../types/lang';
import { data } from '../../config/data';
import { config } from '../../config/config';
import './style.scss';

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
      <div className="personal-projects">
        <h2>{lang.title[config.language]}</h2>
      </div>
    );
  }
}
