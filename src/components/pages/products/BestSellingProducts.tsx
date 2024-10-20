import ProductCard from "../../UI/ProductCard";
import { useGetAllProductsQuery } from "../../../redux/api/productsApi";
import Title from "../../utils/Title";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";
import { IProduct } from "../../utils/apitypes";

const RecommendedProducts: React.FC = () => {
  // Sample data for recommended products
  const { data: productsData } = useGetAllProductsQuery({});
  console.log(productsData);

  return (
    <div className="p-6 mt-32">
      <Title bigTitle={"Best Selling"} smallTitle={"Recommended Products"} />

      <div className="flex flex-wrap  justify-center gap-10">
        {productsData?.slice(6, 10)?.map((product: IProduct) => (
          <ProductCard
            imageUrl={product.imageUrl}
            key={product._id}
            title={product.name}
            description={product.description}
            onReadMore={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link to={"/products"}>
          <Button children1={"Vew More"} children2={"Click"} />
        </Link>
      </div>
    </div>
  );
};

export default RecommendedProducts;
