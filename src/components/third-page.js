// import img from "next/image";
import button_arrow from "../assets/button_arrow.svg";
import journey from "../assets/journey.svg";
import mobile_coins from "../assets/mobile_coins.svg";
// import a from "next/link";

const ThirdPage = () => {
  return (
    <>
      <div className="tw-h-full  tw-bg-primaryBg tw-text-white">
        {/* <!-- Mobile View --> */}
        <div className="md:tw-hidden tw-font-primaryFonts tw-px-4 tw-pt-10">
          <div className="tw-px-3">
            <div>
              <p className="text-large tw-font-semibold">
                Know your <span className="tw-text-primary">Journey</span>
              </p>
            </div>
            <div className="tw-pt-4 tw-text-fontColor">
              <p className="tw-text-smMobileSize tw-text-fontColor tw-text-opacity-60">
                Unlock levels and features as your progress from one level to
                another.
              </p>
            </div>
          </div>
          <div className="tw-mx-4 tw-pt-8 tw-pb-10">
            <img src={mobile_coins} alt="stock market learning app" />
          </div>
          {/* <!-- Coins ! --> */}
          {/* <div className="tw-font-primaryFonts tw-px-5 tw-h-full">
            <div className="tw-mt-5 tw-ml-6">
              <div className="tooltip -tw-ml-2">
                <span className="tooltiptext tw-text-xs">Get Started</span>
              </div>

              <div className="tw-border tw-rounded-full coin-border tw-mt-10">
                <div className="container">
                  <div className="coin side"></div>
                  <div className="coin tw-text-center">
                    <div className="strip"></div>
                    <div className="design"></div>
                    <div className="tw-h-10 tw-w-10 -tw-rotate-90 tw-absolute tw-px-20">
                      <p className="tw-text-black tw-text-6xl tw-ml-24 tw-font-extrabold rotateNumber">
                        1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-float-right tw-mt-20 tw-mr-24">
              <div className="tooltip -tw-ml-3">
                <span className="tooltiptext tw-text-xs">Start Learning</span>
              </div>

              <div className="tw-border tw-rounded-full coin-border tw-mt-10">
                <div className="container">
                  <div className="coin side"></div>
                  <div className="coin tw-text-center">
                    <div className="strip"></div>
                    <div className="design"></div>
                    <div className="tw-h-10 tw-w-10 -tw-rotate-90 tw-absolute tw-px-20">
                      <p className="tw-text-black tw-text-6xl tw-ml-24 tw-font-extrabold rotateNumber">
                        2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-pt-40 tw-px-5">
              <div className="tooltip">
                <span
                  className="tooltiptext -tw-ml-7"
                  style={{ fontSize: "10px" }}
                >
                  Invest in real markets with confidence
                </span>
              </div>

              <div className="tw-border tw-rounded-full coin-border tw-ml-4 tw-mt-14">
                <div className="container">
                  <div className="coin side"></div>
                  <div className="coin tw-text-center">
                    <div className="strip"></div>
                    <div className="design"></div>
                    <div className="tw-h-10 tw-w-10 -tw-rotate-90 tw-absolute tw-px-20">
                      <p className="tw-text-black tw-text-6xl tw-ml-24 tw-font-extrabold rotateNumber">
                        3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-pt-20 tw-px-2 tw-ml-48 ">
              <div className="tooltip">
                <span
                  className="tooltiptext tw-mr-4"
                  style={{ fontSize: "10px" }}
                >
                  Invest in real markets with confidence
                </span>
              </div>

              <div className="tw-border tw-rounded-full coin-border tw-mt-14 tw-ml-10">
                <div className="container">
                  <div className="coin side"></div>
                  <div className="coin tw-text-center">
                    <div className="strip"></div>
                    <div className="design"></div>
                    <div className="tw-h-10 tw-w-10 -tw-rotate-90 tw-absolute tw-px-20">
                      <p className="tw-text-black tw-text-6xl tw-ml-24 tw-font-extrabold rotateNumber">
                        4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <a
            href="https://stockpe.app.link/Spv92VPgUyb"
            target="_blank"
            rel="noreferrer"
          >
            <div className="tw-text-center tw-block tw-py-10  ">
              <button className="tw-text-smMobileSize click-arrow tw-h-12 tw-font-semibold active:tw-text-opacity-70 tw-w-full tw-font-secondaryFonts tw-bg-primary  tw-text-black tw-px-10 tw-py-2 tw-rounded-md">
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

        {/* <!-- Desktop View --> */}
        <div className="tw-grid tw-grid-cols-2  tw-max-w-screen-3xl tw-mx-auto tw-font-primaryFonts tw-gap-4 md:tw-p-16 lg:tw-px-20 lg:py-34 tw-h-full mobile-xs:tw-hidden">
          <div className="">
            <div>
              <p className=" tw-max-w-lg tw-font-semibold md:tw-text-2xl lg:tw-text-2xlDesktopSize">
                Know your
                <span className="tw-text-primary tw-font-primaryFonts">
                  Journey
                </span>
              </p>
            </div>
            <div className="tw-mt-1.5 lg:tw-mt-1 tw-pt-4 lg:tw-pb-8 tw-text-fontColor tw-max-w-md">
              <p className="lg:text-15 md:tw-text-base tw-font-normal tw-text-fontColor tw-text-opacity-60 ">
                Unlock levels and features as your progress from one level to
                another.
              </p>
            </div>
            <a
              href="https://stockpe.app.link/Spv92VPgUyb"
              target="_blank"
              rel="noreferrer"
            >
              <div className="tw-mt-5 md:tw-w-3/4">
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

          <div>
            <img src={journey} alt="stock market learning app" />
          </div>
          {/* <!-- Coins ! --> */}
          {/* <div className="tw-font-primaryFonts tw-px-10 tw-h-full lg:tw-w-3/4 xl:tw-w-2/3">
            <!-- Get Started -->
            <div className="">
              <div className="tooltip -tw-ml-3">
                <span className="tooltiptext">Get Started</span>
              </div>

              <div className="tw-border tw-rounded-full coin-border tw-mt-10">
                <div className="container">
                  <div className="coin side"></div>
                  <div className="coin text-center">
                    <div className="strip"></div>
                    <div className="design"></div>
                    <div className="tw-h-10 tw-w-10 -tw-rotate-90 tw-absolute tw-px-20">
                      <p className="tw-text-black tw-text-6xl tw-ml-24 tw-font-extrabold rotateNumber">
                        1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Start Learning -->
            <div className="tw-float-right tw-pt-24 tw-pr-14">
              <div className="tooltip -tw-ml-3">
                <span className="tooltiptext">Start Learning</span>
              </div>

              <div className="tw-border tw-rounded-full coin-border tw-mt-10">
                <div className="container">
                  <div className="coin side"></div>
                  <div className="coin tw-text-center">
                    <div className="strip"></div>
                    <div className="design"></div>
                    <div className="tw-h-10 tw-w-10 -tw-rotate-90 tw-absolute tw-px-20">
                      <p className="tw-text-black tw-text-6xl tw-ml-24 tw-font-extrabold rotateNumber">
                        2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Start investing -->
            <div className="tw-mt-56">
              <div className="tooltip tw-mb-8 md:-tw-ml-28">
                <span className="tooltiptext">
                  Invest in real markets with confidence
                </span>
              </div>

              <div className="tw-border tw-rounded-full coin-border tw-mt-14 -tw-ml-10">
                <div className="container">
                  <div className="coin side"></div>
                  <div className="coin tw-text-center">
                    <div className="strip"></div>
                    <div className="design"></div>
                    <div className="tw-h-10 tw-w-10 -tw-rotate-90 tw-absolute tw-px-20">
                      <p className="tw-text-black tw-text-6xl tw-ml-24 tw-font-extrabold rotateNumber">
                        3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Start investing -->
            <div className="tw-float-right tw-pt-28 tw-pr-24">
              <div className="tooltip tw-mb-8 tw-mr-10 -tw-ml-5">
                <span className="tooltiptext">
                  Invest in real markets with confidence
                </span>
              </div>

              <div className="tw-border tw-rounded-full coin-border tw-ml-10 tw-mt-6">
                <div className="container">
                  <div className="coin side"></div>
                  <div className="coin tw-text-center">
                    <div className="strip"></div>
                    <div className="design"></div>
                    <div className="tw-h-10 tw-w-10 -tw-rotate-90 tw-absolute tw-px-20">
                      <p className="tw-text-black tw-text-6xl tw-ml-24 tw-font-extrabold rotateNumber">
                        4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
