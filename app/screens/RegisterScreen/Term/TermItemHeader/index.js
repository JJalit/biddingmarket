import React from 'react';

import Sentence from '../../../../components/Sentence';
import CustomCheckBox from '../../CustomCheckBox';
import Wrapper from './Wrapper';

const styles = {
  text: {
    marginLeft: 10,
  },
  type: {
    marginLeft: 5,
  },
};

function TermItemHeader(props) {
  const {style, text, type, value, onValueChange} = props;
  return (
    <Wrapper style={style}>
      <CustomCheckBox value={value} onValueChange={onValueChange} />
      <Sentence text={text} size={14} bold style={styles.text} />
      <Sentence text={type} style={styles.type} size={13} />
    </Wrapper>
  );
}

export default TermItemHeader;
