import './style.scss';
import React, { PropsWithChildren } from 'react';
import { ReactComponentLike } from 'prop-types';
import { ColorIndex } from '../../../types/colors';
import { SizeIndex } from '../../../types/sizes';

interface Props extends PropsWithChildren {
  logo?: ReactComponentLike;
  badge?: {
    color?: ColorIndex;
  };
  size?: SizeIndex;
}

export class SectionTitle extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div
        className={`section-title-${this.props.size ? this.props.size : 5} ${
          this.props.logo ? 'section-logo' : ``
        }  ${this.props.badge ? `section-title-badge` : ``} ${
          this.props.badge && this.props.badge.color
            ? `section-title-badge-color-${this.props.badge.color}`
            : null
        }`}
      >
        {this.props.logo ? <this.props.logo /> : null}
        {this.props.children}
      </div>
    );
  }
}
