import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/swiper-bundle.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../App.css";
import image from "../../Images/tld-category-01.jpg";

import domainCategories from "../../Constants/domainCategories.js";

SwiperCore.use([Navigation]);

function CategoryBox(props) {
  {
    var category = [];
    for (var i = 0; i < domainCategories.length; i++) {
      category.push(
        <SwiperSlide key={`slide-${i + 1}`} tag="div">
          <div class="tld-category-box">
            <div class="tld-category-img">
              <img src={domainCategories[i].imgUrl} alt="" />
            </div>
            <div class="tld-category-info">
              <h5>
                <a href="#">{domainCategories[i].category}</a>
              </h5>
              <div class="d-none d-md-block">
                <a href="#" class="btn btn-xs btn-white btn-outline">
                  View Domains
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    }
  }

  return (
    <>
      <div className="section-row overflow-hidden">
        <div className="container">
          <div class="section-title">
            <h2>
              Porta pellentesque <br />
              feugiat euismod.
            </h2>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum.</p>
          </div>
          <div className="tld-category-slider-box">
            <div class="tld-category-slider swiper ">
              <Swiper
                id="main"
                tag="div"
                wrapperTag="div"
                direction="horizontal"
                slidesPerView={2.5}
                spaceBetween={15}
                slidesOffsetAfter
                navigation={{
                  nextEl: ".swiper-button-nex",
                  prevEl: ".swiper-button-pre",
                }}
                className="tld-category-slider"
              >
                {category}
              </Swiper>
              <div class="slidercategory-nav">
                <div class="swiper-button-pre"></div>
                <div class="swiper-button-nex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryBox;
