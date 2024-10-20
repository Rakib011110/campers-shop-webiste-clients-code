import React, { useState } from "react";
import { useGetAllProductsQuery } from "../../../redux/api/productsApi"; // Adjust the path as necessary
import { IProduct } from "../../utils/apitypes";
import Title from "../../utils/Title";

// Define the Product interface to match the IProduct type used in your API.
interface Product extends IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  imageUrl: string;
  rating: number;
}

const Categories: React.FC = () => {
  // Fetch products using the query hook, with default fallback to an empty array
  const { data: products = [], isLoading, error } = useGetAllProductsQuery({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500">
        Failed to load products. Please try again later.
      </div>
    );
  }

  // Extract unique categories from products for display
  const uniqueCategories: string[] = Array.from(
    new Set(products.map((product: Product) => product.category))
  );

  // Filter products based on the selected category
  const filteredProducts: Product[] = selectedCategory
    ? products.filter(
        (product: Product) => product.category === selectedCategory
      )
    : [];

  // Handle category selection
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto px-4 mt-40">
      {/* Categories Section */}
      <Title
        bigTitle={"YOUR FAVOURITE CATEGORY"}
        smallTitle={"Click here for category"}
      />
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Categories</h1> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {uniqueCategories.map((category) => {
          const categoryImage = products.find(
            (product: Product) => product.category === category
          )?.imageUrl;
          return (
            <div
              key={category}
              className="bg-white rounded-full p-6 border-b-2 border-b-green-500  shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-center"
              onClick={() => handleCategoryClick(category)}>
              <h2 className="text-xl  font-semibold">{category}</h2>
              {categoryImage ? (
                <img
                  src={categoryImage}
                  alt={category}
                  className="w-full border border-blue-600 h-20 object-cover rounded-full mt-4"
                />
              ) : (
                <div className="w-full h-20 bg-gray-200 rounded-full mt-4 flex items-center justify-center">
                  <span>No Image</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Products Section */}
      {selectedCategory && (
        <div>
          {/* <h2 className="text-2xl font-bold mb-6">
            Products in {selectedCategory}
          </h2> */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-white p-6 h-70 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-70 border border-blue-800 p-5  object-cover rounded-xl mb-4"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-600">
              No products found in this category.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Categories;
