import React from 'react';
// import { Lang } from '../../types/lang';
// import { data } from '../../config/data';
import { config } from '../../data/config';
import { ProfessionalExperience as Exp } from '../../types/data';
import moment from 'moment';
import './style.scss';
import { Project } from '../project';

// type Words = 'title';

// const lang: Lang<Words> = {
//   title: {
//     en: 'Professional Experience',
//     fr: 'Expérience professionelle',
//   },
// };

interface Props {
  experience: Exp;
}

export class ProfessionalExperience extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div
        key={this.props.experience.companyName}
        className="box professional-experience vertical-group-container"
      >
        <div>
          <b>
            {this.props.experience.companyName} - {this.props.experience.city}
          </b>{' '}
          - {moment(this.props.experience.startDate).format('MM/YYYY')} -{' '}
          {moment(this.props.experience.endDate).format('MM/YYYY')}
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
