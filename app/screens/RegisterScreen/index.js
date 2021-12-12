import React, {useState} from 'react';
import axios from 'axios';
import {TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Screen from '../../components/Screen';
import Sentence from '../../components/Sentence';
import Input from './Input';
import Chip from './Chip';
import BorderBox from './BorderBox';
import Dummy from './Dummy';
import RegisterButton from './RegisterButton';
import SearchButton from './SearchButton';
import Row from './Row';
import {TermItem, TermSection, TermItemHeader, TermItemsWrapper} from './Term';

const RegisterScreen = () => {
  const [info, setInfo] = useState({email: {id: '', domain: ''}, pwd: '', nickname: '', keywords: [], policy: ''});
  const [toggleCheckBox, setToggleCheckBox] = useState({all: false, term0: false, term1: false, term2: false, term3: false, term4: false});

  const [keywordText, setKeywordText] = useState('');
  const [keywordList, setKeywordList] = useState([]);
  const [keywordSelected, setKeywordSelected] = useState([]);

  const onSearchKeyword = () => {
    axios
      .post('http://m.biddingmkt.godomall.com/Btcapi/keyword_list_api.php', {keyword: keywordText})
      .then(response => {
        setKeywordList(response.data.data);
        console.log(typeof response.data.data);
      })
      .catch(err => console.log(err));
  };

  const onDeleteKeyword = v => {
    setKeywordSelected(keywordSelected => keywordSelected.filter(keyword => keyword !== v));
  };

  const onAddKeyword = v => {
    setKeywordSelected(keywordSelected => [...keywordSelected, v]);
  };

  const onRegister = () => {
    console.log('register');
  };

  return (
    <Screen>
      <ScrollView style={styles.scrollView}>
        <Sentence text="비딩마켓 회원가입" size={25} bold style={styles.margin0} />
        <Sentence text="SNS 간편 회원가입" size={20} bold style={styles.margin0} />

        {/* Social Register Section */}
        <TouchableOpacity activeOpacity={0.5} style={styles.naverButton}>
          <Image source={require('../../assets/naver_icon.png')} width={1} height={1} style={styles.naverImage} />
          <Sentence text="네이버로 가입하기" bold color="white" />
          <Dummy />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.kakaoButton}>
          <Image source={require('../../assets/kakao_icon.png')} style={styles.kakaoImage} />
          <Sentence text="카카오로 가입하기" bold />
          <Dummy />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.appleButton}>
          <Icon name="logo-apple" size={20} color="white" />
          <Sentence text="애플로 가입하기" bold color="white" />
          <Dummy />
        </TouchableOpacity>

        {/* Email Register Section */}
        <Sentence text="E-mail로 회원가입" size={20} bold style={styles.emailText} />
        {/* Email */}
        <Sentence text="이메일" bold />
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
        <Sentence text="비밀번호" bold />
        <Sentence text="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요." size={14} color="grey" style={styles.margin2} />
        <Input placeholder="비밀번호" style={styles.margin1} value={info.pwd} onChangeText={e => setInfo(info => ({...info, pwd: e}))} />
        {/* Check Password */}
        <Sentence text="비밀번호 확인" bold />
        <Input placeholder="비밀번호 확인" style={styles.margin1} />
        {/* Nickname */}
        <Sentence text="닉네임" bold />
        <Input
          placeholder="닉네임 (5~12자)"
          style={styles.margin1}
          value={info.nickname}
          onChangeText={e => setInfo(info => ({...info, nickname: e}))}
        />

        {/* Keyword Section */}
        <Sentence text="관심키워드 (최대20개)" bold />
        {/* Keyword Input */}
        <Row style={styles.margin1}>
          <Input width={200} value={keywordText} onChangeText={setKeywordText} />
          <SearchButton onPress={onSearchKeyword} />
        </Row>
        {/* Keyword List */}
        <Sentence text="선택된 키워드" />
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
            text="모든 약관을 확인하고 전체 동의합니다."
            type="(선택 포함)"
            value={toggleCheckBox.all}
            onValueChange={v => setToggleCheckBox(state => ({...state, ...{all: v, term0: v, term1: v, term2: v, term3: v, term4: v}}))}
          />
          <TermItemsWrapper>
            <TermItem
              text="만 14세 이상입니다."
              type="(필수)"
              value={toggleCheckBox.term0}
              onValueChange={v => setToggleCheckBox(state => ({...state, ...{term0: v}}))}
            />
            <TermItem
              text="이용약관"
              type="(필수)"
              value={toggleCheckBox.term1}
              onValueChange={v => setToggleCheckBox(state => ({...state, ...{term1: v}}))}
            />
            <TermItem
              text="이용약관"
              type="(필수)"
              value={toggleCheckBox.term2}
              onValueChange={v => setToggleCheckBox(state => ({...state, ...{term2: v}}))}
            />
            <TermItem
              text="이용약관"
              type="(필수)"
              value={toggleCheckBox.term3}
              onValueChange={v => setToggleCheckBox(state => ({...state, ...{term3: v}}))}
            />
            <TermItem
              text="이용약관"
              type="(선택)"
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
