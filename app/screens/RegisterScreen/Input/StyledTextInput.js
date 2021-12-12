import styled from 'styled-components/native';

const StyledTextInput = styled.TextInput`
  border: 1px solid #ced4da;
  border-radius: 3px;
  padding: 10px 7px;
  width: ${props => (props.width ? props.width + 'px' : '100%')};
  font-size: 16px;
`;

export default StyledTextInput;
