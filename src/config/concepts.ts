import { Concept } from '../types/data';
import WEBLogo from '../assets/images/concepts/web.svg';
import SOURCECODELogo from '../assets/images/concepts/sourcecode.svg';
import WORKLogo from '../assets/images/concepts/work.svg';

export const WEB: Concept = {
  name: {
    en: 'Web',
    fr: 'Web',
  },
  logo: WEBLogo,
};

export const SOURCECODE: Concept = {
  name: {
    en: 'Source Code',
    fr: 'Code source',
  },
  logo: SOURCECODELogo,
};

export const WORK: Concept = {
  name: {
    en: 'Work',
    fr: 'Travail',
  },
  logo: WORKLogo,
};
