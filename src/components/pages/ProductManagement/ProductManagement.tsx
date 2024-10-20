import { useEffect, useState } from "react";
import { IProduct } from "../../utils/apitypes";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "../../../redux/api/productsApi";
import UpdateProductModal from "./UpdateProductModal";
// Import the modal

const ProductManagement = () => {
  const {
    data: products = [],
    isLoading,
    isError,
    refetch,
  } = useGetAllProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 1000);

    return () => clearInterval(interval);
  }, [refetch]);

  // Handle delete with confirmation
  const handleDeleteProduct = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      try {
        await deleteProduct(id).unwrap();
        console.log("Product deleted successfully");
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  // Handle open modal with product data
  const openUpdateModal = (product: IProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Handle close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle update submission
  const handleUpdateSubmit = async (formData: {
    name: string;
    price: number;
    category: string;
    stock: number;
    description: string;
    imageUrl: string;
  }) => {
    if (!selectedProduct) return;
    try {
      await updateProduct({
        id: selectedProduct._id as any,
        data: formData,
      }).unwrap();
      console.log("Product updated successfully");
      refetch(); // Refetch product data after update
      closeModal(); // Close modal after successful update
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>There was an error loading the products.</p>;

  return (
    <div className="max-w-7xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>

      {/* Create New Product Button */}
      <div className="mb-6">
        <Link
          to="/create-product"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
          + Create New Product
        </Link>
      </div>

      {/* Product Table */}
      <table className="table-auto w-full bg-white border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Stock</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: IProduct) => (
            <tr key={product._id} className="border-b">
              <td className="p-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-20 h-20 object-cover"
                />
              </td>
              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.category}</td>
              <td className="p-4">${product.price.toFixed(2)}</td>
              <td className="p-4">{product.stock}</td>
              <td className="p-4">
                <button
                  onClick={() => openUpdateModal(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-500">
                  Update
                </button>
                <button
                  onClick={() => handleDeleteProduct(product._id as any)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      <UpdateProductModal
        isOpen={isModalOpen}
        productData={selectedProduct}
        onClose={closeModal}
        onSubmit={handleUpdateSubmit}
      />
    </div>
  );
};

export default ProductManagement;
