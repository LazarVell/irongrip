import React from 'react';
import { IoIosSend } from 'react-icons/io';
import styled from 'styled-components';

const Container = styled.div`
height: 60vh;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
color: yellow;
`

const Description = styled.div`
font-size: 24px;
font-weight: bold;
margin-bottom: 20px;
color: yellow;
`


const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: black;
display: flex;
justify-content: space-between;
border: 3px solid yellow;
`

const Input = styled.input`
border: none;
flex: 9;
&:focus {
    border: none;
    outline: none;
};
padding-left: 20px;
`

const Button = styled.button`
flex: 1;
border: none;
color: black;
background-color: yellow;
font-size: 20px;
`


const Newsletter = () => {
  return (
      <Container>
          <Title> NEWSLETTER</Title>
          <Description>Stay up to date with the latest trends.</Description>
          <InputContainer>
            <Input placeholder='Your e-mail'/>
            <Button>
                <IoIosSend />
            </Button>
          </InputContainer>

      </Container>
  );
};

export default Newsletter;
