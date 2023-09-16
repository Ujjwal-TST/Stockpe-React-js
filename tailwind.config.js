/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile-xs": { min: "320px", max: "760px" },
        "2xl": "1440px",
        "3xl": "1536px",
      },
      colors: {
        primary: "#FFF616",
        primaryBg: "#121212",
        secondBg: "#1F1F1F",
        thirdBg: "#171717",
        fourthBg: "#1B1B1B",
        fontColor: "#FBFFFF",
        secondFontColor: "#A3A5A5",
      },
      margin: {
        58: "229px",
      },
      spacing: {
        22: "92px",
      },
      maxWidth: {
        "screen-3xl": "1536px",
        xsDesktop: "22rem",
      },
      width: {
        38: "150px",
        50: "200px",
        85: "454px",
        200: "700px",
        xl: "1280px",
      },
      height: {
        11: "44px",
        30: "124px",
        76: "300px",
      },
      fontFamily: {
        primaryFonts: ["Montserrat", "sans-serif"],
        secondaryFonts: ["DM Sans", "sans-serif"],
      },
      lineHeight: {
        12: "3rem",
      },
      fontSize: {
        xsMobileSize: "13px",
        smMobileSize: "15px",
        baseMobileSize: "17px",

        // Desktop Sizes
        lgDesktopSize: "22px",
        xlDesktopSize: ["42px", "3rem"],
        "2xlDesktopSize": ["44px", "3rem"],
      },
    },
  },
  plugins: [],
};
