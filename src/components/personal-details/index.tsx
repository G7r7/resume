import React from 'react';
import { data } from '../../data/data';
import { config } from '../../data/config';
import { Lang } from '../../types/lang';
import '../../style.scss';
import './style.scss';
import { Link } from '../link';
import { SectionTitle } from '../commons/section-title';
import { ReactComponent as NAMELogo } from '../../assets/images/concepts/name.svg';
import PHOTO from '../../data/photo.jpg';

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
      <div className="box personal-details vertical-group-container">
        <SectionTitle logo={NAMELogo} badge={{}}>
          {lang.title[config.language]}
        </SectionTitle>
        <div
          className="horizontal-group-container"
          style={{ justifyContent: 'space-between' }}
        >
          <div className="vertical-group-container">
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
              {lang.email[config.language]}{' '}
              <Link
                url={'mailto:' + data.personalDetails.email}
                text={data.personalDetails.email}
              />
            </div>
            {data.personalDetails.socials.map((social, index) => {
              return (
                <Link
                  logo={social.logo}
                  key={index}
                  text={social.text}
                  url={social.link}
                />
              );
            })}
          </div>
          <div></div>
          <img className="details-photo" src={PHOTO} />
        </div>
      </div>
    );
  }
}
