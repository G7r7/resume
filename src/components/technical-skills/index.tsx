import { Component } from 'react';
import React from 'react';
import { config } from '../../data/config';
import { Lang } from '../../types/lang';
import './style.scss';
import { data } from '../../data/data';
import { TechnicalSkill } from '../technical-skill';
import { SectionTitle } from '../commons/section-title';
import TOOLSlogo from '../../assets/images/concepts/tools.svg';
import {
  DEVTOOL,
  FRAMEWORK,
  OPERATIONALTOOL,
  OTHERTECH,
  PROGRAMMINGLANGUAGE,
  WEBTECH,
} from '../../config/technology-category';
import { TechnologyCategory } from '../../types/data';

type Words = 'title';

const lang: Lang<Words> = {
  title: {
    en: 'Technical Skills',
    fr: 'Compétences techniques',
  },
};

export class TechnicalSkills extends Component {
  render(): React.ReactNode {
    return (
      <div className="box vertical-group-container">
        <SectionTitle badge={{}} logo={TOOLSlogo}>
          {lang.title[config.language]}
        </SectionTitle>
        <div className="technical-skills horizontal-group-container">
          <TechnicalSkillCategory category={PROGRAMMINGLANGUAGE} />
          <TechnicalSkillCategory category={WEBTECH} />
          <TechnicalSkillCategory category={DEVTOOL} />
          <TechnicalSkillCategory category={OPERATIONALTOOL} />
          <TechnicalSkillCategory category={FRAMEWORK} />
          <TechnicalSkillCategory category={OTHERTECH} />
        </div>
      </div>
    );
  }
}

interface TechnicalSkillCategoryProps {
  category: TechnologyCategory;
}

class TechnicalSkillCategory extends Component<TechnicalSkillCategoryProps> {
  render(): React.ReactNode {
    return (() => {
      const programmingLanguages = data.technicalSkills.filter(
        (skill) => skill.technology.category == this.props.category
      );
      if (programmingLanguages.length > 0) {
        return (
          <div className="vertical-group-container">
            <SectionTitle size={4} badge={{}}>
              {this.props.category.name[config.language]}
            </SectionTitle>
            <div>
              {programmingLanguages
                .sort((sk1, sk2) => (sk1.level < sk2.level ? 1 : -1))
                .map((technicalSkill, index) => {
                  return (
                    <TechnicalSkill
                      key={index}
                      technicalSkill={technicalSkill}
                    />
                  );
                })}
            </div>
          </div>
        );
      }
    })();
  }
}
