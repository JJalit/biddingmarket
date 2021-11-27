import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

import Screen from '../../components/Screen';

const LandingScreen = () => {
  return (
    <Screen>
      <WebView source={{uri: 'https://www.bidingmarket.com/'}} />
    </Screen>
  );
};

export default LandingScreen;
