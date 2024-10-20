import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../../utils/Button";
import { IProduct } from "../../../utils/apitypes";
import { useGetAllProductsQuery } from "../../../../redux/api/productsApi";
import Title from "../../../utils/Title";

const FeaturedProducts = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  // Fetching featured products
  const { data: products, isLoading } = useGetAllProductsQuery({ limit: 4 });

  if (isLoading) {
    return <div>Loading...</div>; // You can add a spinner or a loading indicator here
  }

  return (
    <>
      <div className="containter mt-40 mb-10">
        <Title bigTitle={"Featured Products"} smallTitle={"Choose Now"} />
      </div>

      <motion.div
        style={{
          background: "linear-gradient(145deg, #0d053d, #15086b)",
          boxShadow: "5px 5px 10px #0c0535, -5px -5px 5px #170875 ",
        }}
        className="container h-80 mx-auto mb-10 overflow-x-hidden border rounded-md text-white">
        <motion.div
          ref={carousel}
          drag="x"
          whileDrag={{ scale: 0.95 }}
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -width }}
          dragTransition={{ bounceDamping: 30 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex will-change-transform cursor-grab active:cursor-grabbing">
          {products?.map((product: IProduct) => (
            <motion.div
              key={product._id}
              className="min-w-[22rem] min-h-[15rem] p-2">
              <img
                src={product.imageUrl} // Adjust this field based on your product model
                width={300}
                height={400}
                alt={product.name}
                className="w-full h-80 object-cover pointer-events-none rounded-md"
              />
              <article className="p-4">
                <h1 className="text-xl font-semibold">{product.name}</h1>
                <p className="text-base">{product.description}</p>
                <div className="mt-2">
                  <Link
                    to={`/products/${product._id}`} // Adjust the route according to your application
                    className="flex items-center gap-1 text-blue-600 dark:text-white">
                    <Button
                      children1={"View Details"}
                      children2={"View Details"}
                    />
                    <ChevronRight />
                  </Link>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default FeaturedProducts;
