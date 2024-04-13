import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import { antdConfig } from "./config/antd.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: antdConfig }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
