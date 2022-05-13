import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";
import ListCountries from "./components/ListCountries/ListCountries";
import Icon from "./assets/icon.png";

const ButtonComponent = React.lazy(() => import("./components/Button/Button"));

const App = () => {
  return (
    <>
      <Stack direction="row" alignItems="center">
        <img src={Icon} alt="package icon" className="image" />
        <p variant="h4" component="h1">
          Hello React with Webpack and Babel
        </p>
      </Stack>
      <React.Suspense fallback={<small>Loading</small>}>
        <ButtonComponent>
          <p variant="small">Let's go</p>
          <ArrowForwardIosRounded color="secondary" fontSize="small" />
        </ButtonComponent>
      </React.Suspense>
      <ListCountries />
    </>
  );
};

export default App;
