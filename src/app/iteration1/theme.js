import { createTheme } from "@mui/material";

const LightTheme = createTheme({
  palette: {
    black: {
      main: "#000000",
    },
    primary: {
      main: "#194175",
      contrastText: "#fff", //button text white instead of black
    },
    background: {
      default: "#ffffff",
    },
    secondary: {
      backgroundColor: "#ffffff",
      main: "#8cc63e",
      contrastText: "#194175",
    },
    tertiary: {
      backgroundColor: "white",
      main: "white",
      contrastText: "white",
    },
    white: {
      main: "#ffffff !important",
      contrastText: "#000000 !important",
    },
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
});

export default LightTheme;
