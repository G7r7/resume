import './style.scss';
import React, { PropsWithChildren } from 'react';
import { ColorIndex } from '../../../types/colors';
import { SizeIndex } from '../../../types/sizes';

interface Props extends PropsWithChildren {
  logo?: string;
  badge?: {
    color?: ColorIndex;
  };
  size?: SizeIndex;
  fitContent?: boolean;
}

export class SectionTitle extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div
        style={this.props.fitContent ? { width: 'fit-content' } : {}}
        className={`section-title-${this.props.size ? this.props.size : 5} ${
          this.props.logo ? 'section-logo' : ``
        }  ${this.props.badge ? `section-title-badge` : ``} ${
          this.props.badge && this.props.badge.color
            ? `section-title-badge-color-${this.props.badge.color}`
          : 'section-title-badge-color-11'
        }`}
      >
        {this.props.logo ? <img src={this.props.logo} /> : null}
        {this.props.children}
      </div>
    );
  }
}
