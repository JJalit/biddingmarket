import React, {useState} from 'react';
import {View, TextInput, Button, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getProfile as getKakaoProfile, login, logout, unlink} from '@react-native-seoul/kakao-login';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';

import Screen from '../../components/Screen';
import Sentence from '../../components/Sentence';

function Dummy() {
  return <View style={styles.dummy} />;
}

const WelcomeScreen = () => {
  const [result, setResult] = useState('');
  const [naverToken, setNaverToken] = useState(null);

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
    kConsumerKey: 'AuAyQilbCqs03G9bkbiP',
    kConsumerSecret: 'RpM8DOz6SX',
    kServiceAppName: '비딩마켓',
    kServiceAppUrlScheme: 'https://www.snspumasi.com', // only for iOS
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

  return (
    <Screen>
      <View style={styles.wholePadding}>
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
        <TouchableOpacity style={styles.apple}>
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
          <Button title="아이디찾기" color="grey" />
          <Button title="비밀번호찾기" color="grey" />
          <Button title="회원가입" color="grey" />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Sentence text="로그인" size={20} bold color="white" style={styles.center} />
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#ae3ec9',
    width: 130,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  center: {
    textAlign: 'center',
  },
});

export default WelcomeScreen;
