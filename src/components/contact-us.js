import { useState } from "react";
// import img from "next/image";
import { Button, Col, Modal, ModalBody, ModalFooter, Row } from "reactstrap";
import close from "../assets/close.svg";

const ContactUs = () => {
  const [mobileModal, setMobileModal] = useState(false);
  const [About, setAbout] = useState(false);

  return (
    <div className="tw-bg-red-400 tw-font-primaryFonts">
      <Button
        color="primary"
        type="button"
        onClick={() => setMobileModal(!mobileModal)}
      >
        Launch demo modal
      </Button>
      <Modal
        toggle={() => setMobileModal(!mobileModal)}
        isOpen={mobileModal}
        centered
        className="md:tw-hidden"
        size={"sm"}
      >
        <div className=" tw-border-secondBg tw-bg-secondBg tw-rounded-lg ">
          <div className="tw-bg-secondBg tw-rounded-t-lg tw-text-primary tw-border-none modal-header">
            <p className=" text-lg">Contact Us</p>

            <img
              onClick={() => {
                setMobileModal((prev) => !prev);
              }}
              src={close}
              alt="close-button"
              className="tw-cursor-pointer"
            />
          </div>
          <ModalBody className="tw-bg-secondBg tw-rounded-b-lg tw-text-white tw-px-10 ">
            <Row className="tw-font-secondaryFonts ">
              <Col md={12} lg={12} xl={12}>
                <p className="tw-text-xs ">Phone</p>
                <p className="py-1 tw-text-sm">+91 9910470891</p>
                <p className="tw-text-sm">+91 9910470891***</p>
              </Col>
              <Col className="mt-4" md={12} lg={12} xl={12}>
                <p className="tw-text-xs ">Email</p>
                <p className="py-1 tw-text-sm">support@stockpe.in</p>
                <p className="tw-text-sm">founders@stockpe.in</p>
              </Col>
            </Row>
            <div className="tw-mt-8">
              <Row>
                <Col className="" xs={10}>
                  <p className="tw-text-lg">About Company</p>
                </Col>
                <Col className="" xs={2}>
                  <div className="tw-float-right">
                    {!About && (
                      <span
                        onClick={() => {
                          setAbout((prev) => !prev);
                        }}
                        className=" tw-cursor-pointer"
                      >
                        &or;
                      </span>
                    )}
                    {About && (
                      <span
                        onClick={() => {
                          setAbout((prev) => !prev);
                        }}
                        className="tw-cursor-pointer"
                      >
                        &and;
                      </span>
                    )}
                  </div>
                </Col>
              </Row>
              {About && (
                <div>
                  <Row className="tw-font-secondaryFonts tw-mt-4">
                    <Col xs={12} sm={12} md={12} className="">
                      <p className="tw-text-xs pb-1">CIN Number</p>
                      <p className="tw-text-sm">U80900DL2021PTC387834</p>
                    </Col>
                    <Col xs={12} sm={12} md={12} className="tw-mt-4">
                      <p className="tw-text-xs pb-1">
                        Startup India Certificate Number
                      </p>
                      <p className="tw-text-sm">DIPP91496</p>
                    </Col>
                  </Row>
                  <Row className="tw-font-secondaryFonts tw-mt-4">
                    <Col md={12} lg={12} xl={12}>
                      <p className="tw-text-xs">Registered Address</p>
                      <p className=" tw-text-sm">
                        30/34, 35-A 4th Floor, West Patel Nagar, New Delhi,
                        110008
                      </p>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
            {/* <Row className="tw-font-secondaryFonts mt-4">
              <Col md={6} lg={6} xl={6}>
                <p className="tw-text-xs pb-1">GIN Number</p>
                <p className="py-1">U80900DL2021PTC387834</p>
              </Col>
              <Col md={6} lg={6} xl={6}>
                <p className="tw-text-xs pb-1">
                  Startup India Certificate Number
                </p>
                <p className="py-1">DIPP91496</p>
              </Col>
            </Row>
            <Row className="tw-font-secondaryFonts mt-4">
              <Col md={12} lg={12} xl={12}>
                <p className="tw-text-xs pb-1">Registered Address</p>
                <p className="py-1">
                  30/34, 35-A 4th Floor, West Patel Nagar, New Delhi, 110008
                </p>
              </Col>
            </Row> */}
          </ModalBody>
        </div>
      </Modal>
    </div>
  );
};

export default ContactUs;
