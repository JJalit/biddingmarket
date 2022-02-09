import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {context as AuthContext} from './app/auth';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    loginCheck();
  }, []);

  const loginCheck = async () => {
    const isLogin = await AsyncStorage.getItem('isLogin');
    if (isLogin === 'true') {
      setUser(true);
    }
  };

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>{user ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
