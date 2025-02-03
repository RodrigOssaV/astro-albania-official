import { useEffect, useState } from "preact/hooks";

export default function ButtonShopping({ product }){
  const [cartItems, setCartItems] = useState([]);
  const [buttonText, setButtonText] = useState('Agrega al carrito');

  function increaseCartQuantity(id) {
    setCartItems(currItems => {
      if(currItems.find(item => id === item.id) == null){
        return [...currItems, {id, quantity: 1}]
      }else{
        return cartItems.map(item => {
          if(item.id === id){
            return {... item, quantity: item.quantity +1}
          }else{
            return item
          }
        });
      }
    });

    localStorage.setItem("myShoppingCart", JSON.stringify(cartItems));
    setButtonText('Item agregado');
  }

  if(cartItems.length > 0){
    localStorage.setItem("myShoppingCart", JSON.stringify(cartItems));
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
    <button 
      type="button"
      onClick={() => increaseCartQuantity(product.id)}
      class="mt-4 px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full">
        {buttonText}
    </button>
  )
}