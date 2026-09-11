import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      backgroundColor: mode("#f7f8fa", "#000000")(props),
      backgroundImage: mode(
        "radial-gradient(900px 480px at 50% -10%, rgba(10,132,255,0.06), transparent 60%)",
        "radial-gradient(1000px 560px at 12% -10%, rgba(10,132,255,0.26), transparent 60%), radial-gradient(900px 520px at 100% 0%, rgba(50,214,196,0.14), transparent 55%)"
      )(props),
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      color: mode("#1d1d1f", "#f5f5f7")(props),
      fontFamily: "Figtree, system-ui, sans-serif",
      WebkitFontSmoothing: "antialiased",
      overflowX: "hidden",
    },
    "::selection": {
      background: mode("#bfe0ff", "#123a63")(props),
      color: mode("#0f172a", "#f5f5f7")(props),
    },
  }),
};

const components = {
  Heading: {
    baseStyle: {
      letterSpacing: "-0.01em",
    },
    variants: {
      "section-title": (props) => ({
        fontFamily: "Manrope, sans-serif",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginTop: 3,
        marginBottom: 4,
        paddingLeft: 3,
        borderLeft: "4px solid",
        borderColor: mode("#0071e3", "#32d6c4")(props),
      }),
      "page-title": (props) =>
        props.colorMode === "dark"
          ? {
              fontFamily: "Manrope, sans-serif",
              fontSize: { base: "34px", md: "50px" },
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
              bgGradient: "linear(120deg, #ffffff, #cfe9ff 55%, #8fd6ff)",
              bgClip: "text",
              color: "transparent",
            }
          : {
              fontFamily: "Manrope, sans-serif",
              fontSize: { base: "34px", md: "50px" },
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
              color: "#1d1d1f",
            },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#0071e3", "#5ec2ff")(props),
      fontWeight: 500,
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "Manrope, sans-serif",
  body: "Figtree, system-ui, sans-serif",
};

const colors = {
  grassTeal: "#7acfc6",
  brandBlue: {
    50: "#eef6ff",
    100: "#d9eaff",
    200: "#b8d7ff",
    300: "#8fc0ff",
    400: "#63a6ff",
    500: "#3f8cff",
    600: "#2f6fe0",
    700: "#2358b3",
    800: "#1e468c",
    900: "#1b3a70",
  },
  // Repointed from Chakra's default green-teal to the Pro Dark
  // blue -> teal accent duotone, so every existing colorScheme="teal"
  // usage (buttons, badges, tags, hover borders) picks it up for free.
  teal: {
    50: "#e9f4ff",
    100: "#cde6ff",
    200: "#9ecfff",
    300: "#6cb6ff",
    400: "#3d9dff",
    500: "#0a84ff",
    600: "#0868cc",
    700: "#064e99",
    800: "#043666",
    900: "#021e3d",
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
