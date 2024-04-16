import { createLazyFileRoute } from "@tanstack/react-router"

import MainPage from "@/components/MainPage"

export const Route = createLazyFileRoute("/_root/")({
    component: () => <MainPage />,
})
