
import React from "react";
import MoneyMark from "../../assets/svg/MoneyMark";

import buttons from "../../components/buttons";
import inputs from "../../components/inputs";


import {
    Container,
    LoginContainer,
    LoginTextContainer,
    LoginText,
    LinkText,
} from "./styles";

const Login = () =>{

    return(
        <Container>
            <LoginContainer>
                <LoginTextContainer>
                    <MoneyMark/>
                    <LoginText>
                        LOG IN
                    </LoginText>
                </LoginTextContainer>
                <inputs.TextInput
                    placeholder={"seu e-mail"}
                    marginBottom={8}
                />
                <inputs.TextInput
                    placeholder={"sua senha"}
                />
                <buttons.MainButton 
                    text="entrar"
                />
                <LinkText>
                    esqueci minha senha
                </LinkText>
            </LoginContainer>
        </Container>
    );
}

export default Login;