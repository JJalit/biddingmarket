import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerStyle: { shadowColor: 'transparent' } }}>
    <Stack.Screen name="로그인" component={WelcomeScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
