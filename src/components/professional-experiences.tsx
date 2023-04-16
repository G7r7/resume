import React from 'react';
import { Lang } from '../types/lang';
import { config } from '..';

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
      <div>
        <h1>{lang.title[config.language]}</h1>
      </div>
    );
  }
}
