import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
     
    </RecoilRoot>
  </React.StrictMode>
  </CookiesProvider>
);
