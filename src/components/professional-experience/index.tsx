import React from 'react';
import { config } from '../../data/config';
import { ProfessionalExperience as Exp } from '../../types/data';
import moment from 'moment';
import './style.scss';
import { Project } from '../project';
import { SectionTitle } from '../commons/section-title';
import { Lang } from '../../types/lang';
import { Link } from '../link';

type Words = 'years' | 'months' | 'today';

const lang: Lang<Words> = {
  years: {
    en: 'years',
    fr: 'ans',
  },
  months: {
    en: 'months',
    fr: 'mois',
  },
  today: {
    en: 'today',
    fr: 'à ce jour'
  }
};

interface Props {
  experience: Exp;
}

export class ProfessionalExperience extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  humanDateDiff(start: Date, end: Date | undefined): string {
    if (!end) {
      end = new Date();
    }

    const startMoment = moment(start);
    const endMoment = moment(end);

    const years = endMoment.diff(startMoment, 'year');
    startMoment.add(years, 'years');

    const months = endMoment.diff(startMoment, 'months');
    startMoment.add(months, 'months');

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
          <SectionTitle logo={this.props.experience.logo}  badge={{enabled: true}}>
            {this.props.experience.companyName}
          </SectionTitle>
          <SectionTitle  badge={{enabled: true}}>
            {moment(this.props.experience.startDate).format('MM/YYYY')} →{' '}
            {this.props.experience
              .endDate ? moment(this.props.experience.endDate)
              .format('MM/YYYY') : lang.today[config.language]}
            {' ('}
            {this.humanDateDiff(
              this.props.experience.startDate,
              this.props.experience.endDate
            )}
            {')'}
          </SectionTitle>
          { this.props.experience.companyWebsite ? <Link url={this.props.experience.companyWebsite} text={this.props.experience.companyWebsite} /> : null }
        </div>
        <div>{this.props.experience.jobTitle[config.language]}</div>
        <div><i>{this.props.experience.description[config.language]}</i></div>
        {this.props.experience.projects.map((project, index) => {
          return <Project key={index} project={project} />;
        })}
      </div>
    );
  }
}
