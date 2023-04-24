import React from 'react';
import { data } from '../../config/data';
import { config } from '../../config/config';
import { Lang } from '../../types/lang';
import './style.scss';

type Words = 'title' | 'firstName' | 'lastName' | 'phone' | 'email';

const lang: Lang<Words> = {
  title: {
    en: 'Personal Details',
    fr: 'Coordonnées',
  },
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
      <div className="personal-details">
        <h2>{lang.title[config.language]}</h2>
        <div>
          {lang.firstName[config.language]} {data.personalDetails.firstName}
        </div>
        <div>
          {lang.lastName[config.language]} {data.personalDetails.lastName}
        </div>
        <div>
          {lang.phone[config.language]} {data.personalDetails.phone}
        </div>
        <div>
          {lang.email[config.language]} {data.personalDetails.email}
        </div>
      </div>
    );
  }
}
