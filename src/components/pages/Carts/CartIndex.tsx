import React, { useEffect, useState } from "react";
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
  //   console.log(fetchedCartData);
  // Fetch cart data every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      refetch(); // Refetch cart data
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [refetch]);

  // Update cart data and total items
  useEffect(() => {
    if (fetchedCartData) {
      setCartData(fetchedCartData);
      const totalItems = fetchedCartData.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      setTotalItemsInCart(totalItems);
    }
  }, [fetchedCartData]);

  if (isLoading) return <p>Loading cart...</p>;
  if (error) return <p>Error loading cart data.</p>;

  return (
    <div className="relative">
      {/* Cart Icon */}
      <FaShoppingCart size={24} />
      {/* Show the number of items in the cart */}
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
        {totalItemsInCart}
      </span>
    </div>
  );
};

export default CartIndex;
