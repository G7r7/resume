import React from 'react';
import './style.scss';

interface Props {
  url: string;
  logo?: string;
  text: string;
}

export class Link extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div className="link">
        {this.props.logo ? <img src={this.props.logo} className="logo"/> : ''}
        <a href={this.props.url} target="_blank" rel="noreferrer">
          {this.props.text}
        </a>
      </div>
    );
  }
}
