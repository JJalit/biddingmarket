import React, {useContext, useState} from 'react';
import axios from 'axios';
import {TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {login} from '@react-native-seoul/kakao-login';

import {context as AuthContext} from '../../../auth';
import Screen from '../../../components/Screen';
import Sentence from '../../../components/Sentence';
import Input from './Input';
import Chip from './Chip';
import BorderBox from './BorderBox';
import Dummy from './Dummy';
import RegisterButton from './RegisterButton';
import SearchButton from './SearchButton';
import Row from './Row';
import {TermItem, TermSection, TermItemHeader, TermItemsWrapper} from './Term';

const RegisterScreen = () => {
  const {setUser} = useContext(AuthContext);
  const [info, setInfo] = useState({email: {id: '', domain: ''}, pwd: '', nickname: '', keywords: [], policy: ''});
  const [toggleCheckBox, setToggleCheckBox] = useState({all: false, term0: false, term1: false, term2: false, term3: false, term4: false});

  const [keywordText, setKeywordText] = useState('');
  const [keywordList, setKeywordList] = useState([]);
  const [keywordSelected, setKeywordSelected] = useState([]);

  const signInWithKakao = async () => {
    const token = await login();

    const accessToken = token.accessToken;
    const refreshToken = token.refreshToken;
    const url = `https://m.bidingmarket.com/member/kakao_app_native_login_ps.php?accessToken=${accessToken}&refreshToken=${refreshToken}&JoinBySnsType=kakao`;
    axios.get(url).then(response => {
      if (response.data.result === 'successSingup') {
        console.log(response.data);
        setUser(true);
        AsyncStorage.setItem('isLogin', 'true');
      } else {
        console.log(response.data);
        setUser(true);
      }
    });
  };

  const onSearchKeyword = () => {
    axios
      .post('http://m.biddingmkt.godomall.com/Btcapi/keyword_list_api.php', {keyword: keywordText})
      .then(response => setKeywordList(response.data.data))
      .catch(err => console.log(err));
  };

  const onDeleteKeyword = v => {
    setKeywordSelected(keywordSelected => keywordSelected.filter(keyword => keyword !== v));
  };

  const onAddKeyword = v => {
    setKeywordSelected(keywordSelected => [...keywordSelected, v]);
  };

  const onRegister = () => {
    console.log(info);
  };

  return (
    <Screen>
      <ScrollView style={styles.scrollView}>
        <Sentence text="???????????? ????????????" size={25} bold style={styles.margin0} />
        <Sentence text="SNS ?????? ????????????" size={20} bold style={styles.margin0} />

        {/* Social Register Section */}
        {/* <TouchableOpacity activeOpacity={0.5} style={styles.naverButton}>
          <Image source={require('../../assets/naver_icon.png')} width={1} height={1} style={styles.naverImage} />
          <Sentence text="???????????? ????????????" bold color="white" />
          <Dummy />
        </TouchableOpacity> */}
        <TouchableOpacity activeOpacity={0.5} onPress={signInWithKakao} style={styles.kakaoButton}>
          <Image source={require('../../../assets/kakao_icon.png')} style={styles.kakaoImage} />
          <Sentence text="???????????? ????????????" bold />
          <Dummy />
        </TouchableOpacity>
        {/* <TouchableOpacity activeOpacity={0.5} style={styles.appleButton}>
          <Icon name="logo-apple" size={20} color="white" />
          <Sentence text="????????? ????????????" bold color="white" />
          <Dummy />
        </TouchableOpacity> */}

        {/* Email Register Section */}
        <Sentence text="E-mail??? ????????????" size={20} bold style={styles.emailText} />
        {/* Email */}
        <Sentence text="?????????" bold />
        <Row style={styles.margin1}>
          <Input
            width={100}
            value={info.email && info.email.id}
            onChangeText={e => setInfo(info => ({...info, email: {...info.email, id: e}}))}
          />
          <Sentence text="@" bold size={20} />
          <Input
            width={100}
            value={info.email && info.email.domain}
            onChangeText={e => setInfo(info => ({...info, email: {...info.email, domain: e}}))}
          />
        </Row>
        {/* Password */}
        <Sentence text="????????????" bold />
        <Sentence text="??????, ????????? ????????? 8??? ????????? ??????????????? ??????????????????." size={14} color="grey" style={styles.margin2} />
        <Input
          secureTextEntry
          placeholder="????????????"
          style={styles.margin1}
          value={info.pwd}
          onChangeText={e => setInfo(info => ({...info, pwd: e}))}
        />
        {/* Check Password */}
        <Sentence text="???????????? ??????" bold />
        <Input secureTextEntry placeholder="???????????? ??????" style={styles.margin1} />
        {/* Nickname */}
        <Sentence text="?????????" bold />
        <Input
          placeholder="????????? (5~12???)"
          style={styles.margin1}
          value={info.nickname}
          onChangeText={e => setInfo(info => ({...info, nickname: e}))}
        />

        {/* Keyword Section */}
        <Sentence text="??????????????? (??????20???)" bold />
        {/* Keyword Input */}
        <Row style={styles.margin1}>
          <Input width={200} value={keywordText} onChangeText={setKeywordText} />
          <SearchButton onPress={onSearchKeyword} />
        </Row>
        {/* Keyword List */}
        <Sentence text="????????? ?????????" />
        <BorderBox>
          {keywordSelected.map((keyword, i) => (
            <Chip selected key={i} data={keyword} onDelete={onDeleteKeyword} />
          ))}
        </BorderBox>
        {/* Keyword Selector */}
        <BorderBox>
          {keywordList.map((keyword, i) => (
            <Chip key={i} data={keyword} onAdd={onAddKeyword} />
          ))}
        </BorderBox>

        {/* Term Section */}
        <TermSection>
          <TermItemHeader
            text="?????? ????????? ???????????? ?????? ???????????????."
            type="(?????? ??????)"
            value={toggleCheckBox.all}
            onValueChange={v => setToggleCheckBox(state => ({...state, ...{all: v, term0: v, term1: v, term2: v, term3: v, term4: v}}))}
          />
          <TermItemsWrapper>
            <TermItem
              text="??? 14??? ???????????????."
              type="(??????)"
              value={toggleCheckBox.term0}
              onValueChange={v => setToggleCheckBox(state => ({...state, ...{term0: v}}))}
            />
            <TermItem
              text="????????????"
              type="(??????)"
              value={toggleCheckBox.term1}
              onValueChange={v => setToggleCheckBox(state => ({...state, ...{term1: v}}))}
            />
            <TermItem
              text="????????????"
              type="(??????)"
              value={toggleCheckBox.term2}
              onValueChange={v => setToggleCheckBox(state => ({...state, ...{term2: v}}))}
            />
            <TermItem
              text="????????????"
              type="(??????)"
              value={toggleCheckBox.term3}
              onValueChange={v => setToggleCheckBox(state => ({...state, ...{term3: v}}))}
            />
            <TermItem
              text="????????????"
              type="(??????)"
              value={toggleCheckBox.term4}
              onValueChange={v => setToggleCheckBox(state => ({...state, ...{term4: v}}))}
            />
          </TermItemsWrapper>
        </TermSection>
        <RegisterButton onPress={onRegister} />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 30,
  },
  emailText: {
    marginTop: 70,
    marginBottom: 30,
    textAlign: 'center',
  },
  margin0: {
    marginVertical: 20,
    textAlign: 'center',
  },
  margin1: {
    marginTop: 10,
    marginBottom: 20,
  },
  margin2: {
    marginTop: 5,
  },
  naverButton: {
    paddingVertical: 4,
    backgroundColor: '#00C73C',
    borderRadius: 7,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  kakaoButton: {
    paddingVertical: 10,
    backgroundColor: '#FBE300',
    marginTop: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appleButton: {
    paddingVertical: 10,
    backgroundColor: 'black',
    marginTop: 10,
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
  kakaoImage: {
    width: 18,
    height: 17,
  },
});

export default RegisterScreen;
