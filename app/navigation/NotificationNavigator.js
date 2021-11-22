import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NotificationScreen from '../screens/NotificationScreen';

const Stack = createStackNavigator();

const NotificationNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Notification" component={NotificationScreen} />
  </Stack.Navigator>
);

export default NotificationNavigator;
