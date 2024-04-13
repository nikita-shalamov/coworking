import CoworkingCard from "./CoworkingCard"
import Filters from "./Filters"

export default function CoworkingList() {
    const coworkings = [
        {
            title: "Коворкинг 1",
            image: "../images/coworkings/image.png",
            price: 199,
            link: "https://t.me/nikita_frl",
        },
        {
            title: "Коворкинг 1",
            image: "../images/coworkings/image.png",
            price: 200,
            link: "https://t.me/nikita_frl",
        },
        {
            title: "Коворкинг 1",
            image: "../images/coworkings/image.png",
            price: 201,
            link: "https://t.me/nikita_frl",
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
                                return <CoworkingCard title={coworking.title} image={coworking.image} price={coworking.price} link={coworking.link} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
