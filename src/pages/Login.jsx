import React from 'react';
import styled from 'styled-components';
import arnold from '../images/ArnoldSmall.jpeg'
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${arnold}) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: yellow;
    ${mobile({backgroundPosition: "right center"})};
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background: rgba(0,0,0,0.4);
    ${mobile({width: "80%"})};
`;

// Do not remove wrap as it will cause the form to collapse.
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    &:focus {
    border-color: yellow;
    outline: yellow;
};
`;

const Button = styled.button`
    font-size: 15px;
    width: 40%;
    border: 2px solid yellow;
    border-radius: 10%;
    padding: 5px;
    background: none;
    color: yellow;
    &:hover{ color: orange; border-color: orange; };
    cursor: pointer;
`;
const ButtonLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    gap: 10px;
    cursor: pointer;
`;

const Link = styled.a`
        &:hover{ color: orange;};
`


const Login = () => {
  return (
      <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <ButtonLinkWrapper>
                <Button>LOGIN</Button>
                <Link>I forgot my password</Link>
                <Link>New here? Create a new account!</Link>
                </ButtonLinkWrapper>
            </Form>
        </Wrapper>
      </Container>
  );
};

export default Login;
