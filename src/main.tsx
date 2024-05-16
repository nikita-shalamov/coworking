import { antdConfig } from "@/config/antd.ts";
import { routeTree } from "@/routeTree.gen.ts";
import "@/styles/style.sass";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";

const queryClient = new QueryClient()

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
      router: typeof router
    }
  }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={{ token: antdConfig }}>
        <RouterProvider router={router} />
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
