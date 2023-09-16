// import img from "next/image";
import f1 from "../assets/f1.svg";
import f2 from "../assets/f2.svg";
import f3 from "../assets/f3.svg";
import f4 from "../assets/f4.svg";
import { Col, Row } from "reactstrap";
const SeventhPage = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="tw-bg-secondBg tw-h-full md:tw-hidden tw-text-fontColor">
        <div className="tw-mx-4 tw-py-10">
          <p className="tw-text-center tw-text-baseMobileSize tw-font-secondaryFonts tw-font-medium tw-text-fontColor tw-text-opacity-40">
            Featured in
          </p>

          <div className="tw-py-4 ">
            <Row>
              <Col xs={7}>
                <img
                  src={f1}
                  alt="contributer-1"
                  className="tw-grayscale tw-w-56"
                />
              </Col>
              <Col className="">
                <img
                  src={f2}
                  alt="contributer-2"
                  className="tw-grayscale tw-w-32 "
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={7}>
                <img
                  src={f3}
                  alt="contributer-3"
                  className="tw-grayscale tw-w-56"
                />
              </Col>
              <Col>
                <img
                  src={f4}
                  alt="contributer-4"
                  className="tw-grayscale tw-w-40 mt-2"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="tw-bg-fourthBg  tw-h-full mobile-xs:tw-hidden tw-text-fontColor">
        <div className="tw-p-20  tw-max-w-screen-3xl tw-mx-auto">
          <p className="tw-text-center tw-text-lgDesktopSize tw-font-medium tw-font-primaryFonts tw-text-fontColor tw-text-opacity-40">
            Featured in
          </p>

          <div className="tw-py-8 tw-flex tw-justify-between tw-items-center ">
            <div className="md:tw-mx-5 mobile-xs:tw-mr-3">
              <img src={f1} alt="featured-1" className="tw-grayscale tw-w-72" />
            </div>
            <div className="md:tw-mx-5 mobile-xs:tw-mr-3">
              <img
                src={f2}
                alt="featured-2"
                className="tw-grayscale tw-w-36 "
              />
            </div>
            <div className="md:tw-mx-5 mobile-xs:tw-mr-3">
              <img
                src={f3}
                alt="featured-3"
                className="tw-grayscale tw-w-72 "
              />
            </div>
            <div className="md:tw-mx-5 mobile-xs:tw-mr-3">
              <img
                src={f4}
                alt="featured-4"
                className="tw-grayscale tw-w-40 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeventhPage;
