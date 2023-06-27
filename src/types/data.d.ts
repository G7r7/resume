import { ReactComponentElement } from 'react';
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
  profesionalExperiences: ProfessionalExperience[];
  personalProjects: PersonalProject[];
};

export type ProfessionalExperience = {
  companyName: string;
  city: string;
  startDate: Date;
  endDate: Date;
  jobTitle: Record<languages, string>;
  description: Record<languages, string>;
  projects: Project[];
};

type Project = {
  name: string;
  description: Record<languages, string>;
  type: ProjectType;
  roles: Role[];
  tasks: Record<languages, string>[];
  technologies: Technology[];
};

type PersonalProject = {
  name: string;
  description: Record<languages, string>;
  type: ProjectType;
  technologies: Technology[];
  website?: string;
  sourceCode?: string;
};

type Technology = {
  name: string;
  logo: ReactComponentElement;
};

export type Concept = {
  name: Record<languages, string>;
  logo: ReactComponentElement;
};

type Role = {
  name: Record<languages, string>;
};

type ProjectType = {
  name: Record<languages, string>;
};
