// import img from "next/image";
import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import p4 from "../assets/p4.svg";
import p5 from "../assets/p5.svg";

const FifthPage = () => {
  return (
    <>
      <div className="mobile-xs:tw-bg-secondBg mobile-xs:tw-h-full md:tw-bg-fourthBg  md:tw-h-full lg:tw-h-76  tw-text-fontColor">
        <div className="md:tw-py-16 md:tw-px-20 mobile-xs:tw-py-8 mobile-xs:tw-px-4">
          <p className="tw-text-center mobile-xs:tw-text-baseMobileSize md:tw-text-lgDesktopSize  tw-font-medium mobile-xs:tw-font-secondaryFonts md:tw-font-primaryFonts tw-text-fontColor tw-text-opacity-40">
            Nation&lsquo;s best collaborate with us
          </p>

          <div className="md:tw-py-8 lg:tw-py-12   mobile-xs:tw-pt-4 tw-flex tw-justify-center">
            <div className="md:tw-mx-5 lg:tw-mx-8 mobile-xs:tw-mr-3">
              <img
                src={p1}
                alt="contributer-1"
                className="tw-grayscale lg:tw-h-24 md:tw-w-28  mobile-xs:tw-w-80 mobile-xs:tw-h-12"
              />
            </div>
            <div className="md:tw-mx-5 lg:tw-mx-8  mobile-xs:tw-mr-4">
              <img
                src={p2}
                alt="contributer-2"
                className="tw-grayscale lg:tw-h-24 tw-w-28 mobile-xs:tw-w-80  mobile-xs:tw-h-12"
              />
            </div>
            <div className="md:tw-mx-5 lg:tw-mx-8 mobile-xs:tw-mr-4">
              <img
                src={p3}
                alt="contributer-3"
                className="tw-grayscale lg:tw-h-24 tw-w-28 mobile-xs:tw-w-80 mobile-xs:tw-h-12"
              />
            </div>
            <div className="md:tw-mx-5 lg:tw-mx-8 mobile-xs:tw-mr-4">
              <img
                src={p4}
                alt="contributer-4"
                className="tw-grayscale lg:tw-h-24 tw-w-28 mobile-xs:tw-w-80 mobile-xs:tw-h-12"
              />
            </div>
            <div className="md:tw-mx-5 lg:tw-mx-8 mobile-xs:tw-mr-4">
              <img
                src={p5}
                alt="contributer-5"
                className="tw-grayscale lg:tw-h-24 tw-w-28 mobile-xs:tw-w-80 mobile-xs:tw-h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthPage;
