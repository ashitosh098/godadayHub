import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/swiper-bundle.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectFade, Thumbs, Controller } from "swiper";
import { useState } from "react";

import tlds from "../../Constants/tldData";
import NavigationBar from "./NavigationBar";
import SearchIcon from "../Logos/SearchIcon";

// Import Swiper styles

SwiperCore.use([Navigation]);

function TldsMenu(props) {
  {
    var [thumbsSwiper, setThumbsSwiper] = useState(null);

    var tl = [];
    var tlist = [];
    tlds.map((tld, index) => {
      return tl.push(
        <SwiperSlide key={`slide-${index}`} tag="div">
          <div class="hero-banner-slider-box d-flex align-items-end align-items-md-center">
            <div
              class="banner-img d-none d-md-block"
              style={{ backgroundImage: `url(${tld[1]})` }}
            ></div>
            <div
              class="banner-img d-block d-md-none"
              style={{ backgroundImage: `url(${tld[1]})` }}
            ></div>
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-md-8">
                  <div class="hero-text mt-md-auto text-white">
                    <h1>
                      Own what <br />
                      you do.
                    </h1>
                    <div class="hero-text-details">
                      <p>
                        Find the perfect domain name that lets folks know who
                        you are and what you're all about
                      </p>
                    </div>
                    <div class="tld-search">
                      <form action="#">
                        <div class="tld-search-form">
                          <span class="search-ico">
                            <SearchIcon />
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder={"pizza" + tld[0]}
                          />
                          <button
                            type="submit"
                            class="search-btn btn btn-primary"
                          >
                            <span class="search-ico">
                              <SearchIcon />
                            </span>
                            <span>Search Domains</span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="tld-link">
                      <a href="#">
                        Learn more about <span>{tld[0]}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
    tlds.map((tld, index) => {
      tlist.push(
        <SwiperSlide key={`slide-${index}`} tag="div">
          <span class="tld-name">{tld[0]}</span>
        </SwiperSlide>
      );
    });
  }

  return (
    <>
      <div class="home-slider-main-box">
        <div class="home-slider-box">
          <div class="home-slider swiper">
            <Swiper
              id="main"
              tag="div"
              wrapperTag="div"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              slidesPerView={1}
              loop
              modules={[EffectFade, Thumbs, Controller]}
              effect="fade"
            >
              {tl}
            </Swiper>
          </div>
        </div>

        <div class="tld-slider-main-box">
          <div class="tld-slider-box">
            <Swiper
              id="main"
              tag="div"
              wrapperTag="div"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              slidesPerView={14}
              loop
              direction="vertical"
              className="tld-slider"
              loopedSlides={23}
              modules={[Thumbs]}
              watchSlidesProgress
              onSwiper={setThumbsSwiper}
              slideToClickedSlide
            >
              {tlist}
            </Swiper>
            <div class="slider-nav">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TldsMenu;
