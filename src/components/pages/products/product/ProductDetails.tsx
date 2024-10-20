import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGetProductByIdQuery } from "../../../../redux/api/productsApi";
import { useAddToCartMutation } from "../../../../redux/api/cartApi";
import Zoom from "react-medium-image-zoom";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id || "");
  const [addToCart] = useAddToCartMutation();
  const [quantity, setQuantity] = useState<number>(1);

  if (isLoading) {
    console.log("Product data is loading...");
    return <p>Loading...</p>;
  }
  if (error) {
    console.error("Error loading product details: ", error);
    return <p>Error loading product details.</p>;
  }

  // Handle adding product to cart
  const handleAddToCart = async () => {
    console.log("Attempting to add product to cart: ", {
      productId: product?._id,
      quantity,
    });

    try {
      const result = await addToCart({
        productId: product?._id as string,
        quantity,
      }).unwrap();
      console.log("Successfully added to cart: ", result);
      alert("Product added to cart!");
    } catch (err) {
      console.error("Failed to add to cart: ", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg flex">
      {/* Product Image */}

      <div className="w-1/2">
        <Zoom>
          <img
            src={product?.imageUrl}
            alt={product?.name}
            className="w-full h-auto rounded-md"
          />
        </Zoom>
      </div>

      {/* Product Details */}
      <div className="w-1/2 pl-8">
        <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
        <p className="text-lg text-gray-600 mt-4">{product?.description}</p>

        {/* Price */}
        <div className="text-2xl font-semibold text-green-600 mt-6">
          ${product?.price.toFixed(2)}
        </div>

        {/* Rating */}
        <div className="flex items-center mt-4">
          <span className="text-yellow-500 text-xl">
            {"★".repeat(Math.round(product?.rating || 0))}
          </span>
          <span className="ml-2 text-gray-600">
            ({product?.rating.toFixed(1)} / 5)
          </span>
        </div>

        {/* Stock Information */}
        <div className="mt-4">
          {(product?.stock as any) > 0 ? (
            <p className="text-green-500 text-lg">In Stock: {product?.stock}</p>
          ) : (
            <p className="text-red-500 text-lg">Out of Stock</p>
          )}
        </div>

        {/* Category */}
        <div className="mt-2 text-gray-500">
          <p>Category: {product?.category}</p>
        </div>

        {/* Quantity Input */}
        <div className="mt-4">
          <label className="block text-gray-700">Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              console.log("Quantity changed: ", e.target.value);
              setQuantity(Number(e.target.value));
            }}
            min={1}
            max={product?.stock || 1}
            className="border rounded-md p-2 mt-2 w-16 text-center"
          />
        </div>

        {/* Add to Cart Button */}
        <div className="mt-8">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-all"
            disabled={product?.stock === 0}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
