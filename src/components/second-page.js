// import img from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Col, Row } from "reactstrap";
import icon_2 from "../assets/icon2.svg";
import icon_3 from "../assets/icon3.svg";
import icon_4 from "../assets/icon4.svg";
import badge from "../assets/badge.svg";
import trophy from "../assets/trophy.svg";
import ladders from "../assets/ladders.svg";
import laders from "../assets/laders.svg";
import coins from "../assets/coins.svg";

const SecondPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.5, // Percentage of element visibility to trigger the animation
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of element visibility to trigger the animation
  });

  const animationVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const mobileAnimationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const mobileAnimationVariantsIillustration = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <div className="tw-h-full  tw-bg-secondBg tw-text-white">
        {/* <!-- Mobile View --> */}
        <div className="md:tw-hidden">
          <div className="tw-font-primaryFonts tw-px-4 tw-pt-14">
            <div>
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 100 }} // Initial position and opacity
                animate={inView1 ? "visible" : "hidden"} // Target position and opacity
                variants={mobileAnimationVariants}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  type: "tween",
                  ease: "easeOut",
                }}
              >
                <p className="text-large tw-font-semibold">
                  <span className="tw-text-primary">Why</span> StockPe
                </p>
                <div className="tw-mt-8">
                  <Row className="tw-my-6">
                    <Col className="" xs={3}>
                      <div className="">
                        <img
                          src={icon_2}
                          alt="Learn about stocks by interacting with it"
                          className="tw-w-12"
                        />
                      </div>
                    </Col>
                    <Col className="" xs={7}>
                      <div className=" -tw-ml-5">
                        <p className="tw-text-baseMobileSize tw-font-medium">
                          Learn about stocks by interacting with it.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row className="tw-my-6">
                    <Col className="" xs={3}>
                      <div className="">
                        <img
                          src={icon_3}
                          alt="Play with your friends and with other player."
                          className="tw-w-12"
                        />
                      </div>
                    </Col>
                    <Col className="" xs={7}>
                      <div className=" -tw-ml-5">
                        <p className="tw-text-baseMobileSize tw-font-medium">
                          Play with your friends and with other player.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row className="tw-my-6">
                    <Col className="" xs={3}>
                      <div className="">
                        <img
                          src={icon_4}
                          alt="Earn rewards and invest this to buy a real stock."
                          className="tw-w-12"
                        />
                      </div>
                    </Col>
                    <Col className="" xs={8}>
                      <div className=" -tw-ml-5">
                        <p className="tw-text-baseMobileSize tw-font-medium">
                          Earn rewards and invest this to buy a real stock.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </motion.div>
            </div>
            <motion.div
              ref={ref1}
              initial={{ opacity: 0 }} // Initial position and opacity
              animate={inView1 ? "visible" : "hidden"} // Target position and opacity
              variants={mobileAnimationVariantsIillustration}
              transition={{
                duration: 1.5,
                delay: 0.3,
                type: "tween",
                ease: "easeIn",
              }}
            >
              <div className="tw-flex tw-justify-center  tw-pt-12 tw-pb-14">
                <img
                  src={laders}
                  alt="earning stock market for beginners "
                  className="tw-w-96"
                />
              </div>
              {/* <div className="tw-flex tw-justify-center mobile-xs:tw-mx-4 mobile-xs:tw-mt-14">
                <div>
                  <img
                    src={badge}
                    className="tw-z-10 tw-w-28 tw-absolute -tw-mt-5 -tw-ml-5"
                  />
                  <p className="tw-float-right">
                    <img
                      src={trophy}
                      className="tw-z-10 tw-mt-44 -tw-ml-7 tw-absolute tw-w-14 tw-mr-5"
                    />
                  </p>
                  <img src={ladders} className="tw-z-0 tw-border tw-w-80" />
                  <img
                    src={coins}
                    className="tw-mx-auto -tw-mt-5 tw-z-10 tw-w-48 tw-h-12"
                  />
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>

        {/* <!-- Desktop View --> */}
        <div className="lg:tw-px-20 lg:tw-py-24 mobile-xs:tw-hidden  tw-max-w-screen-3xl tw-mx-auto ">
          <Row className="">
            <Col className="">
              <div className="tw-flex tw-justify-center md:tw-p-10 lg:tw-py-5 lg:tw-px-0 ">
                <div>
                  <img
                    src={badge}
                    alt="best online stock market game"
                    className="tw-z-10 md:-tw-mt-5 md:-tw-ml-5 lg:-tw-mt-5 xl:-tw-ml-16  mobile-xs:tw-w-8 md:tw-w-16 lg:tw-w-32 xl:tw-w-38 tw-absolute"
                  />
                  <p className="tw-float-right">
                    <img
                      src={trophy}
                      alt="best online stock market game"
                      className="tw-z-10 xl:tw-mt-60 lg:tw-mt-52 md:tw-mt-36 md:-tw-ml-5 lg:-tw-ml-10 tw-absolute tw-w-16 mobile-xs:tw-w-8 md:tw-w-10 lg:tw-w-16"
                    />
                  </p>
                  <img
                    src={ladders}
                    alt="earning stock market for beginners "
                    className="tw-z-0"
                  />
                  <img
                    src={coins}
                    alt="virtual trading game indian stock market"
                    className="tw-mx-auto tw-z-10 tw-w-24 md:-tw-mt-3 lg:-tw-mt-5 xl:-tw-mt-7 mobile-xs:tw-w-8 md:tw-w-32 lg:tw-w-48 xl:tw-w-64"
                  />
                </div>
              </div>
            </Col>
            <Col className="">
              <div className="tw-font-primaryFonts tw-w-85  tw-py-20 lg:tw-pt-32 xl:tw-pt-32">
                <div ref={ref}>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                    animate={inView ? "visible" : "hidden"} // Target position and opacity
                    variants={animationVariants}
                    transition={{ duration: 1, type: "tween", ease: "easeOut" }}
                  >
                    <p className="tw-text-xlDesktopSize   tw-font-bold">
                      <span className="tw-text-primary">Why</span> StockPe
                    </p>
                  </motion.div>
                  <div className="lg:tw-mt-8 md:tw-mt-5 xl:tw-mt-10 ">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                      animate={inView ? "visible" : "hidden"} // Target position and opacity
                      variants={animationVariants}
                      transition={{
                        duration: 1,
                        delay: 0.3,
                        type: "tween",
                        ease: "easeOut",
                      }}
                    >
                      <Row className=" tw-mt-8 ">
                        <Col className="" md={2}>
                          <div className="">
                            <img
                              src={icon_2}
                              alt="Learn about stocks by interacting with it"
                              className="tw-w-16 lg:tw-w-14 md:tw-w-12 xl:tw-w-14"
                            />
                          </div>
                        </Col>
                        <Col className="" md={8} lg={9} xl={9}>
                          <div className="xl:tw-mt-1.5  lg:tw-mt-1.5">
                            <p className="lg:tw-text-lgDesktopSize md:tw-text-lg  tw-font-medium">
                              Learn about stocks by interacting with it.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                      animate={inView ? "visible" : "hidden"} // Target position and opacity
                      variants={animationVariants}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        type: "tween",
                        ease: "easeOut",
                      }}
                    >
                      <Row className=" tw-mt-8 ">
                        <Col className="" md={2}>
                          <div className="">
                            <img
                              src={icon_3}
                              alt="Play with your friends and with other player."
                              className="tw-w-16 lg:tw-w-14 md:tw-w-12 xl:tw-w-14"
                            />
                          </div>
                        </Col>
                        <Col className="" md={7} lg={9} xl={9}>
                          <div className="xl:tw-mt-1.5  lg:tw-mt-1">
                            <p className="lg:tw-text-lgDesktopSize md:tw-text-lg xl:text-15 xl:tw-max-w-sm tw-font-medium">
                              Play with your friends and with other player.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                      animate={inView ? "visible" : "hidden"} // Target position and opacity
                      variants={animationVariants}
                      transition={{
                        duration: 1,
                        delay: 0.7,
                        type: "tween",
                        ease: "easeOut",
                      }}
                    >
                      <Row className="tw-mt-8 ">
                        <Col className="" md={2}>
                          <div className="">
                            <img
                              src={icon_4}
                              alt="Earn rewards and invest this to buy a real stock."
                              className="tw-w-16 lg:tw-w-14 md:tw-w-12 xl:tw-w-14 "
                            />
                          </div>
                        </Col>
                        <Col className="" md={7} lg={9} xl={9}>
                          <div className="xl:tw-mt-1.5  lg:tw-mt-1">
                            <p className="lg:tw-text-lgDesktopSize md:tw-text-lg xl:text-15  tw-font-medium">
                              Earn rewards and invest this to buy a real stock.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
