import styled from 'styled-components';

import colors from '../../../constants/styles/Colors';

const Button = styled.button`
  background: ${colors.blueWater};
  border-radius: 32px;
  border: none;
  padding: 4px 16px;
  font-size: 36px;

  :focus, textarea:focus, select:focus{
    outline: none;
  }

  :hover {
    background-color: ${colors.blackLight};
    color: ${colors.blueWater};
  }
`;

export default Button;
