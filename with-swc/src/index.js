import React from "react";
import { createRoot } from "react-dom/client";

import App from "./app";

// import "./index.css";
import Theme from "./styles/theme";

const root = createRoot(document.getElementById("root"));

root.render(
  <Theme>
    <App />
  </Theme>
);
