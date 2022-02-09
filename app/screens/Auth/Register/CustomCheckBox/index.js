import React from 'react';
import CheckBox from '@react-native-community/checkbox';

import Wrapper from './Wrapper';

const style = {
  width: 15,
  height: 15,
};

function CustomCheckBox(props) {
  const {value, onValueChange} = props;
  return (
    <Wrapper>
      <CheckBox hideBox onCheckColor="#6324cc" animationDuration={0} style={style} value={value} onValueChange={onValueChange} />
    </Wrapper>
  );
}

export default CustomCheckBox;
