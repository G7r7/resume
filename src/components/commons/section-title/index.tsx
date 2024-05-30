import './style.scss';
import React, { CSSProperties, PropsWithChildren } from 'react';
import { ColorIndex } from '../../../types/colors';
import { SizeIndex } from '../../../types/sizes';

interface Props extends PropsWithChildren {
  logo?: string;
  badge?: {
    color?: ColorIndex;
  };
  size?: SizeIndex;
  fitContent?: boolean;
  centerText?: boolean;
}

export class SectionTitle extends React.Component<Props> {
  // Construct the style object based on props
  style: CSSProperties = {
    ...(this.props.fitContent ? { width: 'fit-content' } : {}),
    ...(this.props.centerText ? { textAlign: 'center', display: "inline-block" } : {}),
  };

  render(): React.ReactNode {
    return (
      <div
        style={this.style}
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
