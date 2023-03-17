import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { BsCartPlus } from "react-icons/bs";
const Item = ({ imageURLs, fulhausProductName, retailPrice }) => {
  const { cart, setCart } = useContext(CartContext);

  const addCartHanlder = (name) => {
    const update = cart.map((item) => {
      if (cart.length === 0) {
        setCart({ name, qte: 1 });
      }
      if (item.name === name) {
        return (item.qte += 1);
      }
    });
    console.log(update);

    setCart(update);
  };
  console.log("cart", cart);
  return (
    <Wrapper>
      <img src={imageURLs} alt={imageURLs} />
      <Info>
        <span>{fulhausProductName}</span>
      </Info>
      <PurchaseLine>
        <span>${retailPrice}</span>

        <BsCartPlus
          color="red"
          onClick={() => {
            addCartHanlder(fulhausProductName);
          }}
        ></BsCartPlus>
      </PurchaseLine>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border: 1px solid red;
  width: 250px;
  margin: 5px;
`;
const PurchaseLine = styled.div`
  display: flex;
  gap: 150px;
`;
const Info = styled.div`
  padding-bottom: 30px;
`;
export default Item;
