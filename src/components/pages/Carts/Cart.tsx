import { useEffect, useState } from "react";
import {
  useGetAllCartsQuery,
  useRemoveFromCartMutation,
  useUpdateCartQuantityMutation,
} from "../../../redux/api/cartApi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    data: cartItemsFromAPI = [],
    isLoading,
    isError,
  } = useGetAllCartsQuery();
  const [removeFromCart] = useRemoveFromCartMutation();
  const [updateCartQuantity] = useUpdateCartQuantityMutation();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    } else {
      setCartItems(cartItemsFromAPI);
    }
  }, [cartItemsFromAPI]);

  // Save cart items to localStorage when cartItems state changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  // Calculate total price when cartItems change
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item?.product?.price * item.quantity,
      0
    );
    setTotalPrice(total as number);
  }, [cartItems]);

  // Warning for page refresh when cart is not empty
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        e.preventDefault();
        e.returnValue = ""; // Chrome requires returnValue to be set
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  const handleRemoveItem = async (productId: string) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      try {
        await removeFromCart({ productId }).unwrap();
        const updatedCartItems = cartItems.filter(
          (item) => item.product._id !== productId
        );
        setCartItems(updatedCartItems);
      } catch (error) {
        console.error("Error removing product:", error);
      }
    }
  };

  const handleQuantityChange = async (
    productId: string,
    currentQuantity: number,
    delta: number
  ) => {
    const newQuantity = currentQuantity + delta;
    if (newQuantity < 1) return;

    try {
      await updateCartQuantity({ productId, quantity: newQuantity }).unwrap();
      const updatedCartItems = cartItems.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (isLoading) return <p>Loading cart...</p>;
  if (isError) return <p>Error loading cart.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold">Cart Items</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="mt-6">
          <ul>
            {cartItems.map((item: any) => (
              <li key={item._id} className="flex justify-between p-4 border-b">
                <div className="flex items-center">
                  <img
                    src={item?.product?.imageUrl}
                    alt={item?.product?.name}
                    className="w-16 h-16 rounded-md mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item?.product?.name}
                    </h2>
                    <p className="text-gray-600">
                      ${item?.product?.price?.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.product._id, item.quantity, -1)
                    }
                    className="bg-gray-200 px-2 py-1 rounded-md mr-2"
                    disabled={item.quantity <= 1}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.product._id, item.quantity, 1)
                    }
                    className="bg-gray-200 px-2 py-1 rounded-md ml-2"
                    disabled={item.quantity >= item.product.stock}>
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.product._id)}
                    className="ml-4 bg-red-600 text-white px-4 py-1 rounded-md">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">
              Total Price: ${totalPrice.toFixed(2)}
            </h2>
            <button
              className="btn mt-4 btn-primary"
              onClick={handleCheckout}
              disabled={cartItems.length === 0}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
