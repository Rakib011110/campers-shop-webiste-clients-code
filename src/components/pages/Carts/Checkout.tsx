import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePlaceOrderMutation } from "../../../redux/api/orderApi";
import { useGetAllCartsQuery } from "../../../redux/api/cartApi";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [placeOrder] = usePlaceOrderMutation();
  const { data: cartItems = [], isLoading, isError } = useGetAllCartsQuery();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item?.product?.price * item.quantity,
    0
  ) as any;

  const handlePlaceOrder = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page refresh

    // Prepare order data
    const orderData = {
      name,
      email,
      phone,
      address,
      paymentMethod,
      products: cartItems.map((item: any) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      totalAmount: totalPrice,
    };

    console.log("Placing order with data:", orderData);

    try {
      await placeOrder(orderData).unwrap();
      alert("Order placed successfully!");
      navigate("/order-success");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  if (isLoading) return <p>Loading cart...</p>;
  if (isError) return <p>Error loading cart.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <form className="mt-6 space-y-4" onSubmit={handlePlaceOrder}>
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Delivery Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border rounded">
            <option value="COD">Cash on Delivery</option>
          </select>
        </div>

        {/* Display total price */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </h2>
        </div>

        <button className="btn btn-primary" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
