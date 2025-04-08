import {ROUTES} from '../../../constants';

export const iconNameConfig: Record<
  (typeof ROUTES)[keyof typeof ROUTES],
  string
> = {
  [ROUTES.HOME]: 'home',
  [ROUTES.ACCOUNT]: 'account',
};
