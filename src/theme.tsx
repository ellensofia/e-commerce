import {
  createTheme,
  responsiveFontSizes,
  Shadows,
  Theme,
} from "@mui/material";

// Skapa en responsiv fontstorlek baserad på golden ratio
const goldenRatio = 1.618;
const baseFontSize = "1rem";
const generateResponsiveFontSize = (size: number): string => {
  const fontSize = size * goldenRatio;
  return `calc(${fontSize} * ${baseFontSize})`;
};

export let theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      //   "DM Sans",
      "avenir",
      "-apple-system",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: generateResponsiveFontSize(36), // 36 * golden ratio
      fontWeight: 400,
      color: "black",
    },
    h2: {
      fontSize: generateResponsiveFontSize(32), // 32 * golden ratio
      fontWeight: 400,
    },
    h3: {
      fontSize: generateResponsiveFontSize(28), // 28 * golden ratio
    },
    h4: {
      fontSize: generateResponsiveFontSize(24), // 24 * golden ratio
      fontWeight: 500,
    },
    h5: {
      fontSize: generateResponsiveFontSize(20), // 20 * golden ratio
    },
    h6: {
      fontSize: generateResponsiveFontSize(16), // 16 * golden ratio
    },
    body1: {
      fontSize: generateResponsiveFontSize(20), // 20 * golden ratio
      color: "#4f4f4f",
      "@media (max-width: 600px)": {
        fontSize: generateResponsiveFontSize(16), // 16 * golden ratio
      },
    },
  },
  palette: {
    primary: {
      main: "#3C3C3C",
    },
    secondary: {
      main: "#C7D8B7",
    },
    lightGrey: {
      main: "#e7e7e7",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "h1, h2, h3, h4, h5, h6": {
            color: "#222",
          },
        },
      },
    },
  },
  shadows: Array(25).fill("none") as Shadows,
});

// Gör temat responsivt
theme = responsiveFontSizes(theme, {
  breakpoints: ["sm", "md", "lg"],
  factor: 1.75,
  variants: ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2"],
});

declare module "@mui/material/styles" {
  interface Palette {
    lightGrey: Palette["primary"];
  }
  interface PaletteOptions {
    lightGrey?: PaletteOptions["primary"];
  }
}
