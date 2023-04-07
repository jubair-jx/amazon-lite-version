import { getShoppingCart } from "../../utilities/fakedb";

const CustomLoader = async () => {
  const data = await fetch("products.json");
  const products = await data.json();

  let savedCart = [];
  const storeCart = getShoppingCart();
  for (const id in storeCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = storeCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  return savedCart;
};

export default CustomLoader;
