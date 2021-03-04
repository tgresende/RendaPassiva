import styled from 'styled-components';

import colors from "../../constants/styles/Colors";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const LoginContainer = styled.div`
    background: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    border: 2px solid ${colors.gray};
    padding: 24px;
    width: 60%;
`;

export const LoginTextContainer = styled.div`
    padding: 24px;
`;

export const LoginText = styled.text`
    margin-left: 16px;
    font-size: 64px;
    color: ${colors.grayLight3};
`;

export const LinkText = styled.text`
    margin-top: 16px;
    font-size: 18px;
    color: ${colors.grayLight3};
`;





export default Container;