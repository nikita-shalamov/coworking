import { createLazyFileRoute } from "@tanstack/react-router"

import Comfortable from "@/components/Comfortable"
import Hero from "@/components/Hero"
import HowWorks from "@/components/HowWorks"

export const Route = createLazyFileRoute("/_root/")({
    component: () => <Page />,
})

const Page = () => {
    return (
        <div className="main_page">
            <div className="container">
                <Hero />
                <HowWorks />
                <Comfortable />
            </div>
        </div>
    )
}
