import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersonalDetails } from './components/personal-details';
import { parseConfig, parseData } from './parser';
import { ProfessionalExperiences } from './components/professional-experiences';

export const config = parseConfig();
export const data = parseData();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <PersonalDetails />
    <ProfessionalExperiences />
  </React.StrictMode>
);
