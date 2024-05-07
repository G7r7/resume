import React from 'react';
import { config } from '../../data/config';
import { Project as Proj } from '../../types/data';
import './style.scss';
import { Technologies } from '../technologies';

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
        <div>
          {this.props.project.name} -{' '}
          {this.props.project.type.name[config.language]}
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
        <Technologies technologies={this.props.project.technologies} />
      </div>
    );
  }
}
