import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import StyledButton from './StyledButton';
import Sentence from '../../../components/Sentence';
import IconButton from './IconButton';

function Chip(props) {
  const {text, onDelete, onAdd} = props;
  return (
    <StyledButton activeOpacity={0.5} onPress={() => onAdd(text)}>
      <Sentence text={text} />
      <IconButton activeOpacity={0.5} onPress={() => onDelete(text)}>
        <Icon name="close-circle" size={22} color="grey" />
      </IconButton>
    </StyledButton>
  );
}

export default Chip;
