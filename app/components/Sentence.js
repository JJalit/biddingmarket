import React from 'react';
import {Text} from 'react-native';

function Sentence(props) {
  const {text, size, bold, color, style} = props;
  return <Text style={{...{fontSize: size, fontWeight: bold && 'bold', color: color}, ...style}}>{text}</Text>;
}

Sentence.defaultProps = {
  size: 16,
  color: 'black',
};

export default Sentence;
