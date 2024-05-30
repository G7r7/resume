import React from 'react';
import { TechnicalSkill as TechSkill } from '../../types/data';
import './style.scss';
import { Technology } from '../technology';
import { config } from '../../data/config';

interface Props {
  technicalSkill: TechSkill;
}

export class TechnicalSkill extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div className="technical-skill">
        {config.showTechnicalSkillLevel ? (() => {
          let stars = '';
          for (let index = 0; index < 5; index++) {
            if (index < this.props.technicalSkill.level) {
              stars += '★';
            } else {
              stars += '☆';
            }
          }
          return <div>{stars}</div>;
        })() : ''}
        <Technology technology={this.props.technicalSkill.technology} />
      </div>
    );
  }
}
