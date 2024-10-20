interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  onReadMore: () => void; // Callback for Read More button
}

const ProductCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative  mt-20 flex w-80 flex-col border border-blue-600 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img src={imageUrl} alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0"></div>
    </div>
  );
};

export default ProductCard;
