import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ children }) => {
  return (
    <MuiButton color="primary" variant="contained">
      {children}
    </MuiButton>
  );
};

export default Button;
