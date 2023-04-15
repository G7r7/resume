import React from 'react';
import { config, data } from '..';
import { Lang } from '../types/lang';

type Words = 'firstName' | 'lastName';

const lang: Lang<Words> = {
  firstName: {
    en: 'Firstname:',
    fr: 'Prénom :',
  },
  lastName: {
    en: 'Lastname:',
    fr: 'Nom :',
  },
};

export class PersonalDetails extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h1>
          {lang.firstName[config.language]} {data.firstName}
        </h1>
        <h1>
          {lang.lastName[config.language]} {data.lastName}
        </h1>
      </>
    );
  }
}
