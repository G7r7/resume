import { Component } from 'react';
import React from 'react';
import { config } from '../../data/config';
import { Lang } from '../../types/lang';
import './style.scss';
import { data } from '../../data/data';
import { SectionTitle } from '../commons/section-title';
import { ReactComponent as TOOLSlogo } from '../../assets/images/concepts/school.svg';
import { Study } from '../study';

type Words = 'title';

const lang: Lang<Words> = {
  title: {
    en: 'Studies',
    fr: 'Études',
  },
};

export class Studies extends Component {
  render(): React.ReactNode {
    return (
      <div className="box vertical-group-container">
        <SectionTitle badge={{}} logo={TOOLSlogo}>
          {lang.title[config.language]}
        </SectionTitle>
        {data.studies.map((study, index) => {
          return <Study key={index} study={study} />;
        })}
      </div>
    );
  }
}
