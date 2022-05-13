import { darkScrollbar } from "@mui/material";

export default {
  styleOverrides: (theme) => ({
    body: {
      ...(theme.palette.mode === "dark" ? darkScrollbar() : null),
      margin: theme.spacing(1.5),
    },
  }),
};
