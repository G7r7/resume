import { Technology } from '../types/data';
import { ReactComponent as CLogo } from '../assets/images/technologies/c.svg';
import { ReactComponent as PHPLogo } from '../assets/images/technologies/php.svg';
import { ReactComponent as VueLogo } from '../assets/images/technologies/vuejs.svg';
import { ReactComponent as JSLogo } from '../assets/images/technologies/javascript.svg';
import { ReactComponent as MYSQLLogo } from '../assets/images/technologies/mysql.svg';
import { ReactComponent as NodeLogo } from '../assets/images/technologies/nodejs.svg';
import { ReactComponent as PostGreSQLLogo } from '../assets/images/technologies/postgresql.svg';
import { ReactComponent as GitLabLogo } from '../assets/images/technologies/gitlab.svg';
import { ReactComponent as TSLogo } from '../assets/images/technologies/typescript.svg';
import { ReactComponent as K8SLogo } from '../assets/images/technologies/kubernetes.svg';
import { ReactComponent as DockerLogo } from '../assets/images/technologies/docker.svg';
import { ReactComponent as OPENAPILogo } from '../assets/images/technologies/openapi.svg';
import { ReactComponent as HELMLogo } from '../assets/images/technologies/helm.svg';
import { ReactComponent as JESTLogo } from '../assets/images/technologies/jest.svg';
import { ReactComponent as REACTLogo } from '../assets/images/technologies/react.svg';
import { ReactComponent as PODMANLogo } from '../assets/images/technologies/podman.svg';
import { ReactComponent as CSHARPLogo } from '../assets/images/technologies/csharp.svg';
import { ReactComponent as CSS3Logo } from '../assets/images/technologies/css3.svg';
import { ReactComponent as GITLogo } from '../assets/images/technologies/git.svg';
import { ReactComponent as GITHUBLogo } from '../assets/images/technologies/github.svg';
import { ReactComponent as HTML5Logo } from '../assets/images/technologies/html5.svg';
import { ReactComponent as K3SLogo } from '../assets/images/technologies/k3s.svg';
import { ReactComponent as LINUXLogo } from '../assets/images/technologies/linux.svg';
import { ReactComponent as MARKDOWNLogo } from '../assets/images/technologies/markdown.svg';
import { ReactComponent as OPENGLLogo } from '../assets/images/technologies/opengl.svg';
import { ReactComponent as RUSTLogo } from '../assets/images/technologies/rust.svg';
import { ReactComponent as SASSLogo } from '../assets/images/technologies/sass.svg';
import { ReactComponent as SOCKETIOLogo } from '../assets/images/technologies/socketio.svg';
import { ReactComponent as UNITYLogo } from '../assets/images/technologies/unity.svg';
import { ReactComponent as VSCODELogo } from '../assets/images/technologies/vscode.svg';
import { ReactComponent as VRLogo } from '../assets/images/technologies/vr.svg';
import { ReactComponent as CPPLogo } from '../assets/images/technologies/cplusplus.svg';
import { ReactComponent as RASPBERRYPILogo } from '../assets/images/technologies/raspberrypi.svg';
import { ReactComponent as PYTHONLogo } from '../assets/images/technologies/python.svg';
import { ReactComponent as JAVALogo } from '../assets/images/technologies/java.svg';
import { ReactComponent as BASHLogo } from '../assets/images/technologies/bash.svg';
import { ReactComponent as CMAKELogo } from '../assets/images/technologies/cmake.svg';
import { ReactComponent as GOOGLELogo } from '../assets/images/technologies/google.svg';
import {
  DATABASE,
  DEVTOOL,
  LIBRARY,
  OPERATIONALTOOL,
  OTHERTECH,
  PROGRAMMINGLANGUAGE,
  WEBTECH,
} from './technology-category';

export const BASH: Technology = {
  name: 'Bash',
  logo: BASHLogo,
  category: DEVTOOL,
};

export const VSCODE: Technology = {
  name: 'Visual Studio Code',
  logo: VSCODELogo,
  category: DEVTOOL,
};

export const UNITY: Technology = {
  name: 'Unity',
  logo: UNITYLogo,
  category: LIBRARY,
};

export const SOCKETIO: Technology = {
  name: 'Socket.io',
  logo: SOCKETIOLogo,
  category: WEBTECH,
};

export const SASS: Technology = {
  name: 'Sass',
  logo: SASSLogo,
  category: WEBTECH,
};

export const RUST: Technology = {
  name: 'Rust',
  logo: RUSTLogo,
  category: PROGRAMMINGLANGUAGE,
};

export const OPENGL: Technology = {
  name: 'OpenGL',
  logo: OPENGLLogo,
  category: LIBRARY,
};

export const GTEST: Technology = {
  name: 'GoogleTest',
  logo: GOOGLELogo,
  category: LIBRARY,
};

export const CMAKE: Technology = {
  name: 'CMake',
  logo: CMAKELogo,
  category: DEVTOOL,
};

export const MARKDOWN: Technology = {
  name: 'Markdown',
  logo: MARKDOWNLogo,
  category: DEVTOOL,
};

export const LINUX: Technology = {
  name: 'Linux',
  logo: LINUXLogo,
  category: DEVTOOL,
};

export const K3S: Technology = {
  name: 'K3S',
  logo: K3SLogo,
  category: OPERATIONALTOOL,
};

export const HTML5: Technology = {
  name: 'HTML5',
  logo: HTML5Logo,
  category: WEBTECH,
};

export const GITHUB: Technology = {
  name: 'GitHub',
  logo: GITHUBLogo,
  category: DEVTOOL,
};

export const GIT: Technology = {
  name: 'Git',
  logo: GITLogo,
  category: DEVTOOL,
};

export const CSS3: Technology = {
  name: 'CSS3',
  logo: CSS3Logo,
  category: WEBTECH,
};

export const CSHARP: Technology = {
  name: 'C#',
  logo: CSHARPLogo,
  category: PROGRAMMINGLANGUAGE,
};

export const PODMAN: Technology = {
  name: 'Podman',
  logo: PODMANLogo,
  category: OPERATIONALTOOL,
};

export const TS: Technology = {
  name: 'TypeScript',
  logo: TSLogo,
  category: PROGRAMMINGLANGUAGE,
};

export const PHP: Technology = {
  name: 'PHP',
  logo: PHPLogo,
  category: PROGRAMMINGLANGUAGE,
};

export const VUEJS: Technology = {
  name: 'Vue.js',
  logo: VueLogo,
  category: WEBTECH,
};

export const JS: Technology = {
  name: 'JavaScript',
  logo: JSLogo,
  category: PROGRAMMINGLANGUAGE,
};

export const MYSQL: Technology = {
  name: 'MySQL',
  logo: MYSQLLogo,
  category: DATABASE,
};

export const NODE: Technology = {
  name: 'Node.js',
  logo: NodeLogo,
  category: WEBTECH,
};

export const POSTGRES: Technology = {
  name: 'PostgreSQL',
  logo: PostGreSQLLogo,
  category: DATABASE,
};

export const GITLAB: Technology = {
  name: 'GitLab',
  logo: GitLabLogo,
  category: DEVTOOL,
};

export const C: Technology = {
  name: 'C',
  logo: CLogo,
  category: PROGRAMMINGLANGUAGE,
};

export const CPP: Technology = {
  name: 'C++',
  logo: CPPLogo,
  category: PROGRAMMINGLANGUAGE,
};

export const K8S: Technology = {
  name: 'Kubernetes',
  logo: K8SLogo,
  category: OPERATIONALTOOL,
};

export const DOCKER: Technology = {
  name: 'Docker',
  logo: DockerLogo,
  category: OPERATIONALTOOL,
};

export const OPENAPI: Technology = {
  name: 'OpenAPI',
  logo: OPENAPILogo,
  category: WEBTECH,
};

export const JEST: Technology = {
  name: 'Jest',
  logo: JESTLogo,
  category: WEBTECH,
};

export const HELM: Technology = {
  name: 'Helm',
  logo: HELMLogo,
  category: OPERATIONALTOOL,
};

export const REACT: Technology = {
  name: 'React',
  logo: REACTLogo,
  category: WEBTECH,
};

export const VR: Technology = {
  name: 'VR',
  logo: VRLogo,
  category: OTHERTECH,
};

export const RASPBERRYPI: Technology = {
  name: 'Raspberry Pi',
  logo: RASPBERRYPILogo,
  category: OTHERTECH,
};

export const JAVA: Technology = {
  name: 'Java',
  logo: JAVALogo,
  category: PROGRAMMINGLANGUAGE,
};

export const PYTHON: Technology = {
  name: 'Python',
  logo: PYTHONLogo,
  category: PROGRAMMINGLANGUAGE,
};
