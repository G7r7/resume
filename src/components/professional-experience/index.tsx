import React from 'react';
import { config } from '../../data/config';
import { ProfessionalExperience as Exp } from '../../types/data';
import moment from 'moment';
import './style.scss';
import { Project } from '../project';
import { SectionTitle } from '../commons/section-title';
import { Lang } from '../../types/lang';

type Words = 'years' | 'months';

const lang: Lang<Words> = {
  years: {
    en: 'years',
    fr: 'ans',
  },
  months: {
    en: 'months',
    fr: 'mois',
  },
};

interface Props {
  experience: Exp;
}

export class ProfessionalExperience extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  humanDateDiff(date1: Date, date2: Date): string {
    const moment1 = moment(date1);
    const moment2 = moment(date2);

    const years = moment1.diff(moment2, 'year');
    moment2.add(years, 'years');

    const months = moment1.diff(moment2, 'months');
    moment2.add(months, 'months');

    return `${years.toString()} ${lang.years[config.language]}${ 
      months > 0 ? ` ${months.toString()} ${lang.months[config.language]}` : ''
    }`;
  }

  render(): React.ReactNode {
    return (
      <div
        key={this.props.experience.companyName}
        className="box professional-experience vertical-group-container"
      >
        <div className="horizontal-group-container">
          <SectionTitle logo={this.props.experience.logo} badge={{}} size={4}>
            {this.props.experience.companyName}
          </SectionTitle>
          <SectionTitle badge={{}} size={4}>
            {moment(this.props.experience.startDate).format('MM/YYYY')} →{' '}
            {moment(this.props.experience.endDate).format('MM/YYYY')}
            {' ('}
            {this.humanDateDiff(
              this.props.experience.endDate,
              this.props.experience.startDate
            )}
            {')'}
          </SectionTitle>
        </div>
        <div>{this.props.experience.jobTitle[config.language]}</div>
        <div>{this.props.experience.description[config.language]}</div>
        {this.props.experience.projects.map((project, index) => {
          return <Project key={index} project={project} />;
        })}
      </div>
    );
  }
}
