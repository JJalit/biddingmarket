import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import StyledButton from './StyledButton';
import Sentence from '../../../components/Sentence';
import IconButton from './IconButton';

function Chip(props) {
  const {data, onDelete, onAdd, selected} = props;
  return (
    <StyledButton activeOpacity={0.5} onPress={() => onAdd(data)}>
      <Sentence text={data && data.itemNm} />
      {selected && (
        <IconButton activeOpacity={0.5} onPress={() => onDelete(data)}>
          <Icon name="close-circle" size={22} color="grey" />
        </IconButton>
      )}
    </StyledButton>
  );
}

export default Chip;
