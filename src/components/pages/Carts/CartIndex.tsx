import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // FontAwesome shopping cart icon
import { useGetAllCartsQuery } from "../../../redux/api/cartApi";

const CartIndex = () => {
  const [cartData, setCartData] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);

  const {
    data: fetchedCartData,
    isLoading,
    error,
    refetch,
  } = useGetAllCartsQuery();

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 1000);

    return () => clearInterval(interval);
  }, [refetch]);

  useEffect(() => {
    if (fetchedCartData) {
      setCartData(fetchedCartData as any);
      const totalItems = fetchedCartData.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      setTotalItemsInCart(totalItems as any);
    }
  }, [fetchedCartData]);

  if (isLoading) return <p>Loading cart...</p>;
  if (error) return <p>Error loading cart data {cartData} </p>;

  return (
    <div className="relative">
      <FaShoppingCart size={24} />

      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
        {totalItemsInCart}
      </span>
    </div>
  );
};

export default CartIndex;
