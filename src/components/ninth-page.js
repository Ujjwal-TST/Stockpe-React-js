// import img from "next/image";
// import a from "next/link";
import { Col, Row } from "reactstrap";
import logo from "../assets/LOGO.svg";
import apple from "../assets/apple.svg";
import android from "../assets/android.svg";
import linkdin from "../assets/linkdin.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import { Link } from "react-router-dom";

const NinthPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Mobile View */}
      <div className="tw-bg-black  tw-pt-5  md:tw-hidden">
        {/* Logo */}
        <div className="tw-mx-2 tw-p-2">
          <div className="">
            <img src={logo} alt="stockPe" className="mobile-xs:tw-w-24" />
          </div>
          <div className="tw-pt-3 tw-pb-5">
            <p style={{ margin: 0 }} className="tw-text-secondFontColor tw-font-medium tw-text-xsMobileSize tw-font-secondaryFonts">
              Making Financial Assets Fun For Indians ❤️
            </p>
          </div>
          <div className="tw-flex tw-items-center tw-justify-start">
            <a
              href="https://www.instagram.com/stockpe.in/"
              target="_blank"
              rel="noreferrer"
              className="tw-mr-5"
            >
              <img src={instagram} alt="stokcPe instagram" />
            </a>

            <a
              href="https://www.linkedin.com/company/stockpe/"
              target="_blank"
              rel="noreferrer"
              className="tw-mr-5"
            >
              <img src={linkdin} alt="stokcPe linkdin" />
            </a>

            <a
              href="https://www.youtube.com/@StockPeofficial"
              target="_blank"
              rel="noreferrer"
              className="tw-mr-5"
            >
              <img src={youtube} alt="stokcPe youtube" />
            </a>
            <a
              href="https://twitter.com/stockpe"
              target="_blank"
              rel="noreferrer"
              className="tw-mr-5"
            >
              <img src={twitter} alt="stokcPe twitter" />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="tw-mx-2 tw-mt-7 tw-p-2">
          <div>
            <p style={{ margin: 0 }} className="tw-font-primaryFonts tw-text-lg tw-text-fontColor tw-font-bold">
              Quick Links
            </p>
          </div>
          <div className="tw-text-smMobileSize tw-font-secondaryFonts">
            <Link
              to="/"
              className="tw-no-underline tw-font-normal tw-mt-2 tw-text-fontColor tw-text-opacity-80 tw-block"
            >
              Home
            </Link>
            <a
              href="https://stockpe.in/blog/"
              target="_blank"
              className="tw-no-underline tw-font-normal tw-mt-2 tw-text-fontColor tw-text-opacity-80 tw-block"
            >
              Blog
            </a>
            <a
              href="https://stockpe.in/blog/"
              target="_blank"
              className="tw-no-underline tw-font-normal tw-mt-2 tw-text-fontColor tw-text-opacity-80 tw-block"
            >
              Creators Hub
            </a>
            <a
              href="https://stockpe.in/calculators/"
              target="_blank"
              className="tw-no-underline tw-font-normal tw-mt-2 tw-text-fontColor tw-text-opacity-80 tw-block"
            >
              Calculators
            </a>
            <a
              href="#"
              target="_blank"
              className="tw-no-underline tw-font-normal tw-mt-2 tw-text-fontColor tw-text-opacity-80 tw-block"
            >
              Contact Us
            </a>

            <a
              href="https://stockpe.app.link/Spv92VPgUyb"
              target="_blank"
              className="tw-no-underline tw-font-normal tw-text-primary tw-mt-2 tw-block"
            >
              Try the app out for free!
            </a>
          </div>
        </div>
        {/* Support */}
        <div className="tw-mx-2 tw-mt-7 tw-p-2">
          <div>
            <p style={{ margin: 0 }} className="tw-font-primaryFonts  tw-text-lg tw-text-fontColor tw-font-bold">
              Support
            </p>
          </div>
          <div className="tw-text-smMobileSize  tw-font-secondaryFonts ">
            <a
              href="mailto:support@stockpe.in"
              className="tw-mt-2 tw-block tw-font-normal tw-no-underline tw-text-fontColor tw-text-opacity-80"
            >
              Email Us
            </a>
            <Link
              to="/privacy-policy"
              className="tw-mt-2 tw-text-fontColor tw-font-normal tw-no-underline tw-block tw-text-opacity-80"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        {/* Footer */}
        <div className=" md:tw-hidden tw-mt-7 tw-bg-secondBg">
          <p style={{ margin: 0 }} className="tw-text-fontColor tw-font-secondaryFonts tw-text-smMobileSize tw-text-opacity-50  tw-text-center">
            Copyright {currentYear} Stockation Private Limited
          </p>
        </div>
        {/* Disclaimer */}
        <div className="tw-font-secondaryFonts ">
          <div className=" tw-pt-4 tw-px-4 tw-bg-neutral-900">
            <p style={{ margin: 0 }} className="tw-font-secondaryFonts tw-leading-5 tw-text-smMobileSize tw-font-medium tw-text-fontColor tw-text-opacity-80">
              Disclaimer
            </p>
            <div className="tw-text-sm tw-pt-3 tw-text-fontColor tw-pb-6 tw-font-secondaryFonts ">
              <p style={{ margin: 0 }} className="tw-text-fontColor tw-leading-5 tw-text-xs tw-font-secondaryFonts  tw-text-opacity-80">
                1. This platform is solely meant for education purpose only
              </p>
              <p style={{ margin: 0 }} className="tw-text-fontColor tw-leading-4 tw-text-xs tw-font-secondaryFonts tw-text-opacity-80">
                2. We are not connected/affiliated to any government body for
                anything inside the platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}

      <div className="tw-bg-black   tw-py-5 tw-px-10 mobile-xs:tw-hidden">
        <Row className="tw-max-w-screen-3xl tw-mx-auto">
          {/* Logo */}
          <Col className="" md={4} lg={4} xxl={4}>
            <div className=" tw-p-5">
              <div className="">
                <img
                  src={logo}
                  alt="stockPe"
                  className="mobile-xs:tw-w-28 md:tw-w-40"
                />
              </div>
              <div className="tw-pt-1.5">
                <p style={{ margin: 0 }} className="tw-text-secondFontColor tw-font-medium tw-text-xsMobileSize tw-font-secondaryFonts">
                  Making Financial Assets Fun For Indians ❤️
                </p>
              </div>
              <div className="tw-flex tw-items-center tw-justify-start tw-pt-3">
                <a
                  href="https://www.instagram.com/stockpe.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="tw-mr-5"
                >
                  <img src={instagram} alt="stokcPe instagram" />
                </a>

                <a
                  href="https://www.linkedin.com/company/stockpe/"
                  target="_blank"
                  rel="noreferrer"
                  className="tw-mr-5"
                >
                  <img src={linkdin} alt="stokcPe linkdin" />
                </a>
                <a
                  href="https://www.youtube.com/@StockPeofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="tw-mr-5"
                >
                  <img src={youtube} alt="stokcPe youtube" />
                </a>
                <a
                  href="https://twitter.com/stockpe"
                  target="_blank"
                  rel="noreferrer"
                  className="tw-mr-5"
                >
                  <img src={twitter} alt="stokcPe twitter" />
                </a>
              </div>
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
                <div className="md:tw-hidden  lg:tw-block">
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
          {/* Quick Links */}
          <Col md={5} lg={4} xxl={5} className="">
            <div className=" tw-p-5 tw-text-fontColor">
              <div>
                <p style={{ margin: 0 }} className="tw-font-primaryFonts  tw-text-lg tw-font-bold">
                  Quick Links
                </p>
              </div>
              <div className="text-sm font-secondaryFonts">
                <Row>
                  <Col md={4} lg={4} xl={4}>
                    <Link
                      to="/"
                      className=" tw-block tw-mt-2 tw-no-underline md:tw-text-sm tw-font-secondaryFonts lg:tw-text-smMobileSize tw-text-fontColor tw-text-opacity-80"
                    >
                      Home
                    </Link>
                  </Col>
                  <Col md={6} lg={6} xl={6}>
                    <a
                      href="https://stockpe.in/calculators/"
                      target="_blank"
                      className=" tw-block tw-mt-2 tw-no-underline md:tw-text-sm tw-font-secondaryFonts lg:tw-text-smMobileSize tw-text-fontColor tw-text-opacity-80"
                    >
                      Calculators
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} lg={4} xl={4}>
                    <a
                      href="https://stockpe.in/blog/"
                      target="_blank"
                      className=" tw-block tw-mt-2 tw-no-underline md:tw-text-sm tw-font-secondaryFonts lg:tw-text-smMobileSize tw-text-fontColor tw-text-opacity-80"
                    >
                      Blog
                    </a>
                  </Col>
                  <Col md={6} lg={6} xl={6}>
                    <a
                      href="#"
                      className=" tw-block tw-mt-2 tw-no-underline md:tw-text-sm tw-font-secondaryFonts lg:tw-text-smMobileSize tw-text-fontColor tw-text-opacity-80"
                    >
                      Contact Us
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} lg={4} xl={4}>
                    <a
                      href="https://stockpe.in/creators/"
                      target="_blank"
                      className=" tw-block tw-mt-2 tw-no-underline md:tw-text-sm tw-font-secondaryFonts lg:tw-text-smMobileSize tw-text-fontColor tw-text-opacity-80"
                    >
                      Creators Hub
                    </a>
                  </Col>
                  <Col md={8} lg={8} xl={8}>
                    <a
                      href="https://stockpe.app.link/Spv92VPgUyb"
                      target="_blank"
                      rel="noreferrer"
                      className="tw-text-primary tw-block  tw-no-underline tw-font-secondaryFonts md:tw-text-sm lg:tw-text-smMobileSize tw-mt-2"
                    >
                      Try the app out for free!
                    </a>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          {/* Support */}

          <Col className="" md={3} lg={3} xxl={3}>
            <div className="tw-bg-fontColor tw-bg-opacity-40 tw-w-0.5 tw-h-30 tw-mt-5 lg:-tw-ml-16 xl:-tw-ml-20  tw-absolute" />
            <div className="md:tw-ml-5 lg:tw-ml-10 tw-p-5 tw-text-fontColor">
              <div>
                <p style={{ margin: 0 }} className="tw-font-primaryFonts tw-text-lg tw-font-bold">
                  Support
                </p>
              </div>
              <div className="tw-text-sm tw-font-secondaryFonts ">
                <a
                  href="mailto:support@stockpe.in"
                  className="tw-mt-2 tw-no-underline tw-block tw-text-fontColor tw-text-smMobileSize tw-text-opacity-80"
                >
                  Email Us
                </a>

                <Link
                  to="/privacy-policy"
                  className="tw-mt-2 tw-no-underline tw-block tw-text-fontColor tw-text-smMobileSize tw-text-opacity-80"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Footer */}
      <div className="tw-bg-secondBg  mobile-xs:tw-hidden">
        <div className="tw-bg-secondBg tw-max-w-screen-3xl tw-mx-auto">
          <p style={{ margin: 0 }} className="tw-text-fontColor tw-py-2 tw-text-opacity-50 tw-text-smMobileSize tw-font-normal tw-font-secondaryFonts tw-text-center">
            Copyright {currentYear} Stockation Private Limited
          </p>
        </div>
        <div className=" tw-font-secondaryFonts tw-bg-thirdBg">
          <div className="tw-px-20 tw-py-5  tw-max-w-screen-2xl tw-mx-auto">
            <p style={{ margin: 0 }} className="tw-font-medium tw-pl-10 tw-text-smMobileSize tw-text-fontColor tw-text-opacity-80">
              Disclaimer
            </p>
            <div className="lg:tw-text-xs xl:tw-text-xs md:tw-text-small tw-pt-3">
              <ul className="tw-list-disc tw-pl-20">
                <li className="tw-text-fontColor tw-font-normal  xl:tw-text-xsMobileSize tw-text-opacity-50">
                  This platform is solely meant for education purpose only
                </li>
                <li className="tw-text-fontColor tw-font-normal xl:tw-text-xsMobileSize tw-text-opacity-50">
                  We are not connected/affiliated to any government body for
                  anything inside the platform.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NinthPage;
