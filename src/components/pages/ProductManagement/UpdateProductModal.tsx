import React, { useState, useEffect } from "react";
import { IProduct } from "../../utils/apitypes";

interface UpdateProductModalProps {
  isOpen: boolean;
  productData: IProduct | null;
  onClose: () => void;
  onSubmit: (formData: {
    name: string;
    price: number;
    category: string;
    stock: number;
    description: string;
    imageUrl: string;
  }) => void;
}

const UpdateProductModal: React.FC<UpdateProductModalProps> = ({
  isOpen,
  productData,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    category: "",
    stock: 0,
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (productData) {
      setFormData({
        name: productData.name,
        price: productData.price,
        category: productData.category,
        stock: productData.stock,
        description: productData.description,
        imageUrl: productData.imageUrl,
      });
    }
  }, [productData]);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "stock" ? parseFloat(value) : value,
    });
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Call the onSubmit prop with form data
  };

  if (!isOpen || !productData) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Update Product</h2>
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
              min="0"
              step="0.01"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          {/* Stock */}
          <div className="mb-4">
            <label className="block text-gray-700">Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
              min="0"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductModal;
