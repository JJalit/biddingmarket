import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Find, Register, Welcome} from '../screens/Auth';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTitle: '',
      headerTintColor: '#7E7D7D',
    }}>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Find" component={Find} />
  </Stack.Navigator>
);

export default AuthNavigator;
