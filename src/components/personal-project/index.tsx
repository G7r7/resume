import React from 'react';
import { config } from '../../config/config';
import { PersonalProject as PersonalProj } from '../../types/data';
import './style.scss';
import { Technologies } from '../technologies';
import { Link } from '../link';
import { SOURCECODE, WEB } from '../../config/concepts';

interface Props {
  project: PersonalProj;
}

export class PersonalProject extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div className="box personal-project">
        <div>
          {this.props.project.name} -{' '}
          {this.props.project.type.name[config.language]}
        </div>
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
        <div>{this.props.project.description[config.language]}</div>
        <Technologies technologies={this.props.project.technologies} />
      </div>
    );
  }
}
