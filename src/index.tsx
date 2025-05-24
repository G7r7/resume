import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersonalDetails } from './components/personal-details';
import { ProfessionalExperiences } from './components/professional-experiences';
import { PersonalProjects } from './components/personal-projects';
import { TechnicalSkills } from './components/technical-skills';
import './style.scss';
import { Studies } from './components/studies';
import { AddtionalInformations } from './components/additional-informations';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="cv-container">
      <PersonalDetails />
      <TechnicalSkills />
      <ProfessionalExperiences />
      <Studies />
      <PersonalProjects />
      <AddtionalInformations />
    </div>
  </React.StrictMode>
);
