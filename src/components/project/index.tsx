import React from 'react';
import { config } from '../../data/config';
import { Project as Proj } from '../../types/data';
import './style.scss';
import { Technologies } from '../technologies';
import { SectionTitle } from '../commons/section-title';
import { Link } from '../link';
import { SOURCECODE, WEB } from '../../config/concepts';
import { Technology } from '../technology';

interface Props {
  project: Proj;
}

export class Project extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div key={this.props.project.name} className="box project vertical-group-container">
        <div className='horizontal-group-container'>
          <SectionTitle badge={{ color: 3 }} size={4}>
            {this.props.project.name}
          </SectionTitle>
          <SectionTitle
            badge={{ color: this.props.project.type.color }}
            size={4}
          >
            {this.props.project.type.name[config.language]}
          </SectionTitle>{' '}
          {this.props.project.technologies.map((technology, index) => {
            return (
              <SectionTitle key={index} size={4} badge={{color: 10}}>
                <Technology technology={technology} key={index} />
              </SectionTitle>
            );
          })}
        </div>
        <div>{this.props.project.description[config.language]}</div>
        {/* {(() => {
          if (this.props.project.roles) { return (
            <div className="horizontal-group-container">
              {this.props.project.roles.map((role) => {
                return (
                  <div key={role.name[config.language]}>
                    {role.name[config.language]}
                  </div>
                );
              })}
            </div>)
          }
        })()} */}
        {this.props.project.tasks
          ? this.props.project.tasks.map((task, index) => {
              return <div key={index}>{'• ' + task[config.language]}</div>;
            })
          : null}
        {(() => {
          if (this.props.project.sourceCode) {
            return (
              <div>
                <Link
                  logo={SOURCECODE.logo}
                  url={this.props.project.sourceCode}
                  text={this.props.project.sourceCode}
                />
              </div>
            );
          }
        })()}
        {(() => {
          if (this.props.project.website) {
            return (
              <div>
                <Link
                  logo={WEB.logo}
                  url={this.props.project.website}
                  text={this.props.project.website}
                />
              </div>
            );
          }
        })()}
      </div>
    );
  }
}
