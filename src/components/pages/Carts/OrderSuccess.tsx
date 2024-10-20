import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        Order Placed Successfully!
      </h1>
      <p className="text-lg mb-6">
        Thank you for your purchase. Your order has been placed and is being
        processed. You will receive a confirmation email shortly.
      </p>
      <p className="text-lg mb-6">
        If you have any questions, feel free to contact our support team.
      </p>
      <Link
        to="/products"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
