import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AccountScreen, HomeScreen} from '../screens';

export const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
};
