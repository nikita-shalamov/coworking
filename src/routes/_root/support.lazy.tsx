import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_root/support")({
    component: () => <div>Hello /support!</div>,
})
