import React from 'react';
import { Lang } from '../../types/lang';
import { data } from '../../data/data';
import { config } from '../../data/config';
import './style.scss';
import { SectionTitle } from '../commons/section-title';

type Words = 'title';

const lang: Lang<Words> = {
title: {
    fr: 'Informations complémentaires',
    en: 'Additional Information',
    },
};

export class AddtionalInformations extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="box personal-projects vertical-group-container">
        <SectionTitle badge={{enabled: true}} 
        // logo={PERSONALWORKLogo}
        >
          {lang.title[config.language]}
        </SectionTitle>
        <div className="horizontal-group-container">
          {data.additionalInformations.map((additionalInformation, index) => {
            return <SectionTitle key={index} badge={{color: 'transparent'}}>
                {additionalInformation.name[config.language]}
            </SectionTitle>;
          })}
        </div>
      </div>
    );
  }
}
