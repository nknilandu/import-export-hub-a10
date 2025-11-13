import { NavLink } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay,  Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <div 
          data-aos="fade-in"
          data-aos-delay="100"
          >
      {/* ========== */}

      <Swiper
        
        className="mySwiper"

        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
      >
        {/* slider 1   */}
        <SwiperSlide>
          <div className="w-full h-[300px] sm:h-[550px] bg-[linear-gradient(45deg,#000000ba,#00000000),url(./assets/slider_1_img.jpg)] bg-no-repeat bg-cover bg-center">
            <div className="h-full max-w-7xl mx-auto px-5 flex justify-center">
              <div className="h-full sm:w-2/3 flex flex-col justify-center items-center gap-5 text-white overflow-hidden">
                <h3 className="text-3xl sm:text-6xl font-black text-center">
                  Global Trade Made Simple
                </h3>
                <p className="text-sm leading-snug  sm:text-xl max-w-11/12 text-center">
                  Build reliable global partnerships and expand your reach effortlessly. Simplify trade and unlock new opportunities across international markets.  
                </p>
                <NavLink to="/all-products">
                  <button className="btn btn-outline rounded-full ">
                    Browse Products
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>

        

        {/* silder 2 */}
        <SwiperSlide>
          <div className="w-full h-[300px] sm:h-[550px] bg-[linear-gradient(45deg,#000000ba,#00000000),url(./assets/slider_2_img.jpg)] bg-no-repeat bg-cover bg-center">
            <div className="h-full max-w-7xl mx-auto px-5 flex justify-center">
              <div className="h-full sm:w-2/3 flex flex-col justify-center items-center gap-5 text-white overflow-hidden">
                <h3 className="text-3xl sm:text-6xl font-black text-center">
                  Import Premium Products
                </h3>
                <p className="text-sm leading-snug  sm:text-xl max-w-11/12 text-center">
                  Source high-quality products from trusted exporters across the globe, streamline your supply chain, and expand your reach in international markets.  
                </p>
                <NavLink to="/all-products">
                  <button className="btn btn-outline rounded-full ">
                    Brouse Products
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        

        {/* slider 3 */}
        <SwiperSlide>
          <div className="w-full h-[300px] sm:h-[550px] bg-[linear-gradient(45deg,#000000ba,#00000000),url(./assets/slider_3_img.jpg)] bg-no-repeat bg-cover bg-center">
            <div className="h-full max-w-7xl mx-auto px-5 flex justify-center">
              <div className="h-full sm:w-2/3 flex flex-col justify-center items-center gap-5 text-white overflow-hidden">
                <h3 className="text-3xl sm:text-6xl font-black text-center">
                  Export Your Products
                </h3>
                <p className="text-sm leading-snug  sm:text-xl max-w-11/12 text-center">
                  Expand into international markets and scale your export business with ease. Our platform helps you connect, trade smarter, and grow globally.
                </p>
                <NavLink to="/all-products">
                  <button className="btn btn-outline rounded-full ">
                    Brouse Products
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
