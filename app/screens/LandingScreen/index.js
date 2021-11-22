import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const LandingScreen = () => {
  return <WebView source={{uri: 'https://m.bidingmarket.com/'}} />;
};

export default LandingScreen;
