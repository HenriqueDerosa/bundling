import { ArrowForwardIosRounded } from "@mui/icons-material";
import React from "react";
import Icon from "./assets/icon.png";
import styles from "./app.modules.css";

const Stack = React.lazy(() => import("@mui/material/Stack"));
const ButtonComponent = React.lazy(() => import("./components/Button/Button"));
const ListCountriesComponent = React.lazy(() =>
  import("./components/ListCountries/ListCountries")
);

const App = () => {
  const onClick = () => {
    console.log("clicked on the button");
  };

  return (
    <>
      <React.Suspense fallback={<small>loading title...</small>}>
        <Stack direction="row" alignItems="center">
          <img src={Icon} alt="package icon" className={styles.image} />
          <p variant="h4" component="h1">
            Hello React with Webpack and Babel
          </p>
        </Stack>
      </React.Suspense>
      <React.Suspense fallback={<small>loading button...</small>}>
        <ButtonComponent onClick={onClick}>
          <p variant="small">Let's go</p>
          <ArrowForwardIosRounded color="secondary" fontSize="small" />
        </ButtonComponent>
      </React.Suspense>
      <React.Suspense fallback={<small>loading countries...</small>}>
        <ListCountriesComponent />
      </React.Suspense>
    </>
  );
};

export default App;
