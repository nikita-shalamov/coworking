import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { antdConfig } from "./config/antd.ts";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import "./styles/style.sass"

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
      router: typeof router
    }
  }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: antdConfig }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
