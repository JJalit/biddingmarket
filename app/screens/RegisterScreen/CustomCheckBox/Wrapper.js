import styled from 'styled-components/native';

const Wrapper = styled.View`
  border: ${props => (props.value ? '1px solid #6324cc' : '1px solid #ced4da')}
  height: 17px;
  width: 17px;
  border-radius: 5px;
`;

export default Wrapper;
