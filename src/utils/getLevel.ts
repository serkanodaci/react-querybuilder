import { Rule, RuleGroup } from '../types';
import { isRuleGroup } from './index';

const getLevel = (id: any, index: number, query: Rule|RuleGroup) => {
  let foundAtIndex = -1;
  if (query.id === id) {
    foundAtIndex = index;
  } else if (isRuleGroup(query)) {
    query.rules.forEach((rule) => {
      if (foundAtIndex === -1) {
        let indexForRule = index;
        if (isRuleGroup(rule)) indexForRule++;
        foundAtIndex = getLevel(id, indexForRule, rule);
      }
    });
  }
  return foundAtIndex;
};

export default getLevel;