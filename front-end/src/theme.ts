import { extendTheme } from "@chakra-ui/react";
import { GARDEN_THEME } from "./constants/campaign";

const theme = extendTheme({
  colors: {
    brand: {
      500: GARDEN_THEME.primary,
    },
    garden: {
      primary: GARDEN_THEME.primary,
      secondary: GARDEN_THEME.secondary,
      accent: GARDEN_THEME.accent,
      success: GARDEN_THEME.success,
      warning: GARDEN_THEME.warning,
      info: GARDEN_THEME.info,
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "green",
      },
    },
    Progress: {
      defaultProps: {
        colorScheme: "green",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});

export default theme;
