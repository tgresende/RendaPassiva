import styled from 'styled-components';

import colors from '../../constants/styles/Colors';

export const Container = styled.div`
    background: ${colors.grayLight4};
    position:fixed;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    padding: 24px;
    margin-bottom: 48px;
`;

export const LoginTextContainer = styled.div`
    padding: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginText = styled.text`
    margin-left: 16px;
    font-size: 64px;
    color: ${colors.grayLight3};
`;

export const LinkText = styled.text`
    margin: 16px;
    font-size: 18px;
    color: ${colors.grayLight3};
`;

export default Container;
