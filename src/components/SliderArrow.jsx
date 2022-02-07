import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { sliderItems } from './data';
import { useState } from 'react';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: black;
    position: relative;
    overflow: hidden;


`;
const Arrow = styled.div`
    width: 70px;
    height: 70px;
    background-color: none;
    border-radius: 50%;
    color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "5px"};
    right: ${props => props.direction === "right" && "5px"};
    margin: auto;
    opacity: 0.7;
    cursor: pointer;
    z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
transition: all 1.5s ease;
transform:translateX(${props => props.slideIndex * -100}%);
`;

const Slide = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-shrink: 0;
align-items: center;
`;

    const ImgContainer = styled.div`
    flex: 1;
    height: 100%;

    `;

        const Image = styled.img`
        height: 100%;
        `;

        const ImgInfo = styled.div`
        flex: 1;
        padding: 50px;
        `;
            const Tittle = styled.h1`
                color: yellow;
                font-size: 60px;
            `
            const Description = styled.p`
                margin: 50px 0px;
                color: yellow;
                font-weight: bold;
                font-size: 20px;
                letter-spacing: 2px;
            `
            const SliderButton = styled.button`
                color: yellow;
                padding: 10px;
                font-size: 20px;
                background-color: transparent;
                border-color: yellow;
                cursor: pointer;
            `





const SliderArrow = () => {

        const [slideIndex, setSlideIndex] = useState(0);
        const arrowClick = (direction) => {
            
            if(direction === "left") {
                setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3 );
            } else {
                setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0 );
            }
        };

  return (
  <Container>
      <Arrow direction="left" onClick={() => arrowClick("left")}>
          <MdKeyboardArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item => (
          <Slide>
            <ImgContainer>
                <Image src={item.img}>
                </Image>
            </ImgContainer>    
                    <ImgInfo>
                        <Tittle>{item.title}</Tittle>
                        <Description>{item.desc}</Description>
                        <SliderButton> SHOP NOW </SliderButton>
                    </ImgInfo>  
          </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => arrowClick("right")}>
          <MdKeyboardArrowRight />
      </Arrow>
  </Container>
)
};

export default SliderArrow;
