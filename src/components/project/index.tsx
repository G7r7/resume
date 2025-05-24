import React from 'react';
import { config } from '../../data/config';
import { Project as Proj } from '../../types/data';
import './style.scss';
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
      <div
        key={typeof this.props.project.name === 'string' ? this.props.project.name : this.props.project.name[config.language]}
        className="box project vertical-group-container"
      >
        <div className="horizontal-group-container">
          <SectionTitle badge={{enabled: true, color: '#FFDCDC'}}>
            {typeof this.props.project.name === 'string' ? this.props.project.name : this.props.project.name[config.language]}
          </SectionTitle>
          {this.props.project.type.map((t, index) => (
            <SectionTitle badge={{enabled: true, color: '#FFE5B4'}} key={index}>
              {t.name[config.language]}
            </SectionTitle>
          ))}
          {this.props.project.technologies.map((technology, index) => {
            return (
              <SectionTitle badge={{enabled: true, color: '#FFF0C9'}} key={index}>
                <Technology technology={technology} key={index} />
              </SectionTitle>
            );
          })}
        </div>
        { this.props.project.description[config.language] ?
          <div>
            <i>{this.props.project.description[config.language]}</i>
          </div> : null
        }
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
              return <div style={{color: "#5F5F5F"}} key={index}>{'• ' + task[config.language]}</div>;
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
