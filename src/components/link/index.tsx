import React from 'react';
import './style.scss';
import { SectionTitle } from '../commons/section-title';

interface Props {
  url: string;
  logo?: string;
  text: string;
}

export class Link extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <SectionTitle logo={this.props.logo ? this.props.logo : undefined} badge={{color:'transparent'}}>
        <a href={this.props.url} target="_blank" rel="noreferrer">
          {this.props.text}
        </a>
      </SectionTitle>
    );
  }
}
