import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
    },
  },
  palette: {
    background: {
      default: "#222222",
    },
    primary: {
      main: "#456A69",
    },
    text: {
      primary: "#ffffff",
      secondary: "#69b3b1",
    },
    secondary: {
      main: "#69b3b1",
    },
  },
});
