// import img from "next/image";
import { Col, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, FreeMode } from "swiper";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";

import ratings from "../assets/ratings.svg";
import stars from "../assets/stars-rating.svg";
import apple from "../assets/apple.svg";
import android from "../assets/android.svg";
// import a from "next/link";

const SixthPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.9, // Percentage of element visibility to trigger the animation
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  function generateBreakpoints(minWidth, maxWidth, step, widthDivisor) {
    const breakpoints = {};

    for (let width = minWidth; width <= maxWidth; width += step) {
      breakpoints[width] = {
        slidesPerView: width / widthDivisor,
      };
    }

    return breakpoints;
  }

  return (
    <>
      <div className="tw-bg-primaryBg tw-h-full tw-text-white tw-font-secondaryFonts">
        {/* Mobile View */}
        <div className="md:tw-hidden tw-py-12 tw-px-4">
          <div>
            <p className=" tw-px-6 tw-text-center text-large tw-font-primaryFonts tw-font-semibold ">
              Trusted by
            </p>
            <p className="tw-px-6 text-large tw-text-center tw-font-primaryFonts  tw-font-semibold ">
              <span className="text-users-no">1.5 Lakh+&nbsp;</span>
              users
            </p>
          </div>
          <div className="tw-mt-8">
            <Swiper
              loop
              grabCursor={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
                reverseDirection: false,
              }}
              slidesPerView={1.25}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="tw-w-70 tw-h-56 tw-mx-2 tw-py-2 tw-px-4  testimonial-border tw-bg-secondBg tw-rounded-md">
                  <div>
                    <img src={stars} alt="customer-ratings" className="" />
                  </div>
                  <div>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-pt-5 tw-font-bold  tw-text-xs">
                      “Hello I Love 😘 This App. I Won The Tournament Reward
                      Coins And Was Able To Withdraw Rewards .First I Thought
                      That This Is A Fraud App But After 5-6 Days I Am Learning
                      Really Well Now . Customer Service Is Also Good. They
                      Resolve The Issue Within 1 Day.”
                    </p>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-font-bold lg:tw-text-base tw-text-xs tw-py-2">
                      - Aditya
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw-w-70 tw-h-56 tw-mx-2 tw-py-2 tw-px-4  testimonial-border tw-bg-secondBg tw-rounded-md">
                  <div>
                    <img src={stars} alt="customer-ratings" />
                  </div>
                  <div>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-pt-5 tw-font-bold lg:tw-text-sm tw-text-xs">
                      Simply superb learning app for people who want to start
                      with stocks!
                    </p>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-font-bold lg:tw-text-base tw-text-xs tw-py-2">
                      - Aditya
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw-w-70 tw-h-56 tw-mx-2 tw-py-2 tw-px-4  testimonial-border tw-bg-secondBg tw-rounded-md">
                  <div>
                    <img src={stars} alt="customer-ratings" />
                  </div>
                  <div>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-pt-5 tw-font-bold lg:tw-text-sm tw-text-xs">
                      “I Love 😘 This App. I Won The Tournament Reward Coins And
                      Was Able To Withdraw Rewards .First I Thought That This Is
                      A Fraud App But After 5-6 Days I Am Learning Really Well
                      Now . Customer Service Is Also Good. They Resolve The
                      Issue Within 1 Day.”
                    </p>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-font-bold lg:tw-text-base tw-text-xs tw-py-2">
                      - Aditya
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw-w-70 tw-h-56 tw-mx-2 tw-py-2 tw-px-4  testimonial-border tw-bg-secondBg tw-rounded-md">
                  <div>
                    <img src={stars} alt="customer-ratings" />
                  </div>
                  <div>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-pt-5 tw-font-bold lg:tw-text-sm tw-text-xs">
                      “I Love 😘 This App. I Won The Tournament Reward Coins And
                      Was Able To Withdraw Rewards .First I Thought That This Is
                      A Fraud App But After 5-6 Days I Am Learning Really Well
                      Now . Customer Service Is Also Good. They Resolve The
                      Issue Within 1 Day.”
                    </p>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-font-bold lg:tw-text-base tw-text-xs tw-py-2">
                      - Aditya
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw-w-70 tw-h-56 tw-mx-2 tw-py-2 tw-px-4  testimonial-border tw-bg-secondBg tw-rounded-md">
                  <div>
                    <img src={stars} alt="customer-ratings" />
                  </div>
                  <div>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-pt-5 tw-font-bold lg:tw-text-sm tw-text-xs">
                      Amazing Wonderful App. Very Helpful. I Have Shared This
                      App With My Friends. Great Work.
                    </p>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-font-bold lg:tw-text-base tw-text-xs tw-py-2">
                      - Raju
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw-w-70 tw-h-56 tw-mx-2 tw-py-2 tw-px-4 testimonial-border  tw-bg-secondBg tw-rounded-md">
                  <div>
                    <img src={stars} alt="customer-ratings" />
                  </div>
                  <div>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-pt-5 tw-font-bold lg:tw-text-sm tw-text-xs">
                      🤩🤩🤩🤩🤩🤩🤩🤩🤩🤩🤩🤩🤩🤩 super good app.”
                    </p>
                    <p className="tw-text-fontColor tw-text-opacity-70 tw-font-bold lg:tw-text-base tw-text-xs tw-py-2">
                      - R Patel
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="tw-flex tw-justify-center tw-mt-4">
            <img src={ratings} alt="ratings" />
          </div>
        </div>

        {/* Desktop View */}
        <div className="mobile-xs:tw-hidden  tw-font-primaryFonts tw-mx-auto tw-px-20 md:tw-py-16 lg:pt-34 lg:tw-pb-0">
          <Row className="tw-max-w-screen-3xl tw-mx-auto">
            <Col className="" md={4}>
              <div className="tw-px-5 " ref={ref}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }} // Initial position and opacity
                  animate={inView ? "visible" : "hidden"} // Target position and opacity
                  variants={animationVariants}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    type: "tween",
                    ease: "easeOut",
                  }}
                >
                  <p className=" lg:tw-text-xlDesktopSize md:tw-text-xl tw-text-4xl tw-font-semibold ">
                    Trusted by
                  </p>
                  <p className=" lg:tw-text-xlDesktopSize tw-text-4xl md:tw-text-xl tw-font-semibold">
                    <span className="text-users-no"> 1.5 Lakh+ </span> users
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }} // Initial position and opacity
                  animate={inView ? "visible" : "hidden"} // Target position and opacity
                  variants={animationVariants}
                  transition={{ duration: 1, type: "tween", ease: "easeOut" }}
                >
                  <div className="tw-mt-5">
                    <img src={ratings} alt="ratings" />
                  </div>
                </motion.div>
                <div className="tw-mt-10">
                  <div className="lg:tw-hidden ">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://apps.apple.com/in/app/stockpe/id1627228375"
                    >
                      <img
                        className="tw-cursor-pointer image tw-inline tw-w-20 "
                        src={apple}
                        alt="app store stokcPe"
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://play.google.com/store/search?q=stockpe&c=apps"
                    >
                      <img
                        className="tw-cursor-pointer image tw-ml-2 tw-inline tw-w-20 "
                        src={android}
                        alt="play store stokcPe"
                      />
                    </a>
                  </div>
                  <div className="md:tw-hidden tw-max-w-xsDesktop lg:tw-block">
                    <Row>
                      <Col>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://apps.apple.com/in/app/stockpe/id1627228375"
                        >
                          <img
                            className="tw-cursor-pointer image tw-w-40 "
                            src={apple}
                            alt="app store stokcPe"
                          />
                        </a>
                      </Col>
                      <Col>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://play.google.com/store/search?q=stockpe&c=apps"
                        >
                          <img
                            className="tw-cursor-pointer image tw-w-40 lg:-tw-ml-4 xl:-tw-ml-3 2xl:-tw-ml-9"
                            src={android}
                            alt="play store stokcPe"
                          />
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} className="">
              <div className=" ">
                <Swiper
                  loop
                  grabCursor={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                    reverseDirection: false,
                  }}
                  slidesPerView={1.5}
                  breakpoints={{
                    // 1280: { slidesPerView: 1.9 },
                    // 1400: { slidesPerView: 2.25 },
                    // 1560: { slidesPerView: 2.4 },

                    ...generateBreakpoints(1280, 1536, 50, 700),
                  }}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay, FreeMode]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="tw-w-96 tw-h-56 lg:tw-h-80 md:tw-w-64 lg:tw-w-96 testimonial-border xl:tw-w-96 tw-mx-4 tw-py-2 tw-px-5  tw-bg-secondBg tw-rounded-md">
                      <div>
                        <img
                          src={stars}
                          alt="customer-ratings"
                          className="lg:tw-pt-6"
                        />
                      </div>
                      <div>
                        <p className="tw-text-fontColor tw-text-opacity-70 lg:tw-pt-6  tw-font-semibold lg:tw-text-sm tw-text-xs ">
                          “1 I Love 😘 This App. I Won The Tournament Reward
                          Coins And Was Able To Withdraw Rewards .First I
                          Thought That This Is A Fraud App But After 5-6 Days I
                          Am Learning Really Well Now . Customer Service Is Also
                          Good. They Resolve The Issue Within 1 Day.”
                        </p>
                        <p className="tw-text-fontColor tw-text-opacity-70 lg:tw-pt-4 tw-font-semibold lg:tw-text-base tw-text-xs tw-py-2 ">
                          - Aditya
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tw-w-96 tw-h-56 md:tw-w-64 lg:tw-h-80 testimonial-border lg:tw-w-96 xl:tw-w-96 tw-mx-4 tw-py-2 tw-px-5  tw-bg-secondBg tw-rounded-md">
                      <div>
                        <img
                          src={stars}
                          alt="customer-ratings"
                          className="lg:tw-pt-6 "
                        />
                      </div>
                      <div>
                        <p className="tw-text-fontColor tw-text-opacity-70 tw-pt-5 lg:tw-pt-6  tw-font-semibold lg:tw-text-sm tw-text-xs ">
                          Simply superb learning app for people who want to
                          start with stocks!
                        </p>
                        <p className="tw-text-fontColor tw-text-opacity-70 lg:tw-pt-4 tw-font-semibold lg:tw-text-base tw-text-xs tw-py-2 ">
                          - Raju
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tw-w-96 tw-h-56 md:tw-w-64 lg:tw-h-80 testimonial-border lg:tw-w-96 xl:tw-w-96 tw-mx-4 tw-py-2 tw-px-5  tw-bg-secondBg tw-rounded-md">
                      <div>
                        <img
                          src={stars}
                          alt="customer-ratings"
                          className="lg:tw-pt-6 "
                        />
                      </div>
                      <div>
                        <p className="tw-text-fontColor tw-text-opacity-70 tw-pt-5 lg:tw-pt-6  tw-font-semibold lg:tw-text-sm tw-text-xs ">
                          “I Love 😘 This App. I Won The Tournament Reward Coins
                          And Was Able To Withdraw Rewards .First I Thought That
                          This Is A Fraud App But After 5-6 Days I Am Learning
                          Really Well Now . Customer Service Is Also Good. They
                          Resolve The Issue Within 1 Day.”
                        </p>
                        <p className="tw-text-fontColor tw-text-opacity-70 lg:tw-pt-4 tw-font-semibold lg:tw-text-base tw-text-xs tw-py-2 ">
                          - Aditya
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tw-w-96 tw-h-56 md:tw-w-64 lg:tw-h-80 testimonial-border lg:tw-w-96 xl:tw-w-96 tw-mx-4 tw-py-2 tw-px-5  tw-bg-secondBg tw-rounded-md">
                      <div>
                        <img
                          src={stars}
                          alt="customer-ratings"
                          className="lg:tw-pt-6 "
                        />
                      </div>
                      <div>
                        <p className="tw-text-fontColor tw-text-opacity-70 lg:tw-pt-6  tw-pt-5 tw-font-semibold lg:tw-text-sm tw-text-xs">
                          “I Love 😘 This App. I Won The Tournament Reward Coins
                          And Was Able To Withdraw Rewards .First I Thought That
                          This Is A Fraud App But After 5-6 Days I Am Learning
                          Really Well Now . Customer Service Is Also Good. They
                          Resolve The Issue Within 1 Day.”
                        </p>
                        <p className="tw-text-fontColor tw-text-opacity-70 lg:tw-pt-4 tw-font-semibold lg:tw-text-base tw-text-xs tw-py-2">
                          - Aditya
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tw-w-96 tw-h-56 md:tw-w-64 lg:tw-h-80 lg:tw-w-96 testimonial-border xl:tw-w-96 tw-mx-4 tw-py-2 tw-px-5  tw-bg-secondBg tw-rounded-md">
                      <div>
                        <img
                          src={stars}
                          alt="customer-ratings"
                          className="lg:tw-pt-6 "
                        />
                      </div>
                      <div>
                        <p className="tw-text-fontColor tw-text-opacity-70 tw-pt-5 lg:tw-pt-6  tw-font-semibold lg:tw-text-sm tw-text-xs">
                          Amazing Wonderful App. Very Helpful. I Have Shared
                          This App With My Friends. Great Work.
                        </p>
                        <p className="tw-text-fontColor tw-text-opacity-70 lg:tw-pt-4 tw-font-semibold lg:tw-text-base tw-text-xs tw-py-2">
                          - Raju
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tw-w-96 tw-h-56 md:tw-w-64 lg:tw-h-80 testimonial-border lg:tw-w-96 xl:tw-w-96 tw-mx-4 tw-py-2 tw-px-5  tw-bg-secondBg tw-rounded-md">
                      <div>
                        <img
                          src={stars}
                          alt="customer-ratings"
                          className="lg:tw-pt-6 "
                        />
                      </div>
                      <div>
                        <p className="tw-text-fontColor tw-text-opacity-70 tw-pt-5 lg:tw-pt-6  tw-font-semibold lg:tw-text-sm tw-text-xs">
                          🤩🤩🤩🤩🤩🤩🤩🤩🤩🤩🤩🤩🤩🤩 super good app.”
                        </p>
                        <p className="tw-text-fontColor tw-text-opacity-70 lg:tw-pt-4 tw-font-semibold lg:tw-text-base tw-text-xs tw-py-2">
                          - R Patel
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                {/* <div className="tw-w-2/5 tw-mx-4 tw-py-2 tw-px-5 tw-bg-secondBg tw-rounded-md">
                  <div>
                    <p className="tw-font-medium tw-py-3 lg:tw-text-lg">
                      Stockmarket made easy to understand and fun by StockPe
                    </p>
                  </div>
                  <div>
                    <p className="tw-text-secondFontColor tw-font-medium lg:tw-text-base tw-text-xs">
                      “I used to be intimidated by the stock market, but StockPe
                      made it easy to understand and fun to learn”
                    </p>
                    <p className="tw-text-secondFontColor tw-font-medium lg:tw-text-base tw-text-xs tw-py-2">
                      - Aditya
                    </p>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SixthPage;
