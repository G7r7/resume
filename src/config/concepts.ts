import { Concept } from '../types/data';
import { ReactComponent as WEBLogo } from '../assets/images/concepts/web.svg';
import { ReactComponent as SOURCECODELogo } from '../assets/images/concepts/sourcecode.svg';

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
