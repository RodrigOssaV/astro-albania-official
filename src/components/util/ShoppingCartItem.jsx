import { products } from "@constants/product";

export default function ShoppingCartItem({item}) {

  const product = products.find((product) => product.id === item.id);
  // console.log('product: ', product);
  // console.log('item: ', item);

  return (
    <>
      <div class="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={product.cover}
          alt="Black Leather Purse"
          class="h-full object-center object-cover md:block hidden rounded-xl"
        />
        <img
          src={product.cover}
          alt="Black Leather Purse"
          class="md:hidden w-full h-full object-center object-cover rounded-xl"
        />
      </div>
      <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
        <div class="flex items-center justify-between w-full">
          <p class="text-base font-black leading-none text-gray-800">
            {product.name}
          </p>
        </div>
        <p class="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
        <p class="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
        <p class="w-96 text-xs leading-3 text-gray-600">
          Composition: 100% calf leather
        </p>
        <div class="flex items-center justify-between pt-5">
          <div class="flex itemms-center">
            <p class="text-xs leading-3 underline text-red-500 cursor-pointer">
              Remove
            </p>
          </div>
          <p class="text-base font-black leading-none text-gray-800">${product.price}</p>
        </div>
      </div>
    </>
  );
}
