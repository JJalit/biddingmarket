import React, {useContext, useEffect, useState} from 'react';
import {View, TextInput, Button, TouchableOpacity, Image, StyleSheet, Text, ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getProfile as getKakaoProfile, login} from '@react-native-seoul/kakao-login';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';
// import {appleAuth} from '@invertase/react-native-apple-authentication';
import axios from 'axios';
import qs from 'qs';
import DOMParser from 'react-native-html-parser';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Screen from '../../../components/Screen';
import Sentence from '../../../components/Sentence';
import routes from '../../../navigation/routes';
import {context as AuthContext} from '../../../auth';
import Indicator from '../../../components/Indicator';

function Dummy() {
  return <View style={styles.dummy} />;
}

function NaviButton({onPress, style, fontStyle, text}) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={fontStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

const WelcomeScreen = ({navigation}) => {
  const {setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [naverToken, setNaverToken] = useState(null);

  // useEffect(() => {
  //   // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
  //   return appleAuth.onCredentialRevoked(async () => {
  //     console.warn('If this function executes, User Credentials have been Revoked');
  //   });
  // }, []);

  // Kakao Login

  const signInWithKakao = async () => {
    const token = await login();
    setLoading(true);

    const accessToken = token.accessToken;
    const refreshToken = token.refreshToken;
    const url = `https://m.bidingmarket.com/member/kakao_app_native_login_ps.php?accessToken=${accessToken}&refreshToken=${refreshToken}`;
    axios.get(url).then(response => {
      if (response.data.result === 'success') {
        setUser(true);
        setLoading(false);
        AsyncStorage.setItem('isLogin', 'true');
      } else {
        console.log(response.data.result);
        navigation.navigate(routes.REGISTER);
        setTimeout(() => {
          Alert.alert('??????', `???????????? ?????? ???????????????.\n ??????????????? ????????? ?????????.`);
        }, 1000);
      }
    });
  };

  const getProfile = async () => {
    const profile = await getKakaoProfile();
  };

  // Naver Login

  const iosKeys = {
    kConsumerKey: 'OPdIeEa4pHpxpyQ2PK5g',
    kConsumerSecret: 'V2qXMyZXgn',
    kServiceAppName: '????????????',
    kServiceAppUrlScheme: 'http://www.bidingmarket.com', // only for iOS
  };

  const naverLogin = props => {
    return new Promise((resolve, reject) => {
      NaverLogin.login(props, (err, token) => {
        console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
        setNaverToken(token);
        if (err) {
          reject(err);
          return;
        }
        resolve(token);
      });
    });
  };

  // ?????? ?????????

  // async function onAppleButtonPress() {
  //   // performs login request
  //   const appleAuthRequestResponse = await appleAuth.performRequest({
  //     requestedOperation: appleAuth.Operation.LOGIN,
  //     requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  //   });

  //   // get current authentication state for user
  //   // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
  //   const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

  //   // use credentialState response to ensure the user is authenticated
  //   if (credentialState === appleAuth.State.AUTHORIZED) {
  //     // user is authenticated
  //   }
  // }

  // ?????? ?????????
  const generalLogin = () => {
    setLoading(true);

    let body = {
      loginId: email,
      loginPwd: password,
    };

    let config = {
      method: 'post',
      url: 'https://m.bidingmarket.com/Btcapi/login_api.php',
      data: qs.stringify(body),
    };
    axios(config).then(response => {
      if (response.data.message === '????????? ??????') {
        setUser(true);
        setLoading(false);
        AsyncStorage.setItem('isLogin', 'true');
      } else {
        navigation.navigate(routes.REGISTER);
        setTimeout(() => {
          Alert.alert('??????', `???????????? ?????? ???????????????.\n ??????????????? ????????? ?????????.`);
        }, 1000);
      }
    });
  };

  return (
    <>
      <Screen>
        <ScrollView style={styles.wholePadding}>
          <Sentence text="SNS ?????? ?????????" size={25} bold style={styles.socialLogin} />
          {/* <TouchableOpacity onPress={() => naverLogin(iosKeys)} style={styles.naver}>
          <Image source={require('../../assets/naver_icon.png')} width={1} height={1} style={styles.naverImage} />
          <Sentence text="???????????? ?????????" bold color="white" />
          <Dummy />
        </TouchableOpacity> */}
          <TouchableOpacity onPress={signInWithKakao} style={styles.kakao}>
            <Image source={require('../../../assets/kakao_icon.png')} style={styles.kakaoImage} />
            <Sentence text="???????????? ?????????" bold />
            <Dummy />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={onAppleButtonPress} style={styles.apple}>
          <Icon name="logo-apple" size={20} color="white" />
          <Sentence text="Apple ID??? ?????????" bold color="white" />
          <Dummy />
        </TouchableOpacity> */}
          <Sentence text="E-mail ???????????? ?????????" size={25} bold style={styles.emailLogin} />
          <View style={styles.row}>
            <Sentence text="?????????" size={18} bold style={styles.typeWidth} />
            <TextInput
              value={email}
              onChangeText={e => setEmail(e)}
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              allowFontScaling={false}
            />
          </View>
          <View style={{...styles.row, ...styles.pw}}>
            <Sentence text="????????????" size={18} bold style={styles.typeWidth} />
            <TextInput
              value={password}
              onChangeText={e => setPassword(e)}
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              allowFontScaling={false}
              secureTextEntry={true}
            />
          </View>
          <View style={{...styles.row, ...styles.addionalFunction}}>
            <NaviButton text="???????????????" fontStyle={{color: 'grey'}} onPress={() => navigation.navigate(routes.FIND)} />
            <NaviButton text="??????????????????" fontStyle={{color: 'grey'}} onPress={() => navigation.navigate(routes.FIND)} />
            <NaviButton text="????????????" fontStyle={{color: 'grey'}} onPress={() => navigation.navigate(routes.REGISTER)} />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={generalLogin}>
            <Sentence text="?????????" size={20} bold color="white" style={styles.center} />
          </TouchableOpacity>
        </ScrollView>
      </Screen>
      <Indicator visible={loading} />
    </>
  );
};

const styles = StyleSheet.create({
  dummy: {
    width: 18,
    height: 17,
  },
  wholePadding: {
    paddingHorizontal: 40,
  },
  socialLogin: {
    marginVertical: 20,
    textAlign: 'center',
  },
  naver: {
    paddingVertical: 4,
    backgroundColor: '#00C73C',
    borderRadius: 7,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  naverImage: {
    width: 18,
    height: 35,
  },
  kakao: {
    paddingVertical: 10,
    backgroundColor: '#FBE300',
    marginTop: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  kakaoImage: {
    width: 18,
    height: 17,
  },
  apple: {
    paddingVertical: 10,
    backgroundColor: 'black',
    marginTop: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emailLogin: {
    marginTop: 70,
    marginBottom: 30,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeWidth: {
    width: 70,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 3,
    flex: 1,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginLeft: 15,
  },
  pw: {
    marginTop: 25,
  },
  addionalFunction: {
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#6324cc',
    width: 130,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  center: {
    textAlign: 'center',
  },
});

export default WelcomeScreen;
