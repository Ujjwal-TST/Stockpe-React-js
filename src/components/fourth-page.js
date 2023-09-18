import React from "react";
// import img from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import caro_1 from "../assets/caro1.png";
import caro_2 from "../assets/caro2.png";
import caro_3 from "../assets/caro3.png";
import left_button from "../assets/left_button.svg";
import right_button from "../assets/right_button.svg";

const FourthPage = () => {
  const settings = {
    dots: false,
  };
  return (
    <div className="tw-text-white">
      {/* <!-- Stockpe Page 4 --> */}
      <div className="tw-h-full   tw-bg-primaryBg mobile-xs:tw-py-8 md:py-34">
        <div className="tw-max-w-screen-3xl  tw-mx-auto">
          <Swiper
            loop
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              // reverseDirection:true
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".project-button-next",
              prevEl: ".project-button-prev",
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <div className="">
              <div
                className={` project-button-prev md:tw-left-20 mobile-xs:tw-left-4 tw-absolute tw-z-50 tw-cursor-pointer tw-top-1/2 tw-left-0 `}
              >
                <img
                  src={left_button}
                  alt="left-button"
                  className="mobile-xs:tw-w-8 md:tw-w-16 lg:tw-w-full"
                />
              </div>
              <div
                className={` project-button-next md:tw-right-22 mobile-xs:tw-right-4   tw-absolute tw-z-50 tw-cursor-pointer tw-top-1/2`}
              >
                <img
                  src={right_button}
                  alt="right-button"
                  className="mobile-xs:tw-w-8 md:tw-w-16  lg:tw-w-full"
                />
              </div>
            </div>
            <SwiperSlide>
              <div className="tw-px-5">
                <div className="tw-flex tw-justify-center">
                  <p className="tw-text-center mobile-xs:tw-font-secondaryFonts md:tw-font-primaryFonts mobile-xs:tw-text-center mobile-xs:tw-text-smMobileSize mobile-xs:tw-font-medium tw-font-semibold lg:tw-leading-12 md:tw-text-4xl lg:tw-text-2xlDesktopSize tw-max-w-3xl">
                    No boring courses, learn through&nbsp;
                    <br className="lg:tw-hidden" />
                    <span className="text-interactive">
                      interactive modules
                    </span>
                  </p>
                </div>
                <div className="tw-flex tw-justify-center md:tw-pt-8 ">
                  <img
                    src={caro_1}
                    alt="learning stock market for beginners"
                    className="mobile-xs:tw-w-3/5 mobile-xs:tw-pt-10 md:tw-w-96 lg:tw-w-1/2 xl:tw-w-2/5"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tw-px-5">
                <div className="tw-flex tw-justify-center ">
                  <p className="tw-text-center mobile-xs:tw-text-center mobile-xs:tw-font-secondaryFonts md:tw-font-primaryFonts mobile-xs:tw-text-smMobileSize mobile-xs:tw-font-medium tw-font-semibold md:tw-text-4xl lg:tw-leading-12 lg:tw-text-2xlDesktopSize tw-max-w-3xl ">
                    <span className="text-tournaments">Win big </span>
                    with StockPe
                    <br /> tournaments
                  </p>
                </div>
                <div className="tw-flex tw-justify-center ">
                  <img
                    src={caro_2}
                    alt="free online stock market game for students"
                    className="mobile-xs:tw-w-2/5 mobile-xs:tw-pt-5 tw-pb-16 md:tw-w-56 lg:tw-w-72  xl:tw-w-80"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tw-px-5">
                <div className="tw-flex tw-justify-center ">
                  <p className="tw-text-center  mobile-xs:tw-text-center mobile-xs:tw-font-secondaryFonts md:tw-font-primaryFonts mobile-xs:tw-font-medium mobile-xs:tw-text-smMobileSize tw-font-semibold md:tw-text-4xl  lg:tw-text-2xlDesktopSize tw-max-w-3xl ">
                    Once ready, start &nbsp;
                    <span className="text-investing">
                      real investing <br />
                    </span>
                    &nbsp;with StockPe
                  </p>
                </div>
                <div className="tw-flex tw-justify-center mobile-xs:tw-pt-3 md:tw-pt-12">
                  <img
                    src={caro_3}
                    alt="learn stock market trading"
                    className="mobile-xs:tw-w-3/4 mobile-xs:tw-pt-7 md:tw-w-96 lg:tw-w-1/2 xl:tw-w-2/5"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
