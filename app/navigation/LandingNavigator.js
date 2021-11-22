import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LandingScreen from '../screens/LandingScreen';

const Stack = createStackNavigator();

const LandingNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Landing" component={LandingScreen} />
  </Stack.Navigator>
);

export default LandingNavigator;
