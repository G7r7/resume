import { languages } from './lang';

/**
 * Data file for the resume generator
 */
export type Data = {
  personalDetails: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
  profesionalExperiences: {
    companyName: string;
    city: string;
    startDate: Date;
    endDate: Date;
    jobTitle: Record<languages, string>;
    description: Record<languages, string>;
  }[];
};
