import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UploadScreen from '../screens/UploadScreen';

const Stack = createStackNavigator();

const UploadNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Landing" component={UploadScreen} />
  </Stack.Navigator>
);

export default UploadNavigator;
