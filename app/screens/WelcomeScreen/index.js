import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, TouchableOpacity, Image, StyleSheet, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getProfile as getKakaoProfile, login, logout, unlink} from '@react-native-seoul/kakao-login';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';
import {appleAuth} from '@invertase/react-native-apple-authentication';

import Screen from '../../components/Screen';
import Sentence from '../../components/Sentence';
import routes from '../../navigation/routes';

function Dummy() {
  return <View style={styles.dummy} />;
}

const WelcomeScreen = ({navigation}) => {
  const [result, setResult] = useState('');
  const [naverToken, setNaverToken] = useState(null);

  useEffect(() => {
    // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
    return appleAuth.onCredentialRevoked(async () => {
      console.warn('If this function executes, User Credentials have been Revoked');
    });
  }, []);

  // Kakao Login

  const signInWithKakao = async () => {
    const token = await login();

    setResult(JSON.stringify(token));
    console.log(JSON.stringify(token));
  };

  const signOutWithKakao = async () => {
    const message = await logout();

    setResult(message);
  };

  const getProfile = async () => {
    const profile = await getKakaoProfile();

    console.log(JSON.stringify(profile));
    setResult(JSON.stringify(profile));
  };

  const unlinkKakao = async () => {
    const message = await unlink();

    setResult(message);
  };

  // Naver Login

  const iosKeys = {
    kConsumerKey: 'OPdIeEa4pHpxpyQ2PK5g',
    kConsumerSecret: 'V2qXMyZXgn',
    kServiceAppName: '비딩마켓',
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

  // 애플 로그인

  async function onAppleButtonPress() {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
    }
  }

  return (
    <Screen>
      <ScrollView style={styles.wholePadding}>
        <Sentence text="SNS 간편 로그인" size={25} bold style={styles.socialLogin} />
        <TouchableOpacity onPress={() => naverLogin(iosKeys)} style={styles.naver}>
          <Image source={require('../../assets/naver_icon.png')} width={1} height={1} style={styles.naverImage} />
          <Sentence text="네이버로 로그인" bold color="white" />
          <Dummy />
        </TouchableOpacity>
        <TouchableOpacity onPress={getProfile} style={styles.kakao}>
          <Image source={require('../../assets/kakao_icon.png')} style={styles.kakaoImage} />
          <Sentence text="카카오로 로그인" bold />
          <Dummy />
        </TouchableOpacity>
        <TouchableOpacity onPress={onAppleButtonPress} style={styles.apple}>
          <Icon name="logo-apple" size={20} color="white" />
          <Sentence text="Apple ID로 로그인" bold color="white" />
          <Dummy />
        </TouchableOpacity>
        <Text>{result}</Text>
        <Sentence text="E-mail 아이디로 로그인" size={25} bold style={styles.emailLogin} />
        <View style={styles.row}>
          <Sentence text="이메일" size={18} bold style={styles.typeWidth} />
          <TextInput style={styles.textInput} />
        </View>
        <View style={{...styles.row, ...styles.pw}}>
          <Sentence text="비밀번호" size={18} bold style={styles.typeWidth} />
          <TextInput style={styles.textInput} />
        </View>
        <View style={{...styles.row, ...styles.addionalFunction}}>
          <Button title="아이디찾기" color="grey" onPress={() => navigation.navigate(routes.FIND)} />
          <Button title="비밀번호찾기" color="grey" onPress={() => navigation.navigate(routes.FIND)} />
          <Button title="회원가입" color="grey" onPress={() => navigation.navigate(routes.REGISTER)} />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Sentence text="로그인" size={20} bold color="white" style={styles.center} />
        </TouchableOpacity>
      </ScrollView>
    </Screen>
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
    width: 200,
    paddingVertical: 7,
    marginLeft: 15,
  },
  pw: {
    marginTop: 25,
  },
  addionalFunction: {
    justifyContent: 'center',
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
