import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from '../hooks/useHover'
const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(Context);
  const [hovered, ref] = useHover();
  let trashButtonClassName = hovered
    ? "ri-delete-bin-fill"
    : "ri-delete-bin-line";
  return (
    <div className="cart-item">
      <i
        onClick={() => removeFromCart(item)}
        ref={ref}
        className={trashButtonClassName}
      ></i>
      <img src={item.url} width="130px" alt="small img" />
      <p>£1.99</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default CartItem;
