import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 
    AccountScreen, 
    CartScreen, 
    HomeScreen, 
    OrderScreen 
} from './screens'; 
import { SCREEN } from './constant/screen.constant'; 
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Screen } from './types/screen.types';
import { Icon } from './components';
import { TEXT, THEME } from './constant/color.constant';

const Tab = createBottomTabNavigator();

const navIconSettings = (route: RouteProp<ParamListBase, string>, focused: boolean) => { 
  const iconName = SCREEN[route.name as Screen].navigationIcon as string;

  const color = focused ? THEME.main : '#6a737c';

  return <Icon name={iconName} size={22} color={color}/>;
}

const AppNavigation = () => (
    <Tab.Navigator
      initialRouteName={Screen.Home}
      screenOptions={({ route }) => ({
          tabBarIcon: ({focused}) => navIconSettings(route, focused),
          tabBarActiveTintColor: THEME.main,
          tabBarInactiveTintColor: TEXT.dark,
          headerShown: false
      })}
        >
      <Tab.Screen name={Screen.Home} component={HomeScreen} />
      <Tab.Screen name={Screen.Order} component={OrderScreen} />
      <Tab.Screen name={Screen.Cart} component={CartScreen} /> 
      <Tab.Screen name={Screen.Account} component={AccountScreen} />
  </Tab.Navigator>
);

export default AppNavigation;