import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/loginpage")({
    component: () => <div>Hello /loginpage!</div>,
})
