import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#C5C5C5",
    },
    background: {
      default: "#161513",
      paper: "#242321",
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      // "Poppins"
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(","),
    h1: { fontWeight: 700, letterSpacing: "-0.04em" },
    h2: { fontWeight: 700, letterSpacing: "-0.03em" },
    h3: { fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        body: { margin: 0 },
        "section[id]": { scrollMarginTop: "80px" },
        "a:focus-visible, button:focus-visible": {
          outline: "3px solid #9cd9f9",
          outlineOffset: 3,
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
