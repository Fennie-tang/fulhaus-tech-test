import { useContext } from "react";
import { CartContext } from "./CartContext";
import styled from "styled-components";
import Item from "./Item";

const Home = () => {
  const { products } = useContext(CartContext);
  return (
    <Wrapper>
      <LeftSide>
        <img
          src="https://s3.amazonaws.com/fhphotos/228981-006_PRM_1.jpg"
          alt="test"
        />
      </LeftSide>
      <RightSide>
        {products &&
          products.map((product) => {
            return (
              <Item
                imageURLs={product.imageURLs[0]}
                fulhausProductName={product.fulhausProductName}
                // fulhausDescription={product.fulhausDescription}
                retailPrice={product.retailPrice}
              />
            );
          })}
      </RightSide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftSide = styled.div`
  height: 90%;
  width: 40%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const RightSide = styled.div`
  padding: 2rem;
  width: 60%;
  overflow-y: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid blue;
  img {
    width: 200px;
    height: 200px;
  }
`;
export default Home;
