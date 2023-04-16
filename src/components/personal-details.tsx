import React from 'react';
import { config, data } from '..';
import { Lang } from '../types/lang';

type Words = 'firstName' | 'lastName' | 'phone' | 'email';

const lang: Lang<Words> = {
  firstName: {
    en: 'Firstname:',
    fr: 'Prénom :',
  },
  lastName: {
    en: 'Lastname:',
    fr: 'Nom :',
  },
  phone: {
    en: 'Phone:',
    fr: 'Téléphone :',
  },
  email: {
    en: 'Email:',
    fr: 'Email :',
  },
};

export class PersonalDetails extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div>
          {lang.firstName[config.language]} {data.firstName}
        </div>
        <div>
          {lang.lastName[config.language]} {data.lastName}
        </div>
        <div>
          {lang.phone[config.language]} {data.phone}
        </div>
        <div>
          {lang.email[config.language]} {data.email}
        </div>
      </>
    );
  }
}
