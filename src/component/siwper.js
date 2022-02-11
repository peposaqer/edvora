import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Img from "../img/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg"

export default function App() {
  return (
    <>
      <Swiper
        // slidesPerView={4}
        spaceBetween={20}
        slidesPerGroup={1}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          // when window width is >= 640px
          680: {
            // width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            // width: 768,
            slidesPerView: 2,
          },
          990: {
            // width: 768,
            slidesPerView: 3,
          },
          1200: {
            // width: 768,
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="SwiperSlide">
            <div className="img">
              <img src={Img} alt="" />
              <div className="text-start">
                <h1>Product Name</h1>
                <h2>Brand Name</h2>
                <span>$ 29.99</span>
              </div>
            </div>
            <div className="">
              <h3>Location <span>Data: 10:12:2021</span></h3>
              <h3>Description of the Product / Item</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="SwiperSlide">
            <div className="img">
              <img src={Img} alt="" />
              <div className="text-start">
                <h1>Product Name</h1>
                <h2>Brand Name</h2>
                <span>$ 29.99</span>
              </div>
            </div>
            <div className="">
              <h3>Location <span>Data: 10:12:2021</span></h3>
              <h3>Description of the Product / Item</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="SwiperSlide">
            <div className="img">
              <img src={Img} alt="" />
              <div className="text-start">
                <h1>Product Name</h1>
                <h2>Brand Name</h2>
                <span>$ 29.99</span>
              </div>
            </div>
            <div className="">
              <h3>Location <span>Data: 10:12:2021</span></h3>
              <h3>Description of the Product / Item</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="SwiperSlide">
            <div className="img">
              <img src={Img} alt="" />
              <div className="text-start">
                <h1>Product Name</h1>
                <h2>Brand Name</h2>
                <span>$ 29.99</span>
              </div>
            </div>
            <div className="">
              <h3>Location <span>Data: 10:12:2021</span></h3>
              <h3>Description of the Product / Item</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="SwiperSlide">
            <div className="img">
              <img src={Img} alt="" />
              <div className="text-start">
                <h1>Product Name</h1>
                <h2>Brand Name</h2>
                <span>$ 29.99</span>
              </div>
            </div>
            <div className="">
              <h3>Location <span>Data: 10:12:2021</span></h3>
              <h3>Description of the Product / Item</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="SwiperSlide">
            <div className="img">
              <img src={Img} alt="" />
              <div className="text-start">
                <h1>Product Name</h1>
                <h2>Brand Name</h2>
                <span>$ 29.99</span>
              </div>
            </div>
            <div className="">
              <h3>Location <span>Data: 10:12:2021</span></h3>
              <h3>Description of the Product / Item</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="SwiperSlide">
            <div className="img">
              <img src={Img} alt="" />
              <div className="text-start">
                <h1>Product Name</h1>
                <h2>Brand Name</h2>
                <span>$ 29.99</span>
              </div>
            </div>
            <div className="">
              <h3>Location <span>Data: 10:12:2021</span></h3>
              <h3>Description of the Product / Item</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="SwiperSlide">
            <div className="img">
              <img src={Img} alt="" />
              <div className="text-start">
                <h1>Product Name</h1>
                <h2>Brand Name</h2>
                <span>$ 29.99</span>
              </div>
            </div>
            <div className="">
              <h3>Location <span>Data: 10:12:2021</span></h3>
              <h3>Description of the Product / Item</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="SwiperSlide">
            <div className="img">
              <img src={Img} alt="" />
              <div className="text-start">
                <h1>Product Name</h1>
                <h2>Brand Name</h2>
                <span>$ 29.99</span>
              </div>
            </div>
            <div className="">
              <h3>Location <span>Data: 10:12:2021</span></h3>
              <h3>Description of the Product / Item</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
