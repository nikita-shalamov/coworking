import Comfortable from "./Comfortable"
import Hero from "./Hero"
import HowWorks from "./HowWorks"

export default function MainPage() {
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
