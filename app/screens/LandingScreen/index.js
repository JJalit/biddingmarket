import React from 'react';
import {WebView} from 'react-native-webview';

import Screen from '../../components/Screen';

const LandingScreen = () => {
  return (
    <Screen>
      <WebView source={{uri: 'https://m.bidingmarket.com/'}} />
    </Screen>
  );
};

export default LandingScreen;
