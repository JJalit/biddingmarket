import React from 'react';

import CustomCheckBox from '../../CustomCheckBox';
import Sentence from '../../../../../components/Sentence';
import Wrapper from './Wrapper';

const styles = {
  text: {
    marginLeft: 15,
  },
  type: {
    marginLeft: 5,
  },
};

function TermItem(props) {
  const {style, text, type, onValueChange, value, bold} = props;
  return (
    <Wrapper style={style}>
      <CustomCheckBox value={value} onValueChange={onValueChange} />
      <Sentence bold={bold} text={text} size={13} style={styles.text} />
      <Sentence text={type} bold size={13} color="#5f3dc4" style={styles.type} />
    </Wrapper>
  );
}

export default TermItem;
