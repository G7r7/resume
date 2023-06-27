import React from 'react';
import './style.scss';
import { Technology as Tech } from '../../types/data';
import { Technology } from '../technology';

interface Props {
  technologies: Tech[];
}

export class Technologies extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div className="technologies">
        {this.props.technologies.map((technology, index) => {
          return <Technology technology={technology} key={index} />;
        })}
      </div>
    );
  }
}
