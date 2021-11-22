import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createStackNavigator();

const FavoriteNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Favorite" component={FavoriteScreen} />
  </Stack.Navigator>
);

export default FavoriteNavigator;
