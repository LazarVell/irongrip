import React from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTwitch, FaTwitter } from 'react-icons/fa';
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
background-color:#282d32;
color: Yellow;
${mobile({flexDirection: "column"})};
`

const Left = styled.div`
flex:1;
display:flex;
flex-direction: column;
padding: 20px;
`
    const Logo = styled.h1`
        text-align: center;
    `
    const Description = styled.p`
    margin: 20px 0px;
    width: 100%;
    font-weight: bold;
    color: yellow;
    font-size: 15px;
    `
    const SocialContainer = styled.div`
        display: flex;
        justify-content: space-around;
    `
    const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    &:hover{
        transform: scale(1.2);
    }
    `

const Center = styled.div`
flex:1;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
${mobile({backgroundColor: "#838383"})};
//while we wanted a darker gray, darkgray is lighter than gray. so we used a hex color
`

    const Title = styled.h3`
    margin-bottom: 30px;
    font-size: 30px;
    `
    const List = styled.ul`
    margin: 0;
    list-style: none;
    display: flex;
    flex:1;
    flex-wrap: wrap;
    `
    const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    &:hover{
        color: orange;
        cursor: pointer;
    };
    `    

const Right = styled.div`
flex:1;
padding: 20px;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;

`
    const ContactItem = styled.div`
        font-size: 20px;
        margin-bottom: 20px;
        display:flex;
        align-items: center;
    `
    

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>IRONGRIP FITNESS LTD</Logo>
              <Description>IRONGRIP is an industry leader in providing
                  high-quality supplements to the market. The name is based
                  on a conversation between a number of friends at the gym
                  where they discussed how their lack of grip was imparing their
                  training, as they could not push themselves to the limits. Our
                  mission is to help people make educated choices regarding supplements
                  and ultimately help them reach their goals in bodybuilding, fitness, or sports.
              </Description>
                  <SocialContainer>
                      <SocialIcon >
                          <FaFacebook />
                      </SocialIcon>
                      <SocialIcon >
                          <FaInstagram />
                      </SocialIcon>
                      <SocialIcon >
                          <FaTwitter />
                      </SocialIcon>
                      <SocialIcon >
                          <FaTwitch />
                      </SocialIcon>
                  </SocialContainer>
          </Left>
          <Center>
              <Title>Useful Links</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Proteins</ListItem>
                  <ListItem>Supplements</ListItem>
                  <ListItem>Apparel</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Careers</ListItem>
                  <ListItem>Terms and Conditions</ListItem>
              </List>
          </Center>
          <Right>
            <Title>Contact</Title>
            <ContactItem>
                <FaMapMarkerAlt style={{marginRight:'10px'}}/> Dušanova 32 , 18000 Niš
            </ContactItem>
            <ContactItem>
                <BsFillTelephoneInboundFill style={{marginRight:'10px'}}/> +381 64 12345678
            </ContactItem>
            <ContactItem>
                <GrMail style={{marginRight:'10px'}}/> contact@irongrip.com
            </ContactItem>
          </Right>
      </Container>
  );
};

export default Footer;
