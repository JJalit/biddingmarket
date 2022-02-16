import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

import {context as AuthContext} from './auth';
import {AppNavigator, AuthNavigator} from './navigation';
import Test from './screens/Test';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    loginCheck();
    SplashScreen.hide();
  }, []);

  const loginCheck = async () => {
    const isLogin = await AsyncStorage.getItem('isLogin');
    if (isLogin === 'true') {
      setUser(true);
    }
    // await AsyncStorage.removeItem('isLogin');
  };

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>{user ? <Test /> : <AuthNavigator />}</NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
