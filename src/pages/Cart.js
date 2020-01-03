import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [ordered, setOrdered] = useState(false);
  const { cartItems, setCartItems } = useContext(Context);
  const cartItemsElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));
  const pricePerUnit = 1.99;
  const totalPrice = (cartItems.length * pricePerUnit).toLocaleString("en-US", {
    style: "currency",
    currency: "GBP"
  });
  let orderingButtonText = ordered ? "Ordering..." : "Place order";
  const placeOrder = () => {
    if (cartItems.length) {
      setOrdered(true);
      setTimeout(() => {
        alert("Order placed!");
        setOrdered(false);
        setCartItems([]);
      }, 3000);
    } else {
      alert("Please add items to the cart before ordering!");
    }
  };
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElements}
      <p className="total-cost">Total: {totalPrice}</p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={placeOrder}>{orderingButtonText}</button>
        ) : (
          <p>You have no items in the cart</p>
        )}
      </div>
    </main>
  );
}

export default Cart;
