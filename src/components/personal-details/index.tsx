import React from 'react';
import { data } from '../../data/data';
import { config } from '../../data/config';
import { Lang } from '../../types/lang';
import '../../style.scss';
import './style.scss';
import { Link } from '../link';
import { SectionTitle } from '../commons/section-title';
// import NAMELogo from '../../assets/images/concepts/name.svg';
import LOCATIONLogo from '../../assets/images/concepts/location.svg';
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
        <SectionTitle
        // logo={NAMELogo}
        badge={{enabled: true}}> 
        {/* #FFB3AC */}
          {lang.title[config.language]}
        </SectionTitle>
        <div
          className="horizontal-group-container"
          style={{ justifyContent: 'space-between' }}
        >
          <div className="vertical-group-container" style={{width: "85%"}}>
            <div style={{whiteSpace: "break-spaces"}}>{data.personalDetails.text[config.language]}</div>
            <div>
              {data.personalDetails.firstName}{' '}
              {new String(data.personalDetails.lastName).toUpperCase()}
              {' - '}
              {data.personalDetails.phone[config.language]}
              {' - '}
              <a
                href={'mailto:' + data.personalDetails.email}
                target="_blank"
                rel="noreferrer"
              >
                {data.personalDetails.email}
              </a>
            </div>
            { data.personalDetails.location ? 
              <SectionTitle logo={LOCATIONLogo} badge={{enabled: false, color: 'transparent'}} >{data.personalDetails.location[config.language]}</SectionTitle> : null
            }
            <div>
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <img className="details-photo" src={PHOTO} />
          </div>
        </div>
      </div>
    );
  }
}
