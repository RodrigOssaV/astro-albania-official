import { useEffect, useState } from "preact/hooks";

export default function ButtonDeleteItem({ product }) {

  const [cartItems, setCartItems] = useState([]);

  function increaseCartQuantity(id) {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id).quantity === 1){
          return currItems.filter(item => item.id !== id)
      }else {
          return currItems.map(item => {
              if(item.id === id){
                  return { ...item, quantity: item.quantity - 1 }
              } else {
                  return item
              }
          })
      }
    })
    
    localStorage.setItem("myShoppingCart", JSON.stringify(cartItems));
    location.reload();
  }

  useEffect(() => {
    const cart = localStorage.getItem("myShoppingCart");
    if (cart){
      setCartItems(JSON.parse(cart));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("myShoppingCart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <p
      class="text-xs leading-3 underline text-red-500 cursor-pointer"
      onClick={() => increaseCartQuantity(product.id)}
    >
      Remove
    </p>
  );
}
