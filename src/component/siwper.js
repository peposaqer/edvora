import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Virtual, Navigation } from "swiper";

const gitHubUrl = "https://assessment-edvora.herokuapp.com";

export default function App() {
  const [userData, setUserData] = useState([]);
  const getGitHubUserWithFetch = async () => {
    const response = await axios.get(gitHubUrl);
    setUserData(response.data);
  };

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="filters">
                <h1>Filters</h1>
                <div className="dropdown">
                  <button
                    className="dropdown-button dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {userData.map((product, index) => {
                      return (
                        <li>
                          <a href="#" virtualIndex={index + 1}>
                            {product.product_name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="dropdown-button dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    State
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {userData.map((state, index) => {
                      return (
                        <li>
                          <a href="#" virtualIndex={index + 1}>
                            {state.address.state}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="dropdown-button dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    City
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {userData.map((state, index) => {
                      return (
                        <li>
                          <a href="#" virtualIndex={index + 1}>
                            {state.address.city}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="products">
                <h1>Edvora</h1>
                <span>Products</span>
                <h3>Product Name</h3>
              </div>
              <Swiper
                modules={[Virtual, Navigation]}
                spaceBetween={20}
                navigation={true}
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
                virtual
              >
                {userData.map((slideContent, index) => {
                  return (
                    <SwiperSlide key={index} virtualIndex={index + 1}>
                      <div className="SwiperSlide">
                        <div className="img">
                          <img src={slideContent.image} alt="" />
                          <div className="text-start">
                            <h1>{slideContent.product_name}</h1>
                            <h2>{slideContent.brand_name}</h2>
                            <span>$ {slideContent.price}</span>
                          </div>
                        </div>
                        <div className="">
                          <h3>
                            Location <span>Data: {slideContent.date}</span>
                          </h3>
                          <h3>{slideContent.discription}</h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="products">
                <h3>Product Name </h3>
              </div>
              <Swiper
                modules={[Virtual, Navigation]}
                spaceBetween={20}
                navigation={true}
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
                virtual
              >
                {userData.map((slideContent, index) => {
                  return (
                    <SwiperSlide key={index} virtualIndex={index + 1}>
                      <div className="SwiperSlide">
                        <div className="img">
                          <img src={slideContent.image} alt="" />
                          <div className="text-start">
                            <h1>{slideContent.product_name}</h1>
                            <h2>{slideContent.brand_name}</h2>
                            <span>$ {slideContent.price}</span>
                          </div>
                        </div>
                        <div className="">
                          <h3>
                            Location <span>Data: {slideContent.date}</span>
                          </h3>
                          <h3>{slideContent.discription}</h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
