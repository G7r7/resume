import React from 'react';
import { config } from '../../config/config';
import { Project as Proj } from '../../types/data'
import './style.scss';
import { Technology } from '../technology';

interface Props {
  project: Proj
}

export class Project extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div key={this.props.project.name} className='project' >
        <div>
          {this.props.project.name} - {this.props.project.type.name[config.language]}
        </div>
        <div>{this.props.project.description[config.language]}</div>
        <div>
          {this.props.project.roles.map((role) => {
            return (
              <div key={role.name[config.language]}>
                {role.name[config.language]}
              </div>
            );
          })}
        </div>
        {this.props.project.tasks.map((task, index) => {
          return <div key={index}>{task[config.language]}</div>;
        })}
        <div className='technologies'>
          {this.props.project.technologies.map((technology, index) => {
            return <Technology technology={technology} key={index} />;
          })}
        </div>
      </div>
    );
  }
}
