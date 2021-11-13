import {placeholder} from '@babel/types';
import React from 'react';
import {View, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';

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

const RegisterScreen = () => {
  return (
    <Screen>
      <ScrollView style={{paddingHorizontal: 30}}>
        <Sentence text="비딩마켓 회원가입" size={25} bold style={{marginVertical: 20, textAlign: 'center'}} />
        <Sentence text="SNS 간편 회원가입" size={20} bold style={{marginVertical: 20, textAlign: 'center'}} />
        <TouchableOpacity style={{paddingVertical: 10, backgroundColor: '#00C73C'}}>
          <Sentence text="네이버로 가입하기" color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 10, backgroundColor: '#FBE300', marginTop: 5}}>
          <Sentence text="카카오로 가입하기" />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 10, backgroundColor: 'black', marginTop: 5}}>
          <Sentence text="애플로 가입하기" color="white" />
        </TouchableOpacity>
        <Sentence text="E-mail로 회원가입" size={20} bold style={{marginTop: 70, marginBottom: 30, textAlign: 'center'}} />
        <View>
          <Sentence text="이메일" bold />
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20}}>
            <Input width={100} />
            <Sentence text="@" bold size={20} />
            <Input width={100} />
          </View>
          <Sentence text="비밀번호" bold />
          <Sentence text="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요." size={14} color="grey" style={{marginTop: 5}} />
          <Input placeholder="비밀번호" style={{marginTop: 10, marginBottom: 20}} />
          <Sentence text="비밀번호 확인" bold />
          <Input placeholder="비밀번호 확인" style={{marginTop: 10, marginBottom: 20}} />
          <Sentence text="닉네임" bold />
          <Input placeholder="닉네임 (5~12자)" style={{marginTop: 10, marginBottom: 20}} />
          <Sentence text="관심키워드 (최대20개)" bold />
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20}}>
            <Input width={200} />
            <TouchableOpacity
              style={{backgroundColor: '#ae3ec9', padding: 20, alignSelf: 'center', paddingVertical: 10, borderRadius: 5, marginLeft: 20}}>
              <Sentence text="검색" size={20} bold color="white" style={{textAlign: 'center'}} />
            </TouchableOpacity>
          </View>
          <View style={{borderWidth: 1, borderColor: '#ced4da', borderRadius: 10, height: 140}}></View>
          <View style={{borderWidth: 1, borderColor: '#ced4da', borderRadius: 10, paddingVertical: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}>
              <Sentence text="모든 약관을 확인하고 전체 동의합니다." bold />
              <Sentence text="(선택 포함)" style={{marginLeft: 10}} size={14} />
            </View>
            <Sentence text="만 14세 이상입니다." size={15} />
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              <Sentence text="이용약관" size={15} />
              <Sentence text="(필수)" bold size={14} color="#5f3dc4" style={{marginLeft: 5}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              <Sentence text="이용약관" size={15} />
              <Sentence text="(필수)" bold size={14} color="#5f3dc4" style={{marginLeft: 5}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              <Sentence text="이용약관" size={15} />
              <Sentence text="(필수)" bold size={14} color="#5f3dc4" style={{marginLeft: 5}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              <Sentence text="이용약관" size={15} />
              <Sentence text="(선택)" bold size={14} color="#5f3dc4" style={{marginLeft: 5}} />
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
