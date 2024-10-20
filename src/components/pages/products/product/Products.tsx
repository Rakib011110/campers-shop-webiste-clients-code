import React, { useState } from "react";
import { useGetAllProductsQuery } from "../../../../redux/api/productsApi";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Button from "../../../utils/Button";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

const Products = () => {
  const { data: products = [], isLoading, error } = useGetAllProductsQuery({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "min" | "max"
  ) => {
    const newValue = Number(e.target.value);
    setPriceRange((prev) => [
      type === "min" ? newValue : prev[0],
      type === "max" ? newValue : prev[1],
    ]);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as "asc" | "desc");
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setPriceRange([0, 1000]);
    setSortOrder(null);
  };

  const filteredProducts = products
    .filter(
      (product: Product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product: Product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .filter(
      (product: Product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a: Product, b: Product) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Products</h1>

      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border px-4 py-2 rounded"
        />

        <select
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="border px-4 py-2 rounded"
          value={selectedCategory || ""}>
          <option value="">All Categories</option>
          <option value="Tents">Tents</option>
          <option value="Camping Gear">Camping Gear</option>
          <option value="Safety">Safety</option>
          <option value="Backpacks">Backpacks</option>
        </select>

        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min Price"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, "min")}
            className="border px-4 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, "max")}
            className="border px-4 py-2 rounded"
          />
        </div>

        <select
          onChange={handleSortChange}
          className="border px-4 py-2 rounded">
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        <button
          onClick={resetFilters}
          className="border px-4 py-2 rounded bg-red-500 text-white">
          Clear Filters
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product: Product) => (
          <div
            key={product._id}
            className="border border-blue-600 rounded-xl bg-white shadow-md p-4">
            <Zoom>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-40 w-full border p-3 border-blue-800 object-cover rounded-md mb-4"
              />
            </Zoom>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold mb-4">${product.price}</p>
            <Link to={`/products/${product._id}`}>
              <Button
                children2={"Click Here"}
                children1={"View Details"}></Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
