import { Add, ColorLensOutlined, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import PopularItems from '../components/PopularItems';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { publicRequest } from './requestMethods';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from "react-redux";


const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  ${mobile({padding: "10px", flexDirection:"column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100vh;
  max-height: 700px;
  margin: 100px;
  ${mobile({margin: "10px"})};
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
  ${mobile({padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 20;
  margin-top: 20px;
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
  ${mobile({flexDirection:"column" })};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({margin: "10px 0px" })};
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
  ${mobile({width: "100%" })};
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

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  //console.log(id);

  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();


 useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get("/products/find/"+id);
        setProduct(res.data);;
      } catch {}

    };
    getProduct().then(() => setLoading(false)).then(() => console.log(product));
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity>1 && setQuantity(quantity -1);
    } else {
      quantity>-1 && setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    //cart update - redux toolkit
    dispatch(addProduct({...product.product, quantity, size}));
    //product:product.product, price:product.product.price * quantity
    //...product.product, quantity, size
  }

  if (loading) { 
    return (<div>Loading...</div>)
  }

return (
        <Container>
          <Navbar/>
          <Wrapper> 
            <ImgContainer>
            <Image src={product.product.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{product.product.title}</Title>
              <Description>{product.product.description}</Description>
              <Price> ${product.product.price}</Price>
              <FilterContainer>
                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize onChange={(e) => setSize(e.target.value)}>
                      {product.product.size.map((size) =>(
                        <FilterOption key={size}>{size}</FilterOption>
                      ))}
                    </FilterSize>
                  </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <AddRemoveStyle><Remove onClick={() => handleQuantity("dec")}/></AddRemoveStyle>
                  <Amount>{quantity}</Amount>
                  <AddRemoveStyle><Add onClick={() => handleQuantity("inc")}/></AddRemoveStyle>
                </AmountContainer>
                <Button onClick={handleClick}>ADD TO CART</Button>
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
