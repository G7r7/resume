import './style.scss';
import React, { CSSProperties, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  logo?: string;
  badge?: {
    enabled?: boolean;
    color?: string;
  };
  fitContent?: boolean;
  centerText?: boolean;
}

export class SectionTitle extends React.Component<Props> {
  // Construct the style object based on props
  style: CSSProperties = {
    ...(this.props.fitContent ? { width: 'fit-content' } : {}),
    ...(this.props.centerText ? { textAlign: 'center', display: "inline-block" } : {}),
    ...(this.props.badge && this.props.badge.color ? 
      { background: this.props.badge.color }: {}
    )
  };

  render(): React.ReactNode {
    return (
      <div
        style={this.style}
        className={`section-title ${
          this.props.logo ? 'section-logo' : ``
        }  ${this.props.badge && this.props.badge.enabled ? `section-title-badge` : ``}`}
      >
        {this.props.logo ? <img src={this.props.logo} /> : null}
        {this.props.children}
      </div>
    );
  }
}
