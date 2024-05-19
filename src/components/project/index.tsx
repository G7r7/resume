import React from 'react';
import { config } from '../../data/config';
import { Project as Proj } from '../../types/data';
import './style.scss';
import { Technologies } from '../technologies';
import { SectionTitle } from '../commons/section-title';

interface Props {
  project: Proj;
}

export class Project extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div key={this.props.project.name} className="box project">
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <SectionTitle badge={{ color: 3 }} size={4}>
            {this.props.project.name}
          </SectionTitle>
          <SectionTitle
            badge={{ color: this.props.project.type.color }}
            size={4}
          >
            {this.props.project.type.name[config.language]}
          </SectionTitle>{' '}
          <Technologies technologies={this.props.project.technologies} />
        </div>
        <div>{this.props.project.description[config.language]}</div>
        <div className="horizontal-group-container">
          {this.props.project.roles.map((role) => {
            return (
              <div key={role.name[config.language]}>
                {role.name[config.language]}
              </div>
            );
          })}
        </div>
        {this.props.project.tasks.map((task, index) => {
          return <div key={index}>{'• ' + task[config.language]}</div>;
        })}
      </div>
    );
  }
}
