import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {iconNameConfig} from './TabBarIcon.config';
import {TabBarIconProps} from './TabBarIcon.types';

export const TabBarIcon = ({name, iconProps}: TabBarIconProps) => {
  return <MaterialCommunityIcons name={iconNameConfig[name]} {...iconProps} />;
};
