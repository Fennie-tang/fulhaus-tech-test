import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import Item from "./Item";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import GlobalStyles from "../GlobalStyles";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { products, setProducts } = useContext(CartContext);

  useEffect(() => {
    fetch(
      `https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.products);
        setProducts(data.data.products);
        setLoading(false);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <>
      <div className="App">
        {loading && <p>Loading...</p>}
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
