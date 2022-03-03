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
    ${mobile({height:"100%" , backgroundPosition: "right center"})};
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background: rgba(0,0,0,0.4);
    ${mobile({width: "80%"})};

`;
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
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
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


const Register = () => {
  return (
      <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Desired username" />
                <Input placeholder="E-mail" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    By Creating an account, I consent to the Processing of my Personal data in accordance with the <strong>PRIVACY POLICY</strong>
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
      </Container>
  );
};

export default Register;
