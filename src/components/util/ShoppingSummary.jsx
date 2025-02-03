import { useEffect, useState } from "preact/hooks";
import { formatCurrency } from "@hooks/formatCurrency";
import { products } from "@constants/product";

export default function ShoppingSummary() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = localStorage.getItem("myShoppingCart");
    if (cart){
      setCartItems(JSON.parse(cart));
    }
  }, [])

  const total = cartItems.reduce((total, cartItem) => {
    const item = products.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <div class="w-full sm:w-1/4 md:w-1/2 px-10 py-10 bg-chalet-green-400 rounded-xl mt-2 md:mt-0">
      <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div class="flex justify-between mt-10 mb-5">
        <span class="font-semibold text-sm uppercase">Items {cartItems.length}</span>
        <span class="font-semibold text-sm">{formatCurrency(total)}</span>
      </div>
      <div>
        <label class="font-medium inline-block mb-3 text-sm uppercase">
          Reparto
        </label>
        <select class="block p-2 text-gray-600 w-full text-sm">
          <option>Reparto domicilio - $10.000</option>
        </select>
      </div>
      {/* <div class="py-10">
        <label
          for="promo"
          class="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          class="p-2 text-sm w-full"
        />
      </div> */}
      {/* <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
        Apply
      </button> */}
      <div class="border-t mt-8">
        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Checkout
        </button>
      </div>
    </div>
  );
}
