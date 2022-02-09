import React from 'react';

import Sentence from '../../../../components/Sentence';
import StyledButton from './StyledButton';

const styles = {
  text: {
    textAlign: 'center',
  },
};

function RegisterButton(props) {
  const {style, onPress} = props;
  return (
    <StyledButton activeOpacity={0.5} style={style} onPress={onPress}>
      <Sentence text="회원가입" size={20} bold color="white" style={styles.text} />
    </StyledButton>
  );
}

export default RegisterButton;
