import React from 'react';
import {WebView} from 'react-native-webview';

import Screen from '../../components/Screen';

const AccountScreen = () => {
  return (
    <Screen>
      <WebView source={{uri: 'https://m.bidingmarket.com/mypage/index.php'}} />
    </Screen>
  );
};

export default AccountScreen;
