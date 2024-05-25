import React from 'react';
import { config } from '../../data/config';
import { Study as Stud } from '../../types/data';
import './style.scss';
import { SectionTitle } from '../commons/section-title';
import DIPLOMALogo from '../../assets/images/concepts/diploma-2.svg';
import moment from 'moment';

interface Props {
  study: Stud;
}

export class Study extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div
        key={this.props.study.diploma.name[config.language]}
        className="box study"
      >
        <div className="horizontal-group-container">
          <SectionTitle logo={DIPLOMALogo} size={4}>
            {this.props.study.diploma.name[config.language]}
          </SectionTitle>
          <SectionTitle badge={{}} size={4}>
            {moment(this.props.study.startDate).format('YYYY')} -{' '}
            {moment(this.props.study.endDate).format('YYYY')}
          </SectionTitle>
          <SectionTitle badge={{}} size={4}>
            {this.props.study.school.name[config.language]}
          </SectionTitle>
          <SectionTitle badge={{}} size={4}>
            {this.props.study.school.city}
          </SectionTitle>
        </div>
      </div>
    );
  }
}
