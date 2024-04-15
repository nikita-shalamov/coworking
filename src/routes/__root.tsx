import { Outlet, createRootRoute } from "@tanstack/react-router"

import Footer from "../components/Footer"
import Header from "../components/Header"

// import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
    component: () => (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    ),
})
