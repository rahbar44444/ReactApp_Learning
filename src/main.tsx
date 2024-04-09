import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
=======
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
//import "./components/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
>>>>>>> 659ed18edafc69fed5a7893188ccf775cf4db858
  </React.StrictMode>
);
