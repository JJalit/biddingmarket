import React from 'react';
import {WebView} from 'react-native-webview';

import Screen from '../../components/Screen';

const UploadScreen = () => {
  return (
    <Screen>
      <WebView source={{uri: 'https://m.bidingmarket.com/board/list.php?&bdId=estimate'}} />
    </Screen>
  );
};

export default UploadScreen;
