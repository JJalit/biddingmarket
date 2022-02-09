import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';

import Screen from '../../../components/Screen';
import Sentence from '../../../components/Sentence';

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
    <View style={{borderWidth: 1, borderColor: value ? '#6324cc' : '#ced4da', height: 17, width: 17, borderRadius: 5}}>
      <CheckBox
        hideBox
        onCheckColor="#6324cc"
        animationDuration={0}
        style={{height: 15, width: 15}}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
}

const InfoScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState({all: false, age: false, term1: false, term2: false, term3: false, term4: false});

  return (
    <Screen>
      <ScrollView style={{paddingHorizontal: 30}}>
        <Sentence text="간편회원가입" size={20} bold style={{textAlign: 'center'}} />
        <Sentence text="추가정보입력" size={20} bold style={{textAlign: 'center', marginBottom: 40}} />
        <View>
          {/* Nickname */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Sentence text="닉네임" bold />
            <Input style={{marginLeft: 20, flex: 0.8}} />
          </View>
          {/* Email */}
          <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20}}>
            <Sentence text="이메일" bold />
            <Input style={{marginLeft: 20, flex: 0.8}} />
          </View>
          {/* Keyword Section */}
          <Sentence text="관심키워드 (최대20개)" bold />
          {/* Keyword Input */}
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20}}>
            <Input width={200} />
            <TouchableOpacity
              style={{backgroundColor: '#6324cc', padding: 20, alignSelf: 'center', paddingVertical: 10, borderRadius: 5, marginLeft: 20}}>
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
        <TouchableOpacity style={{backgroundColor: '#6324cc', width: 130, alignSelf: 'center', paddingVertical: 10, marginVertical: 70}}>
          <Sentence text="회원가입" size={20} bold color="white" style={{textAlign: 'center'}} />
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
};

export default InfoScreen;
