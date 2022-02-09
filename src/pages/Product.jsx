import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import PopularItems from '../components/PopularItems';

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  background: rgba(0,0,0,0.8);
  color: yellow;
`;

const Title = styled.h1`
  font-weight: 20;
`;

const Description = styled.p`
  margin: 20px 0px;
`;


const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 35vw;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin: 0px 10px;
  padding: 5px;
  background-color: black;
  color: yellow;
  border: none;
`;

const FilterOption = styled.option`
  background-color: black;
`;

const AddContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  border-radius: 10px;
  white-space: nowrap;
  border: 2px solid yellow;
  padding: 5px;
  background-color: transparent;
  color: yellow;
  cursor: pointer;
  &:hover{ color: orange; border-color: orange; };
`;

const AddRemoveStyle = styled.div`
  &:hover{ color: orange; };
  margin: 0px 5px;
`
const Product = () => {
  return (
        <Container>
          <Navbar/>
          <Wrapper>
            <ImgContainer>
            <Image src={require('../images/optimumnutritionisolate.webp')} />
            </ImgContainer>
            <InfoContainer>
              <Title>Optimum Nutrition Gold Standard Isolate</Title>
              <Description>THE DREAM</Description>
              <Price> $ 20</Price>
              <FilterContainer>
              <Filter>
                    <FilterTitle>Flavour</FilterTitle>
                    <FilterSize>
                        <FilterOption>Chocolate</FilterOption>
                        <FilterOption>Vanilla</FilterOption>
                        <FilterOption>Cookie Cream</FilterOption>
                        <FilterOption>Brownie</FilterOption>
                    </FilterSize>
                  </Filter>
                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterOption>Small - 300g</FilterOption>
                        <FilterOption>Medium - 500g</FilterOption>
                        <FilterOption>Large - 1kg</FilterOption>
                        <FilterOption>Extra large - 1.5kg</FilterOption>
                    </FilterSize>
                  </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <AddRemoveStyle><Remove /></AddRemoveStyle>
                  <Amount>1</Amount>
                  <AddRemoveStyle><Add /></AddRemoveStyle>
                </AmountContainer>
                <Button>ADD TO CART</Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper>
          <PopularItems/>
          <Newsletter/>
          <Footer/>
        </Container>
    );
};

export default Product;
