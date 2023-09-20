import { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
// import img from "next/image";
import { motion } from "framer-motion";
import middlescreen from "../assets/middle.avif";
import leftscreen from "../assets/left.avif";
import rightscreen from "../assets/right.avif";
import design from "../assets/design.svg";
import bird from "../assets/bird.svg";
import button_arrow from "../assets/button_arrow.svg";
// import a from "next/link";

const FirstPage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Learn", "Play", "Invest"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevNumber) => (prevNumber + 1) % 3);
    }, 2000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);
  return (
    <>
      <div className="tw-h-full tw-bg-primaryBg  tw-text-fontColor">
        <div className="tw-h-full  md:tw-mx-auto lg:tw-px-4 ">
          {/* <!-- Stockpe Title Section --> */}
          {/* Mobile View */}
          <div className="md:tw-hidden">
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                type: "tween",
                ease: "easeOut",
              }}
            >
              <div className="tw-float-right  -tw-mr-1">
                <img src={bird} alt="virtual trading " className="tw-w-24  " />
              </div>
              <div className="tw-pt-20 tw-px-5">
                <div className="tw-w-full tw-py-1 tw-text-left   tw-text-fontColor">
                  <img
                    src={design}
                    alt="virtual trading platform"
                    className="tw-w-6 -tw-ml-3"
                  />

                  <div className="tw-max-w-xs">
                    <p className=" text-large tw-px-5 tw-font-semibold  tw-inline tw-font-primaryFonts">
                      <ReactTextTransition
                        springConfig={presets.gentle}
                        className="w-25 "
                        delay={800}
                        inline
                      >
                        <p
                          className={`tw-text-primary ${texts[textIndex] === "Play" ? "tw-ml-1" : "-tw-ml-4"
                            }`}
                        >
                          {texts[textIndex]}
                        </p>
                      </ReactTextTransition>
                      <span className="-tw-ml-4">
                        &nbsp;&nbsp;in the Stock <br /> Market with <br />{" "}
                        Confidence
                      </span>
                    </p>
                  </div>
                  <a
                    href="https://stockpe.app.link/Spv92VPgUyb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="tw-pt-5 tw-block mobile-button">
                      <button className="tw-font-secondaryFonts tw-h-12 tw-font-semibold click-arrow tw-text-smMobileSize active:tw-text-opacity-70  tw-bg-primary  tw-text-black tw-w-full  tw-px-10  tw-py-2 tw-rounded-md">
                        Try For Free
                        <img
                          src={button_arrow}
                          alt="best virtual trading platform"
                          className="tw-inline click-arrow active:tw-text-opacity-70 tw-mx-2 -tw-mt-1"
                        />
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop View */}
          <div className="mobile-xs:tw-hidden tw-max-w-screen-3xl tw-mx-auto">
            <motion.div
              className="box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.25,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="tw-float-right  tw-py-5 lg:tw-pr-20">
                <img src={bird} alt="virtual trading " className="" />
              </div>
              <div className="md:py-34  tw-px-5">
                <div className="md:tw-min-w-min lg:tw-max-w-2xl md:tw-max-w-lg  tw-mx-auto tw-text-center tw-text-white">
                  <img
                    src={design}
                    alt="virtual trading platform"
                    className=""
                  />
                  <div className="tw-text-2xlDesktopSize md:tw-text-4xl lg:tw-text-2xlDesktopSize   tw-font-bold tw-inline-block tw-font-primaryFonts">
                    <ReactTextTransition
                      springConfig={presets.gentle}
                      className="w-25"
                      delay={800}
                      inline
                    >
                      <p
                        className={`tw-text-primary ${texts[textIndex] === "Play"
                          ? "md:tw-ml-10 lg:tw-ml-12"
                          : "md:tw-ml-4 lg:tw-ml:6  "
                          }`}
                      >
                        {texts[textIndex]}
                      </p>
                    </ReactTextTransition>
                    <span className="-tw-ml-2">
                      in the Stock Market with Confidence
                    </span>
                  </div>
                  <a
                    href="https://stockpe.app.link/Spv92VPgUyb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="tw-pt-12  animation">
                      <button className="tw-font-secondaryFonts tw-h-12 click-arrow hover:tw-text-opacity-70  tw-bg-primary md:tw-font-bold tw-text-black tw-px-8 tw-py-3  tw-rounded-md">
                        Try For Free
                        <img
                          src={button_arrow}
                          alt="best virtual trading platform"
                          className="tw-inline mv-arrow click-arrow -tw-mt-1 tw-ml-3"
                        />
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* <!--  Stockpe Screens Section --> */}
          <motion.div
            className="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="tw-px-5 tw-max-w-screen-2xl tw-mx-auto ">
              <div className="tw-flex tw-pt-10 mobile-xs:tw-p-0  tw-justify-evenly ">
                <div className="tw-pt-40 lg:tw-pt-48 left-screen-animation  ">
                  <img
                    src={leftscreen}
                    alt="learning stock market for beginners "
                  />
                </div>
                <div className="tw-pt-10  md:tw-mx-10 2xl:-tw-mx-44 xl:-tw-mx-28 lg:-tw-mx-10 mobile-xs:tw-pt-24 mobile-xs:tw-mx-3 middle-screen-animation">
                  <img src={middlescreen} alt="stock market learning app" />
                </div>
                <div className="tw-pt-40 lg:tw-pt-48 right-screen-animation ">
                  <img
                    src={rightscreen}
                    alt="learn to invest in stock market india"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
