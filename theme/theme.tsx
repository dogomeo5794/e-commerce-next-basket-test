import { createTheme } from "@mui/material";
import { Colors } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  typography: {
    fontFamily: "Montserrat, sans-serif",
  },

  components: {
    MuiButton: {
      defaultProps: {
        // disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

export default theme;
