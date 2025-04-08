import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BOTTOM_TABS} from '../constants/bottomTabs';
import {TabBarIcon} from './components';
import {TabBarIconProps} from './components/TabBarIcon/TabBarIcon.types';
import {bottomTabScreenComponentConfig} from './BottomTabNavigator.config';

const rendertabBarIcon = ({iconProps, name}: TabBarIconProps) => (
  <TabBarIcon name={name} iconProps={iconProps} />
);

export const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();

  const renderBottomTabScreen = (name: TabBarIconProps['name']) => {
    return (
      <BottomTab.Screen
        key={name}
        options={{
          tabBarIcon: iconProps => rendertabBarIcon({iconProps, name}),
        }}
        name={name}
        component={bottomTabScreenComponentConfig[name]}
      />
    );
  };

  return (
    <BottomTab.Navigator>
      {BOTTOM_TABS.map(name => renderBottomTabScreen(name))}
    </BottomTab.Navigator>
  );
};
