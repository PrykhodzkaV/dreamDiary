import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../../../constants';

export interface TabBarIconProps {
  name: (typeof ROUTES)[keyof typeof ROUTES];
  iconProps: Parameters<
    NonNullable<BottomTabNavigationOptions['tabBarIcon']>
  >[0];
}
