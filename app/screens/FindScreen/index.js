import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import Screen from '../../components/Screen';
import Sentence from '../../components/Sentence';

function Input(props) {
  const {width, placeholder, style, value, onChangeText} = props;
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={{
        ...{borderWidth: 1, borderColor: '#ced4da', borderRadius: 3, paddingVertical: 7, width: width, paddingHorizontal: 10, fontSize: 16},
        ...style,
      }}
    />
  );
}

const FindScreen = () => {
  const [info, setInfo] = useState({name: '', nickname: '', id: ''});
  const [find, setFind] = useState({id: false, pw: false});

  const onChangeText = (value, name) => {
    setInfo(info => ({...info, [name]: value}));
  };

  return (
    <Screen>
      <ScrollView style={{paddingHorizontal: 30}}>
        {find.id ? (
          <View style={{alignSelf: 'center', marginTop: 200}}>
            <Sentence text="가입시 사용한 아이디는" bold size={18} style={{textAlign: 'center'}} />
            <Sentence
              text={find.id ? 'testId' : '일치하는 ID없음'}
              color="#6324cc"
              bold
              size={18}
              style={{textAlign: 'center', marginVertical: 20}}
            />
            <Sentence text="입니다." bold size={18} style={{textAlign: 'center'}} />
          </View>
        ) : find.pw ? (
          <View style={{alignSelf: 'center', marginTop: 200}}>
            <Sentence text="가입시 사용한 이메일" bold size={18} style={{textAlign: 'center'}} />
            <Sentence text="testId@test.com" color="#4d435e" bold size={18} style={{textAlign: 'center', marginVertical: 20}} />
            <Sentence text="로 비밀번호를 전송하였습니다." bold size={18} style={{textAlign: 'center'}} />
          </View>
        ) : (
          <>
            {/* Id Section */}
            <Sentence text="ID 찾기" size={18} bold />
            {/* Name */}
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
              <Sentence text="이름" bold style={{width: 50}} />
              <Input
                value={info.name}
                onChangeText={e => onChangeText(e, 'name')}
                placeholder="이름을 입력해주세요"
                style={{marginLeft: 20, flex: 0.8}}
              />
            </View>
            {/* Nickname */}
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20}}>
              <Sentence text="닉네임" bold style={{width: 50}} />
              <Input
                value={info.nickname}
                onChangeText={e => onChangeText(e, 'nickname')}
                placeholder="닉네임 입력해주세요"
                style={{marginLeft: 20, flex: 0.8}}
              />
            </View>
            <TouchableOpacity
              onPress={() => onFind('id')}
              style={{backgroundColor: '#6324cc', width: 250, alignSelf: 'center', paddingVertical: 10, marginTop: 30, borderRadius: 20}}>
              <Sentence text="ID 찾기" size={20} bold color="white" style={{textAlign: 'center'}} />
            </TouchableOpacity>
            {/* Password Section */}
            <Sentence text="비밀번호 찾기" size={18} bold style={{marginTop: 100}} />
            {/* Name */}
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
              <Sentence text="아이디" bold style={{width: 50}} />
              <Input
                value={info.id}
                onChangeText={e => onChangeText(e, 'id')}
                placeholder="아이디를 입력해주세요"
                style={{marginLeft: 20, flex: 0.8}}
              />
            </View>
            <TouchableOpacity
              onPress={() => onFind('pw')}
              style={{backgroundColor: '#6324cc', width: 250, alignSelf: 'center', paddingVertical: 10, marginTop: 30, borderRadius: 20}}>
              <Sentence text="비밀번호 찾기" size={20} bold color="white" style={{textAlign: 'center'}} />
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </Screen>
  );
};

export default FindScreen;
