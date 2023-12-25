import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersonalDetails } from './components/personal-details';
import { ProfessionalExperiences } from './components/professional-experiences';
import { PersonalProjects } from './components/personal-projects';
import { TechnicalSkills } from './components/technical-skills';
import './style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="vertical-group-container">
      <PersonalDetails />
      <ProfessionalExperiences />
      <PersonalProjects />
      <TechnicalSkills />
    </div>
  </React.StrictMode>
);
