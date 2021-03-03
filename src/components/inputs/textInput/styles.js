import styled from 'styled-components'

import colors from "../../../constants/styles/Colors";


const Input = styled.input`
  background: ${colors.grayLight};
  border-radius: 18px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  padding: 0.25px 12px;
  font-size: 24px;
  max-width: ${(props) => props.maxWidth}px;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: white;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: red;
  }
`;


export default Input;