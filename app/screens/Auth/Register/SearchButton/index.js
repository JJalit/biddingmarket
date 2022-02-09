import React from 'react';

import Sentence from '../../../../components/Sentence';
import StyledButton from './StyledButton';

const styles = {
  text: {
    textAlign: 'center',
  },
};

function SearchButton(props) {
  const {style, onPress} = props;
  return (
    <StyledButton activeOpacity={0.5} onPress={onPress} style={style}>
      <Sentence text="검색" size={20} bold color="white" style={styles.text} />
    </StyledButton>
  );
}

export default SearchButton;
