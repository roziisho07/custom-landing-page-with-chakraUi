import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.300",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "8px",
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.500",
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#47a066",
        100: "#40905c",
        200: "#398052",
        300: "#327047",
        400: "#2b603d",
        500: "#245033",
        600: "#1c4029",
        700: "#15301f",
        800: "#0e2014",
        900: "#07100a",
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: {
        variants: {
          primary: (props: any) => ({
            rounded: "5px",
            ...brandRing,
            color: mode("white", "gray.800")(props),
            backgroundColor: mode("brand.200", "brand.400")(props),

            _hover: {
              backgroundColor: mode("brand.300", "brand.600")(props),
            },

            _active: {
              backgroundColor: mode("brand.300", "brand.400")(props),
            },
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
