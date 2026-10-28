import businessRulesTest from './BusinessRules.test';
import appStateTest from './AppState.test';

export default function testsuite() {
  businessRulesTest();
  appStateTest();
}
