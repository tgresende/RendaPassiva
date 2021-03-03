
import React from "react";

import buttons from "../../components/buttons";
import inputs from "../../components/inputs";


import {
    Container,
    LoginContainer,
    titleInput,
} from "./styles";

const Login = () =>{

    return(
        <Container>
            <LoginContainer>
                <inputs.TextInput
                    placeholder={"e-mail"}
                    marginBottom={8}
                />
                <inputs.TextInput
                    placeholder={"senha"}
                />
                <buttons.MainButton 
                    text="Entrar"
                />
            </LoginContainer>
        </Container>
    );
}

export default Login;