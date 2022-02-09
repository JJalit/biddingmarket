import React from 'react';

import StyledTextInput from './StyledTextInput';

function Input(props) {
  const {width, placeholder, style, value, onChangeText, secureTextEntry} = props;
  return (
    <StyledTextInput
      width={width}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={style}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
    />
  );
}

export default Input;
