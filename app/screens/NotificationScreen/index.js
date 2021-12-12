import React from 'react';
import {WebView} from 'react-native-webview';

import Screen from '../../components/Screen';

const NotificationScreen = () => {
  return (
    <Screen>
      <WebView source={{uri: 'https://m.bidingmarket.com/mypage/my_notice.php'}} />
    </Screen>
  );
};

export default NotificationScreen;
