// import img from "next/image";
import { motion } from "framer-motion";
import container from "../assets/Container.avif";
import { useInView } from "react-intersection-observer";
// import a from "next/link";

const EighthPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.5, // Percentage of element visibility to trigger the animation
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      {/*Mobile View */}
      <div className="tw-bg-primaryBg tw-text-secondFontColor tw-px-3 tw-font-primaryFonts md:tw-hidden">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 100 }} // Initial position and opacity
            animate={inView ? "visible" : "hidden"} // Target position and opacity
            variants={animationVariants}
            transition={{
              duration: 0.7,
              delay: 0.3,
              type: "tween",
              ease: "easeOut",
            }}
          >
            <div className="">
              <p className="tw-text-fontColor text-large tw-font-semibold">
                Start your StockPe <br /> journey today
              </p>
            </div>
            <div className="tw-pt-4">
              <p className="tw-font-secondaryFonts">
                Join the&nbsp;
                <span className="tw-text-primary">2 Lakh+ users </span> on
                StockPe!
              </p>
            </div>
          </motion.div>
        </div>
        <a
          href="https://stockpe.app.link/1MXBYa7qvBb"
          target="_blank"
          rel="noreferrer"

        >
          <div className="tw-text-center tw-block  tw-py-8 tw-pb-10">
            <button className="tw-text-smMobileSize tw-h-12 tw-font-semibold  tw-w-full tw-font-secondaryFonts click-arrow active:tw-text-opacity-70 tw-bg-primary tw-text-black tw-px-10 tw-py-2 tw-rounded-md">
              Download App
              {/* <img
              src={button_arrow}
              alt="arrow"
              className="tw-inline click-arrow active:tw-text-opacity-70 tw-mx-2 -tw-mt-1"
            /> */}
            </button>
          </div>
        </a>
      </div>

      {/* Desktop View */}

      <div className="container-1 tw-bg-primaryBg  lg:py-34 md:tw-py-12  tw-px-20 mobile-xs:tw-hidden">
        <img
          src={container}
          alt="earn to invest in stock market india"
          className="md:tw-w-full 2xl:tw-w-xl tw-max-w-screen-3xl tw-mx-auto"
        />
        <a
          href="https://stockpe.app.link/1MXBYa7qvBb"
          target="_blank"
          rel="noreferrer"

        >
          <button className="button-on-image lg:tw-w-50  lg:tw-h-12 tw-bg-primaryBg   tw-text-primary   tw-rounded-md">
            <p className="lg:tw-text-base md:tw-text-xs md:tw-py-2 tw-font-secondaryFonts md:tw-px-5 tw-font-bold lg:tw-px-4 lg:tw-py-3 ">
              Download App
            </p>
          </button>
        </a>
      </div>
    </>
  );
};

export default EighthPage;
