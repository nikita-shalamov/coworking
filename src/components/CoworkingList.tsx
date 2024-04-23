import CoworkingCard from "./CoworkingCard/CoworkingCard"
import Filters from "./Filters"
import SearchForm from "./SearchForm"

const coworkings = [
    {
        id: 1,
        title: "Коворкинг 1",
        images: ["../images/coworkings/image.png", "../images/coworkings/image.png", "../images/coworkings/image.png"],
        price: 199,
        link: "https://t.me/nikita_frl",
        rating: 4,
        metro: "м. Крестовский остров",
        address: "ул. Морской просп., 25",
        conveniences: ["Безлимитный кофе", "Удобные места", "Больше окна"],
        isFavorite: false,
    },
    {
        id: 2,
        title: "Коворкинг 1",
        images: ["../images/coworkings/image.png", "../images/coworkings/image.png", "../images/coworkings/image.png"],
        price: 200,
        link: "https://t.me/nikita_frl",
        rating: 5,
        metro: "м. Крестовский остров",
        address: "ул. Морской просп., 25",
        conveniences: ["Безлимитный кофе", "Удобные места", "Больше окна"],
        isFavorite: false,
    },
    {
        id: 3,
        title: "Коворкинг 1",
        images: ["../images/coworkings/image.png", "../images/coworkings/image.png", "../images/coworkings/image.png"],
        price: 201,
        link: "https://t.me/nikita_frl",
        rating: 2,
        metro: "м. Крестовский остров",
        address: "ул. Морской просп., 25",
        conveniences: ["Безлимитный кофе", "Удобные места", "Больше окна"],
        isFavorite: true,
    },
]

export default function CoworkingList() {
    return (
        <>
            <div className={"coworking_list"}>
                <div className={"container"}>
                    <div className="coworking_list__wrapper">
                        <Filters />
                        <div className="coworking_list__items">
                            <SearchForm />
                            <h1 className={"coworking_list__title title"}>Список коворкингов</h1>
                            {coworkings.map(coworking => (
                                <CoworkingCard key={coworking.id} {...coworking} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
