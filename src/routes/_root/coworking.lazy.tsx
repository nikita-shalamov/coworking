import { createLazyFileRoute } from "@tanstack/react-router"

import CoworkingPage from "@/components/CoworkingPage"

export const Route = createLazyFileRoute("/_root/coworking")({
    component: () => <CoworkingPage />,
})
