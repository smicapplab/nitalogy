import { createTheme } from "@mui/material";

const LightTheme = createTheme({
  palette: {
    black: {
      main: "#000000",
    },
    primary: {
      borderColor: "#000000",
      backgroundColor: "#ffffff",
      main: "#000000",
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
