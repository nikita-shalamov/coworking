import { createLazyFileRoute } from "@tanstack/react-router"

import CoworkingList from "@/components/CoworkingList"

export const Route = createLazyFileRoute("/_root/coworkings")({
    component: () => <CoworkingList />,
})
