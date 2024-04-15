import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/forbusiness")({
    component: () => <div>Hello /forbusiness!</div>,
})
