import React from 'react';
import './style.scss';

interface Props {
  url: string;
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
}

export class Link extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div className="link">
        <this.props.logo className="logo" />{' '}
        <a href={this.props.url} target="_blank" rel="noreferrer">
          {this.props.url}
        </a>
      </div>
    );
  }
}
