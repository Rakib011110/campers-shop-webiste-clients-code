import RecommendedProducts from "../products/BestSellingProducts";
import Categories from "../products/Categories";
import Banner from "./Bannner";
import Faq from "./FAQ/Faq";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="container mx-auto">
        <RecommendedProducts />
      </div>
      <div className="container mx-auto">
        <Categories />
      </div>
      <div className="container mx-auto">
        <FeaturedProducts />
      </div>
      <div className="container mx-auto">
        <WhyChooseUs />
      </div>
      <div className="container mx-auto">
        <Faq />
      </div>
    </div>
  );
};

export default Home;
