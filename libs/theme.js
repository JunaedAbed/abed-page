import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      bg: mode(
        "linear-gradient(180deg, #f8fafc 0%, #eef4fb 45%, #e8f0fa 100%)",
        "linear-gradient(180deg, #0b1220 0%, #111827 45%, #0f172a 100%)"
      )(props),
      color: mode("#1e293b", "#e5eefc")(props),
      fontFamily: "Inter, system-ui, sans-serif",
      WebkitFontSmoothing: "antialiased",
      overflowX: "hidden",
    },
    "::selection": {
      background: mode("#9cc7f2", "#284b7a")(props),
      color: mode("#0f172a", "#f8fafc")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        fontFamily: "Space Grotesk, sans-serif",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginTop: 3,
        marginBottom: 4,
        paddingLeft: 3,
        borderLeft: "4px solid",
        borderColor: mode("#2bb3a3", "#60c5ff"),
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#2563eb", "#93d5ff")(props),
      fontWeight: 500,
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "Space Grotesk, sans-serif",
  body: "Inter, system-ui, sans-serif",
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
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
