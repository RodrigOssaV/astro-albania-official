import ShoppingCartItem from "@util/ShoppingCartItem";
import { useEffect, useState } from "preact/hooks";

export default function ShoppingCart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = localStorage.getItem("myShoppingCart");
    if (cart){
      setCartItems(JSON.parse(cart));
    }
  }, []);

  return (
    <div class="w-full sm:w-3/4 px-10 py-10 bg-chalet-green-400 rounded-xl md:mr-2">
      <div class="flex justify-between border-b pb-8">
        <h1 class="font-semibold text-2xl">Shopping Cart</h1>
        <h2 class="font-semibold text-2xl">{cartItems.length} Items</h2>
      </div>
      {
        cartItems.map((item) => (
          <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
            <ShoppingCartItem item={item} />
          </div>
        ))
      }

      <a href="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
        <svg
          class="fill-current mr-2 text-indigo-600 w-4"
          viewBox="0 0 448 512"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path>
        </svg>
        Continue Shopping
      </a>
    </div>
  );
}
