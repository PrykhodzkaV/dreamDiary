import {ROUTES} from '../constants';
import {AccountScreen, HomeScreen} from '../screens';

export const bottomTabScreenComponentConfig: Record<
  (typeof ROUTES)[keyof typeof ROUTES],
  () => React.JSX.Element
> = {
  [ROUTES.HOME]: HomeScreen,
  [ROUTES.ACCOUNT]: AccountScreen,
};
