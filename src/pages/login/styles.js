import styled from 'styled-components';

import colors from "../../constants/styles/Colors";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
`;


export const LoginContainer = styled.div`
    background: ${colors.blackLight};;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    border: 2px solid ${colors.gray};
    padding: 24px;
    width: 60%;
`;

export const titleInput = styled.text`
    margin: 240px;
`;


export default Container;