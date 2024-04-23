import { useRef, useState } from "react"

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge, Button, Carousel } from "antd"
import { CarouselRef } from "antd/es/carousel"

import { backgroundColorRating } from "@/helpers/backgroundColorRating"

interface coworkingCardProps {
    title: string;
    images: string[];
    price: number;
    link: string;
    rating: number;
    metro: string;
    address: string;
}

export default function CoworkingCard({ title, images, price, link, rating, metro, address }: coworkingCardProps) {
    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: "100%",
        width: "100%",
        color: "#fff",
        textAlign: "center",
        background: "#364d79",
    }

    const ref = useRef<CarouselRef>(null)

    const [isFavorite, setIsFavorite] = useState(false) // Состояние для отслеживания статуса избранного

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite) // Переключение состояния
    }

    const cardOpen = () => {
        console.log(5)
    }
    return (
        <div className="coworking_card">
            <div className="coworking_card_click_elem" onClick={cardOpen}></div>
            <div className="coworking_card__wrapper">
                <Badge className="coworking_raiting" count={"Рейтинг: " + rating + " / 5"} style={{ backgroundColor: backgroundColorRating(rating) }} />
                <div className="coworking_card__col coworking_card__col-1">
                    <div className="coworking_card__carousel">
                        <Carousel ref={ref}>
                            {images.map((el, index) => (
                                <div className="coworking_card-image" style={contentStyle} key={index}>
                                    <img src={el} alt={title} />
                                </div>
                            ))}
                        </Carousel>
                        <div
                            className="coworking_card__arrow_prev"
                            onClick={() => {
                                ref.current?.prev?.()
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <div
                            className="coworking_card__arrow_next"
                            onClick={() => {
                                ref.current?.next?.()
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                </div>
                <div className="coworking_card__col">
                    <div className="coworking_card-info">
                        <div className="coworking_card-title">{title}</div>
                        <div className="coworking_card-price">Стоимость за час: от {price.toFixed(2)}р.</div>
                        <div className="coworking_card-options">Безлимитный кофе · Удобные места · Больше окна</div>
                        <div className="coworking_card-location">
                            <img
                                width="15"
                                height="15"
                                src="https://img.icons8.com/external-others-inmotus-design/67/external-Subway-metro-others-inmotus-design-14.png"
                                alt="external-Subway-metro-others-inmotus-design-14"
                            />
                            <div className="coworking_card-metro">{metro}</div>
                            <img width="15" height="15" src="https://img.icons8.com/material-rounded/24/visit.png" alt="visit" />
                            <div className="coworking_card-address">{address}</div>
                        </div>
                    </div>
                    <div className="coworking_card-button__wrapper">
                        <svg
                            className={`coworking_card-heart ${isFavorite ? "active" : ""}`}
                            onClick={toggleFavorite}
                            width="24"
                            height="21"
                            viewBox="0 0 24 21"
                            fill={isFavorite ? "#FF4242" : "none"}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.84 2.60999C20.3292 2.099 19.7228 1.69364 19.0554 1.41708C18.3879 1.14052 17.6725 0.998169 16.95 0.998169C16.2275 0.998169 15.5121 1.14052 14.8446 1.41708C14.1772 1.69364 13.5708 2.099 13.06 2.60999L12 3.66999L10.94 2.60999C9.9083 1.5783 8.50903 0.998704 7.05 0.998704C5.59096 0.998704 4.19169 1.5783 3.16 2.60999C2.1283 3.64169 1.54871 5.04096 1.54871 6.49999C1.54871 7.95903 2.1283 9.3583 3.16 10.39L4.22 11.45L12 19.23L19.78 11.45L20.84 10.39C21.351 9.87924 21.7563 9.27281 22.0329 8.60535C22.3095 7.93789 22.4518 7.22248 22.4518 6.49999C22.4518 5.77751 22.3095 5.0621 22.0329 4.39464C21.7563 3.72718 21.351 3.12075 20.84 2.60999V2.60999Z"
                                stroke="#FF4242"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <Button className="coworking_card-button" type="primary" href={link}>
                            Забронировать
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
