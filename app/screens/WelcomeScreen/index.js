import React from 'react';
import {View, TextInput, Button, TouchableOpacity} from 'react-native';

import Screen from '../../components/Screen';
import Sentence from '../../components/Sentence';

const WelcomeScreen = () => {
  return (
    <Screen style={{marginHorizontal: 40}}>
      <Sentence text="SNS 간편 로그인" size={25} bold style={{marginVertical: 20, textAlign: 'center'}} />
      <TouchableOpacity style={{paddingVertical: 10, backgroundColor: '#00C73C'}}>
        <Sentence text="네이버로 로그인" color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingVertical: 10, backgroundColor: '#FBE300', marginTop: 5}}>
        <Sentence text="카카오로 로그인" />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingVertical: 10, backgroundColor: 'black', marginTop: 5}}>
        <Sentence text="Apple ID로 로그인" color="white" />
      </TouchableOpacity>
      <Sentence text="E-mail 아이디로 로그인" size={25} bold style={{marginTop: 70, marginBottom: 30, textAlign: 'center'}} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Sentence text="이메일" size={18} bold style={{width: 70}} />
        <TextInput style={{borderWidth: 1, borderColor: '#ced4da', borderRadius: 3, width: 200, paddingVertical: 7, marginLeft: 15}} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 25}}>
        <Sentence text="비밀번호" size={18} bold style={{width: 70}} />
        <TextInput style={{borderWidth: 1, borderColor: '#ced4da', borderRadius: 3, width: 200, paddingVertical: 7, marginLeft: 15}} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30, marginBottom: 20}}>
        <Button title="아이디찾기" color="grey" />
        <Button title="비밀번호찾기" color="grey" />
        <Button title="회원가입" color="grey" />
      </View>
      <TouchableOpacity style={{backgroundColor: '#ae3ec9', width: 130, alignSelf: 'center', paddingVertical: 10}}>
        <Sentence text="로그인" size={20} bold color="white" style={{textAlign: 'center'}} />
      </TouchableOpacity>
    </Screen>
  );
};

export default WelcomeScreen;
