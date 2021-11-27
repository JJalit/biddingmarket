import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LandingNavigator from './LandingNavigator';
import NotificationNavigator from './NotificationNavigator';
import UploadNavigator from './UploadNavigator';
import FavoriteNavigator from './FavoriteNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6324cc',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="홈"
        component={LandingNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => <Icon name={focused ? 'home' : 'home-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="알림"
        component={NotificationNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => <Icon name={focused ? 'bell' : 'bell-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="등록"
        component={UploadNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => <Icon name={focused ? 'plus-box' : 'plus-box-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="북마크"
        component={FavoriteNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => <Icon name={focused ? 'star' : 'star-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="설정"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => <Icon name={focused ? 'account' : 'account-outline'} color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
