import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigator} from './BottomTabNavigator';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
