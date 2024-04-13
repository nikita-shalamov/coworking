import CoworkingCard from "./CoworkingCard"
import Filters from "./Filters"

export default function CoworkingList() {
    const coworkings = [
        {
            title: "Коворкинг 1",
            image: "../assets/images/image.png",
        },
        {
            title: "Коворкинг 1",
            image: "../images/coworkings/image.png",
        },
        {
            title: "Коворкинг 1",
            image: "../assets/images/coworkings/image.png",
        },
    ]
    return (
        <>
            <div className={"coworking_list"}>
                <div className={"container"}>
                    <div className="coworking_list__wrapper">
                        <h1 className={"coworking_list__title title"}>Список коворкингов</h1>
                        <Filters />
                        <div className="coworking_list__items">
                            {coworkings.map(coworking => {
                                return <CoworkingCard title={coworking.title} image={coworking.image} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
