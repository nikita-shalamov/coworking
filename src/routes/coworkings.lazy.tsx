import { createLazyFileRoute } from "@tanstack/react-router"

import CoworkingList from "../components/CoworkingList"

export const Route = createLazyFileRoute("/coworkings")({
    component: () => <CoworkingList />,
})
