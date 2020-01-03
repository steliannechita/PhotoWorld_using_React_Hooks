import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const [hovered, ref] = useHover();
  const {
    toggleIsFavorited,
    addToCart,
    cartItems,
    removeFromCart
  } = useContext(Context);

  const heartIcon = img.isFavorite ? (
    <i
      onClick={() => toggleIsFavorited(img.id)}
      className="ri-heart-fill favorite"
    ></i>
  ) : hovered ? (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleIsFavorited(img.id)}
    ></i>
  ) : null;

  const added = cartItems.some(image => image.id === img.id);

  const addCartIcon = added ? (
    <i
      onClick={() => removeFromCart(img)}
      className="ri-shopping-cart-fill cart"
    ></i>
  ) : (
    hovered && (
      <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    )
  );
  return (
    <div ref={ref} className={`${className} image-container`}>
      <a target="_blank" rel="noopener noreferrer" href={img.url}>
        <img src={img.url} className="image-grid" alt="item" />
      </a>
      {
        <div>
          {heartIcon}
          {addCartIcon}
        </div>
      }
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  })
};

export default Image;
