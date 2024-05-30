import { ReactComponentElement } from 'react';
import { languages } from './lang';
import { ColorIndex } from './colors';

/**
 * Data file for the resume generator
 */
export type Data = {
  personalDetails: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    socials: Social[];
    text: Record<languages, string>;
  };
  professionalExperiences: ProfessionalExperience[];
  personalProjects: Project[];
  technicalSkills: TechnicalSkill[];
  studies: Study[];
};

export type Social = {
  logo: ReactComponentElement;
  name: string;
  link: string;
  text: string;
};

export type Study = {
  school: {
    name: Record<languages, string>;
    city: string;
  };
  diploma: {
    name: Record<languages, string>;
  };
  startDate: Date;
  endDate: Date;
};

export type ProfessionalExperience = {
  logo?: ReactComponentElement;
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
  type: ProjectType[];
  roles: Role[];
  tasks?: Record<languages, string>[];
  technologies: Technology[];
  website?: string;
  sourceCode?: string;
};

type TechnologyCategory = {
  name: Record<languages, string>;
};

type Technology = {
  name: string;
  logo: ReactComponentElement;
  category: TechnologyCategory;
};

export type Concept = {
  name: Record<languages, string>;
  logo: ReactComponentElement;
};

type TechnicalSkill = {
  technology: Technology;
  level: Level;
};

type Level = 0 | 1 | 2 | 3 | 4 | 5;

type Role = {
  name: Record<languages, string>;
};

type ProjectType = {
  name: Record<languages, string>;
  color?: ColorIndex;
};
