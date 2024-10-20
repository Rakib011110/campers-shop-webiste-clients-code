import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Banner = () => {
  return (
    <div className="banner-container ">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover
        emulateTouch>
        <div>
          <img
            src="https://res.cloudinary.com/dqpohzbea/image/upload/v1729428664/Navy_Black_Minimalist_Personal_Branding_Youtube_Banner_zktpy7.png"
            alt="Slide 1"
          />
          <p className="legend">Welcome To Our Shop</p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dkm4xad0x/image/upload/v1728839524/Pink_White_Photocentric_Feminine_Shopping_Fashion_YouTube_Channel_Art_Banner_szzzvu.png"
            alt="Slide 2"
          />
          <p className="legend">Slide 2 Caption</p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dkm4xad0x/image/upload/v1728839575/White_Red_Orange_Photocentric_Fashion_Lifestyle_Shopping_Bags_Youtube_Banner_cyk5kc.png"
            alt="Slide 3"
          />
          <p className="legend">Slide 3 Caption</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dkm4xad0x/image/upload/v1728839524/Pink_White_Photocentric_Feminine_Shopping_Fashion_YouTube_Channel_Art_Banner_szzzvu.png" />
          <p className="legend">Slide 3 Caption</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
