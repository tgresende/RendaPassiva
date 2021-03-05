import React from 'react';

import buttons from '../../components/buttons';
import inputs from '../../components/inputs';

import logo from '../../assets/images/logo.png';

import {
  Container,
  LoginContainer,
  LoginTextContainer,
  LoginText,
  LinkText,
} from './styles';

const Login = () => (
  <Container>
    <LoginContainer>
      <LoginTextContainer>
        <img src={logo} alt="Logo" width={104} />
        <LoginText>
          LOG IN
        </LoginText>
      </LoginTextContainer>
      <inputs.TextInput
        placeholder="seu e-mail"
        marginBottom={8}
      />
      <inputs.TextInput
        placeholder="sua senha"
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

export default Login;
