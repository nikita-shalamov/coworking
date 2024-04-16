import { createFileRoute, Outlet } from "@tanstack/react-router"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const Route = createFileRoute("/_root")({
    component: () => (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    ),
})
