import styled from 'styled-components';

import colors from '../../../constants/styles/Colors';

export const Input = styled.input`
  border: none;
  background: ${colors.grayLight};
  border-radius: 26px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  padding: 8px 16px;
  font-size: 26px;
  max-width: ${(props) => props.maxWidth}px;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.grayLight2};
    opacity: 1; /* Firefox */
  }

  :focus, textarea:focus, select:focus{
    outline: none;
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${colors.grayLight2};
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${colors.grayLight2};
  }
`;

export default Input;
