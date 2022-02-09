import React from 'react';
import {WebView} from 'react-native-webview';

import Screen from '../../components/Screen';

const FavoriteScreen = () => {
  return (
    <Screen>
      <WebView source={{uri: 'https://m.bidingmarket.com/mypage/my_store_wish.php'}} />
    </Screen>
  );
};

export default FavoriteScreen;
