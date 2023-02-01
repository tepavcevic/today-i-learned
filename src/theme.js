import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      voteSm: 410,
      sm: 562,
      md: 900,
      lg: 1200,
    },
  },
});

export default theme;
