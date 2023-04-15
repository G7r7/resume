import React from 'react';
import ReactDOM from 'react-dom/client';
import { Config } from './types/config';
import { Data } from './types/data';
import configJson from './config/config.json';
import dataJson from './config/data.json';
import { PersonalDetails } from './components/personal-details';

const config = configJson as Config;
const data = dataJson as Data;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <PersonalDetails />
  </React.StrictMode>
);

export { config, data };
