import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [pr, setPrice] = useState(0)
  const addPrice = (addedNum) => { setPrice(pr + addedNum) }
  const [cartList, setCartList] = useState([])
  const addItem = (itemName) => { setCartList([...cartList, itemName])}
  

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <div>
          <BakeryItem name={item.name} image={item.image} description={item.description} price={item.price} totalPrice={addPrice} totalItems={addItem}/>
          <br></br>
        </div>
      ))}

      <div>
        <h2>Cart</h2>

        {cartList.map((item, index) => (
          <div> {item} </div>
        ))}

        <p>Total price: {pr}</p>
      </div>
    </div>
  );
}

export default App;
