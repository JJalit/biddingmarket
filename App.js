import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import InfoScreen from './app/screens/InfoScreen';
import FindScreen from './app/screens/FindScreen';
import LandingScreen from './app/screens/LandingScreen';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
