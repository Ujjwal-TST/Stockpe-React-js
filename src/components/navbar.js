import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Col, Modal, ModalBody, Row } from "reactstrap";
// import img from "next/image";
import logo from "../assets/LOGO.svg";
import menu from "../assets/menu.svg";
import close_modal from "../assets/close.svg";
import carbon_arrow from "../assets/carbon_arrow-up.svg";
import up_arrow from "../assets/up_Arrow.svg";
import down_arrow from "../assets/down_arrow.svg";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileModal, setMobileModal] = useState(false);
  const [About, setAbout] = useState(false);
  const url = window.location.href;
  const path = url.split('/')[3]
  return (
    <>
      <header className="tw-text-fontColor tw-sticky tw-top-0  tw-z-50">
        <nav className="tw-font-secondaryFonts ">
          {/* Desktop Menu */}
          <div className="mobile-xs:tw-px-4 mobile-xs:tw-pt-2 md:hamburger-border mobile-xs:hamburger-border   tw-bg-primaryBg">
            <div className="tw-flex tw-items-center  mobile-xs:tw-h-14 md:tw-px-8 lg:tw-px-16  md:tw-pt-3   tw-max-w-screen-3xl tw-mx-auto tw-justify-between tw-h-24">
              <div className="tw-flex tw-items-center">
                <div className="">
                  <img
                    src={logo}
                    className="mobile-xs:tw-w-28 md:tw-w-32  lg:tw-w-48 tw-h-12"
                    alt="stockPe"
                  />
                </div>
              </div>
              <div className="tw-hidden md:tw-block ">
                <div className="tw-ml-4 tw-flex tw-items-center tw-space-x-4">
                  <a
                    href="/"

                    className={`${path === ""
                      ? "tw-text-opacity-100"
                      : "tw-text-opacity-50"
                      }  hover:tw-text-fontColor tw-no-underline  tw-text-fontColor  tw-block tw-px-3 md:tw-px-1 tw-py-2 tw-rounded-md tw-text-baseMobileSize tw-text-center tw-font-medium`}
                  >
                    Home
                  </a>
                  <a
                    href="https://stockpe.in/blog/"
                    target="_blank"
                    rel="noreferrer"

                    className={`${path === "https://stockpe.in/blog/"
                      ? "tw-text-opacity-100"
                      : "tw-text-opacity-50"
                      }  hover:tw-text-fontColor tw-no-underline  tw-text-fontColor  tw-block tw-px-3 md:tw-px-1 tw-py-2 tw-rounded-md tw-text-baseMobileSize tw-text-center tw-font-medium`}
                  >
                    Blog
                  </a>
                  <a
                    href="https://stockpe.in/creators/"
                    target="_blank"
                    rel="noreferrer"

                    className={`${path === "https://stockpe.in/creators/"
                      ? "tw-text-opacity-100"
                      : "tw-text-opacity-50"
                      }  hover:tw-text-fontColor tw-no-underline  tw-text-fontColor  tw-block tw-px-3 md:tw-px-1 tw-py-2 tw-rounded-md tw-text-baseMobileSize tw-text-center tw-font-medium`}
                  >
                    Creators Hub
                  </a>
                  <a
                    href="#contact-us"

                    onClick={() => {
                      setModalOpen((prev) => !prev);
                    }}
                    className={`${path === "/#contact-us"
                      ? "tw-text-opacity-100"
                      : "tw-text-opacity-50"
                      } hover:tw-text-white tw-cursor-pointer tw-no-underline tw-text-fontColor  tw-block tw-px-3 md:tw-px-1 tw-py-2 tw-rounded-md tw-text-baseMobileSize tw-text-center tw-font-medium`}
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://stockpe.app.link/Spv92VPgUyb"
                    target="_blank"
                    rel="noreferrer"

                  >
                    <div className="tw-text-center">
                      <button className="tw-text-base light  tw-font-bold tw-h-12 tw-bg-primary tw-text-black tw-px-8 tw-py-3 tw-rounded-md">
                        Try For Free
                      </button>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className="md:tw-hidden tw-cursor-pointer"
                onClick={() => {
                  setMobileMenu((prev) => !prev);
                }}
              >
                <img
                  src={menu}
                  alt="virtual trading app menu"
                  className=""
                  id="mobile-menu-button"
                />
              </div>
            </div>
          </div>
          {/* <!-- Mobile menu --> */}
          <AnimatePresence>
            {mobileMenu && (
              <motion.aside
                initial={{ width: "0%" }}
                className="tw-float-right"
                animate={{
                  width: "100%",
                }}
                exit={{
                  width: 0,
                  transition: { delay: 0, duration: 0.3 },
                }}
              >
                <div
                  className="md:tw-hidden  tw-w-full tw-h-screen tw-font-primaryFonts tw-font-semibold  tw-bg-black tw-fixed tw-top-0 tw-z-50"
                  id="mobile-menu"
                >
                  <Row className="tw-mt-5 tw-pl-4 ">
                    <Col className="" sm={10} xs={10}>
                      <div
                        className=""
                        onClick={() => {
                          setMobileMenu((prev) => !prev);
                        }}
                      >
                        <img
                          src={logo}
                          className="mobile-xs:tw-w-28 tw-mt-2 md:tw-hidden"
                          alt="stockPe"
                        />
                      </div>
                    </Col>
                    <Col sm={2} xs={2}>
                      <div className="mt-2">
                        <img
                          onClick={() => {
                            setMobileMenu((prev) => !prev);
                          }}
                          src={close_modal}
                          alt="close-button"
                          width={24}
                          height={24}
                          className="tw-cursor-pointer"
                        />
                      </div>
                    </Col>
                  </Row>

                  <div className="tw-px-8 tw-mt-10 tw-pt-2 tw-pb-3 tw-space-y-1 sm:tw-px-3">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                      animate={{ opacity: 1, x: 0 }} // Target position and opacity
                      transition={{
                        duration: 0.4,
                        delay: 0.1,
                        type: "tween",
                        ease: "easeInOut",
                      }}
                    >
                      <a
                        className="tw-text-white tw-no-underline"
                        href="https://stockpe.in/blog/"
                        target="_blank"
                        rel="noreferrer"

                      >
                        <Row className=" tw-h-11 tw-mb-5 hamburger-border">
                          <Col
                            className=" tw-text-lg tw-py-0 tw-font-semibold"
                            xs={10}
                            sm={9}
                          >
                            Blog
                          </Col>
                          <Col className="" xs={2} sm={3}>
                            <a className="hover:tw-text-white  tw-px-3  tw-rounded-md tw-text-3xl  tw-font-medium" >
                              <img
                                src={carbon_arrow}
                                alt="arrow"
                                className="tw-inline -tw-mt-2"
                              />
                            </a>
                          </Col>
                          {/* <div className=" tw-mt-5  " /> */}
                        </Row>
                      </a>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                      animate={{ opacity: 1, x: 0 }} // Target position and opacity
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                        type: "tween",
                        ease: "easeInOut",
                      }}
                    >
                      <a
                        className="tw-text-white tw-no-underline"
                        href="https://stockpe.in/creators/"
                        target="_blank"
                        rel="noreferrer"

                      >
                        <Row className="tw-h-11 tw-mb-5 hamburger-border">
                          <Col
                            className=" tw-text-lg tw-font-semibold"
                            xs={10}
                            sm={9}
                          >
                            Creators Hub
                          </Col>
                          <Col className=" " xs={2} sm={3}>
                            <a className="hover:tw-text-white  tw-px-3 -tw-mt-1 tw-rounded-md tw-text-3xl  tw-font-medium" >
                              <img
                                src={carbon_arrow}
                                alt="arrow"
                                className="tw-inline -tw-mt-2"
                              />
                            </a>
                          </Col>
                        </Row>
                      </a>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                      animate={{ opacity: 1, x: 0 }} // Target position and opacity
                      transition={{
                        duration: 0.6,
                        delay: 0.3,
                        type: "tween",
                        ease: "easeInOut",
                      }}
                    >
                      <Row
                        className="tw-h-11 tw-mb-5 hamburger-border"
                        onClick={() => {
                          setMobileModal((prev) => !prev);
                          setMobileMenu((prev) => !prev);
                        }}
                      >
                        <Col
                          className=" tw-text-lg tw-font-semibold"
                          xs={10}
                          sm={9}
                        >
                          Contact Us
                        </Col>
                        <Col className=" " xs={2} sm={3}>
                          <a className="hover:tw-text-white  tw-px-3 -tw-mt-1 tw-rounded-md tw-text-3xl  tw-font-medium" >
                            <img
                              src={carbon_arrow}
                              alt="arrow"
                              className="tw-inline -tw-mt-2"
                            />
                          </a>
                        </Col>
                      </Row>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }} // Initial position and opacity
                      animate={{ opacity: 1, x: 0 }} // Target position and opacity
                      transition={{
                        duration: 0.7,
                        delay: 0.4,
                        type: "tween",
                        ease: "easeInOut",
                      }}
                    >
                      <a
                        className="tw-text-white tw-no-underline"
                        href="https://stockpe.app.link/Spv92VPgUyb"
                        target="_blank"
                        rel="noreferrer"

                      >
                        <Row className="tw-h-11 hamburger-border">
                          <Col
                            className=" tw-text-lg tw-font-semibold"
                            xs={10}
                            sm={9}
                          >
                            Try it out for free!
                          </Col>
                          <Col className=" " xs={2} sm={3}>
                            <a className="hover:tw-text-white  tw-px-3 -tw-mt-1 tw-rounded-md tw-text-3xl  tw-font-medium" >
                              <img
                                src={carbon_arrow}
                                alt="arrow"
                                className="tw-inline -tw-mt-2"
                              />
                            </a>
                          </Col>
                        </Row>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Desktop Contact-us Modal */}
      <Modal
        toggle={() => setModalOpen(!modalOpen)}
        isOpen={modalOpen}
        centered
        className="tw-font-primaryFonts tw-w-200"
        size="lg"
      >
        <div className=" tw-bg-secondBg  modal-radius">
          <div className="tw-bg-secondBg  tw-text-primary modal-content-radius tw-py-10  tw-px-10 tw-flex tw-justify-between ">
            <p className="text-15">Contact Us</p>

            <img
              onClick={() => {
                setModalOpen((prev) => !prev);
              }}
              src={close_modal}
              alt="close-button"
              className="tw-cursor-pointer tw-w-8 tw-h-8"
            />
          </div>
          {/* <div className="tw-text-white tw-bg-secondBg tw-rounded-lg"> */}
          <ModalBody className="tw-bg-secondBg  modal-content-radius tw-text-white tw-pt-0 tw-pb-10 tw-px-10 ">
            <Row className="tw-font-secondaryFonts ">
              <Col md={6} lg={6} xl={6} className="">
                <p className=" tw-text-fontColor  tw-text-smMobileSize tw-text-opacity-60 tw-pb-1">
                  Phone
                </p>
                <a
                  href="tel:+919910470891"
                  className=" tw-text-fontColor tw-font-normal tw-block tw-underline "

                >
                  +91 9910470891
                </a>
              </Col>
              <Col md={6} lg={6} xl={6}>
                <p className=" tw-pb-1 tw-text-fontColor tw-font-medium tw-text-smMobileSize tw-text-opacity-60">
                  Email
                </p>
                <a
                  href="mailto:support@stockpe.in"
                  className="tw-text-fontColor tw-font-normal tw-underline tw-block "

                >
                  support@stockpe.in
                </a>
                <a
                  href="mailto:founders@stockpe.in"
                  className="tw-text-fontColor tw-font-normal tw-underline tw-block "

                >
                  founders@stockpe.in
                </a>
              </Col>
            </Row>
            <Row className="tw-font-secondaryFonts tw-pt-6">
              <Col md={6} lg={6} xl={6}>
                <p className=" tw-pb-1 tw-text-fontColor tw-text-smMobileSize tw-text-opacity-60">
                  CIN Number
                </p>
                <p className=" tw-text-fontColor tw-font-normal ">
                  U80900DL2021PTC387834
                </p>
              </Col>
              <Col md={6} lg={6} xl={6}>
                <p className=" tw-pb-1 tw-text-fontColor tw-text-smMobileSize tw-text-opacity-60">
                  Startup India Certificate Number
                </p>
                <p className=" tw-text-fontColor tw-font-normal ">DIPP91496</p>
              </Col>
            </Row>
            <Row className="tw-font-secondaryFonts tw-pt-6">
              <Col md={12} lg={12} xl={12}>
                <p className=" tw-pb-1 tw-text-fontColor tw-text-xsMobileSize tw-font-medium tw-text-opacity-60">
                  Registered Address
                </p>
                <p className="tw-text-fontColor tw-font-normal ">
                  30/34, 35-A 4th Floor, West Patel Nagar, New Delhi, 110008
                </p>
              </Col>
            </Row>
          </ModalBody>
        </div>
      </Modal>

      {/* Mobile Contact-us Modal */}
      <Modal
        toggle={() => setMobileModal(!mobileModal)}
        isOpen={mobileModal}
        centered
        className="md:tw-hidden tw-ml-3 tw-mr-4"
        size="sm"
      >
        <div className=" tw-border-secondBg  tw-bg-secondBg tw-rounded-xl ">
          <div className="tw-bg-secondBg  tw-rounded-t-xl tw-text-primary tw-border-none modal-header">
            <p className="tw-font-primaryFonts tw-font-semibold tw-text-xl tw-text-opacity-90">
              Contact Us
            </p>

            <img
              onClick={() => {
                setMobileModal((prev) => !prev);
              }}
              src={close_modal}
              width={24}
              height={24}
              alt="close-button"
              className="tw-cursor-pointer"
            />
          </div>
          <ModalBody className="tw-bg-secondBg tw-font-secondaryFonts tw-rounded-b-xl tw-text-white  ">
            <Row className=" ">
              <Col md={12} lg={12} xl={12}>
                <p className=" tw-text-fontColor tw-text-xsMobileSize  tw-font-medium tw-text-opacity-60">
                  Phone
                </p>
                <a
                  href="tel:+919910470891"
                  className="tw-py-1 tw-block tw-underline tw-text-smMobileSize tw-cursor-pointer  tw-text-fontColor "

                >
                  +91 9910470891
                </a>
              </Col>
              <Col className="tw-mt-4" md={12} lg={12} xl={12}>
                <p className=" tw-text-fontColor tw-text-xsMobileSize tw-font-medium tw-text-opacity-60">
                  Email
                </p>
                <a
                  href="mailto:support@stockpe.in"
                  className="tw-py-1 tw-text-sm tw-block tw-text-smMobileSize tw-underline tw-cursor-pointer tw-text-fontColor "

                >
                  support@stockpe.in
                </a>
                <a
                  href="mailto:founders@stockpe.in"
                  className="tw-text-sm tw-block tw-text-smMobileSize tw-underline tw-cursor-pointer tw-text-fontColor "

                >
                  founders@stockpe.in
                </a>
              </Col>
            </Row>
            <div className="dash-border tw-mt-8" />
            <div className="tw-mt-3">
              <Row
                onClick={() => {
                  setAbout((prev) => !prev);
                }}
              >
                <Col className="" xs={10}>
                  <p className="tw-text-lg tw-text-smMobileSize tw-text-fontColor tw-text-opacity-40">
                    About Company
                  </p>
                </Col>
                <Col className="" xs={2}>
                  <div className="tw-float-right  tw-mr-3">
                    {!About && (
                      <span className=" tw-cursor-pointer tw-text-fontColor tw-text-opacity-40">
                        <img
                          src={up_arrow}
                          alt="Expand contact us"
                          className="tw-mt-1"
                        />
                      </span>
                    )}
                    {About && (
                      <span className="tw-cursor-pointer  tw-text-fontColor tw-text-opacity-40">
                        {/* &and; */}
                        {/* <MdOutlineExpandMore className="tw-w-8 tw-h-8" /> */}
                        <img
                          src={down_arrow}
                          alt="Shrink contact us"
                          className="tw-mt-2"
                        />
                      </span>
                    )}
                  </div>
                </Col>
              </Row>
              {About && (
                <div>
                  <Row className="tw-font-secondaryFonts tw-mt-4">
                    <Col xs={12} sm={12} md={12} className="">
                      <p className="tw-text-xs tw-pb-1 tw-text-xsMobileSize tw-text-fontColor tw-font-medium tw-text-opacity-60">
                        CIN Number
                      </p>
                      <p className="tw-text-sm tw-text-smMobileSize tw-text-fontColor ">
                        U80900DL2021PTC387834
                      </p>
                    </Col>
                    <Col xs={12} sm={12} md={12} className="tw-mt-4">
                      <p className="tw-text-xs pb-1 tw-text-xsMobileSize tw-text-fontColor tw-font-medium tw-text-opacity-60 ">
                        Startup India Certificate Number
                      </p>
                      <p className="tw-text-sm tw-text-smMobileSize tw-text-fontColor ">
                        DIPP91496
                      </p>
                    </Col>
                  </Row>
                  <Row className="tw-font-secondaryFonts tw-mt-4">
                    <Col md={12} lg={12} xl={12}>
                      <p className="tw-text-xs tw-text-xsMobileSize tw-text-fontColor tw-font-medium tw-text-opacity-60">
                        Registered Address
                      </p>
                      <p className=" tw-text-sm tw-text-smMobileSize tw-text-fontColor ">
                        30/34, 35-A 4th Floor, West Patel Nagar, New Delhi,
                        110008
                      </p>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </ModalBody>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
