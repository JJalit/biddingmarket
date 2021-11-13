import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';

import Screen from '../../components/Screen';
import Sentence from '../../components/Sentence';

function Input(props) {
  const {width, placeholder, style} = props;
  return (
    <TextInput
      placeholder={placeholder}
      style={{
        ...{borderWidth: 1, borderColor: '#ced4da', borderRadius: 3, paddingVertical: 7, width: width, paddingHorizontal: 10, fontSize: 16},
        ...style,
      }}
    />
  );
}

function Chip(props) {
  const {text, onPress} = props;
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'baseline',
        margin: 5,
      }}>
      <Sentence text={text} />
      <TouchableOpacity onPress={onPress} style={{marginLeft: 10}}>
        <Icon name="close-circle" size={24} color="grey" />
      </TouchableOpacity>
    </View>
  );
}

function CustomCheckBox(props) {
  const {value, onValueChange} = props;
  return (
    <View style={{borderWidth: 1, borderColor: value ? '#ae3ec9' : '#ced4da', height: 17, width: 17, borderRadius: 5}}>
      <CheckBox
        hideBox
        onCheckColor="#ae3ec9"
        animationDuration={0}
        style={{height: 15, width: 15}}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
}

const RegisterScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState({all: false, age: false, term1: false, term2: false, term3: false, term4: false});

  return (
    <Screen>
      <ScrollView style={{paddingHorizontal: 30}}>
        <Sentence text="비딩마켓 회원가입" size={25} bold style={{marginVertical: 20, textAlign: 'center'}} />
        <Sentence text="SNS 간편 회원가입" size={20} bold style={{marginVertical: 20, textAlign: 'center'}} />
        {/* Social Register Section */}
        <TouchableOpacity
          style={{
            paddingVertical: 4,
            backgroundColor: '#00C73C',
            borderRadius: 7,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image source={require('../../assets/naver_icon.png')} width={1} height={1} style={{width: 18, height: 35}} />
          <Sentence text="네이버로 가입하기" bold color="white" />
          <View style={{width: 18, height: 17}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            backgroundColor: '#FBE300',
            marginTop: 10,
            borderRadius: 7,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image source={require('../../assets/kakao_icon.png')} style={{width: 18, height: 17}} />
          <Sentence text="카카오로 가입하기" bold />
          <View style={{width: 18, height: 17}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            backgroundColor: 'black',
            marginTop: 10,
            borderRadius: 7,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Icon name="logo-apple" size={20} color="white" />
          <Sentence text="애플로 가입하기" bold color="white" />
          <View style={{width: 18, height: 17}} />
        </TouchableOpacity>
        <Sentence text="E-mail로 회원가입" size={20} bold style={{marginTop: 70, marginBottom: 30, textAlign: 'center'}} />
        {/* Email Register Section */}
        <View>
          {/* Email */}
          <Sentence text="이메일" bold />
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20}}>
            <Input width={100} />
            <Sentence text="@" bold size={20} />
            <Input width={100} />
          </View>
          {/* Password */}
          <Sentence text="비밀번호" bold />
          <Sentence text="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요." size={14} color="grey" style={{marginTop: 5}} />
          <Input placeholder="비밀번호" style={{marginTop: 10, marginBottom: 20}} />
          {/* Check Password */}
          <Sentence text="비밀번호 확인" bold />
          <Input placeholder="비밀번호 확인" style={{marginTop: 10, marginBottom: 20}} />
          {/* Nickname */}
          <Sentence text="닉네임" bold />
          <Input placeholder="닉네임 (5~12자)" style={{marginTop: 10, marginBottom: 20}} />

          {/* Keyword Section */}
          <Sentence text="관심키워드 (최대20개)" bold />
          {/* Keyword Input */}
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20}}>
            <Input width={200} />
            <TouchableOpacity
              style={{backgroundColor: '#ae3ec9', padding: 20, alignSelf: 'center', paddingVertical: 10, borderRadius: 5, marginLeft: 20}}>
              <Sentence text="검색" size={20} bold color="white" style={{textAlign: 'center'}} />
            </TouchableOpacity>
          </View>
          {/* Keyword Selector */}
          <View
            style={{
              borderWidth: 1,
              borderColor: '#ced4da',
              borderRadius: 10,
              minHeight: 140,
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              padding: 10,
            }}>
            <Chip text="의류도매" />
            <Chip text="자체제작" />
          </View>

          {/* Term Section */}
          <View style={{borderWidth: 1, borderColor: '#ced4da', borderRadius: 10, paddingTop: 10, paddingBottom: 20}}>
            {/* Term Header */}
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30, paddingLeft: 5}}>
              <CustomCheckBox
                value={toggleCheckBox.all}
                onValueChange={v => setToggleCheckBox(state => ({...state, ...{all: v, age: v, term1: v, term2: v, term3: v, term4: v}}))}
              />
              <Sentence text="모든 약관을 확인하고 전체 동의합니다." size={14} bold style={{marginLeft: 10}} />
              <Sentence text="(선택 포함)" style={{marginLeft: 5}} size={13} />
            </View>
            {/* Term Items */}
            <View style={{paddingHorizontal: 25}}>
              {/* Term Age */}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CustomCheckBox value={toggleCheckBox.age} onValueChange={v => setToggleCheckBox(state => ({...state, ...{age: v}}))} />
                <Sentence text="만 14세 이상입니다." size={13} style={{marginLeft: 15}} />
                <Sentence text="(필수)" bold size={13} color="#5f3dc4" style={{marginLeft: 5}} />
              </View>
              {/* Term1 */}
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                <CustomCheckBox value={toggleCheckBox.term1} onValueChange={v => setToggleCheckBox(state => ({...state, ...{term1: v}}))} />
                <Sentence text="이용약관" size={13} style={{marginLeft: 15}} />
                <Sentence text="(필수)" bold size={13} color="#5f3dc4" style={{marginLeft: 5}} />
              </View>
              {/* Term2 */}
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                <CustomCheckBox value={toggleCheckBox.term2} onValueChange={v => setToggleCheckBox(state => ({...state, ...{term2: v}}))} />
                <Sentence text="이용약관" size={13} style={{marginLeft: 15}} />
                <Sentence text="(필수)" bold size={13} color="#5f3dc4" style={{marginLeft: 5}} />
              </View>
              {/* Term3 */}
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                <CustomCheckBox value={toggleCheckBox.term3} onValueChange={v => setToggleCheckBox(state => ({...state, ...{term3: v}}))} />
                <Sentence text="이용약관" size={13} style={{marginLeft: 15}} />
                <Sentence text="(필수)" bold size={13} color="#5f3dc4" style={{marginLeft: 5}} />
              </View>
              {/* Term4 */}
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                <CustomCheckBox value={toggleCheckBox.term4} onValueChange={v => setToggleCheckBox(state => ({...state, ...{term4: v}}))} />
                <Sentence text="이용약관" size={13} style={{marginLeft: 15}} />
                <Sentence text="(선택)" bold size={13} color="#5f3dc4" style={{marginLeft: 5}} />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{backgroundColor: '#ae3ec9', width: 130, alignSelf: 'center', paddingVertical: 10, marginVertical: 70}}>
          <Sentence text="회원가입" size={20} bold color="white" style={{textAlign: 'center'}} />
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
};

export default RegisterScreen;
