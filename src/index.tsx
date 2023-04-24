import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersonalDetails } from './components/personal-details';
import { ProfessionalExperiences } from './components/professional-experiences';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <PersonalDetails />
    <ProfessionalExperiences />
  </React.StrictMode>
);
