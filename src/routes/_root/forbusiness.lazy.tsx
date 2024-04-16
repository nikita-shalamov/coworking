import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_root/forbusiness")({
    component: () => <div>Hello /forbusiness!</div>,
})
