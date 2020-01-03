import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data));
  }, []);

  const addToCart = image =>{
    setCartItems(prevState=>prevState.concat(image))
    
}
const removeFromCart=itemToRemove=> {
  setCartItems(prevItems => prevItems.filter(item=>item.id!==itemToRemove.id)) 
}

  const toggleIsFavorited = id => {
    const updatedPhotos = allPhotos.map(image => {
      if (image.id === id) {
        return { ...image, isFavorite: !image.isFavorite };
      }
      return image;
    });
    setAllPhotos(updatedPhotos);
    };
    
  return (
    <Context.Provider value={{ allPhotos, toggleIsFavorited, addToCart, cartItems, removeFromCart, setCartItems }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
