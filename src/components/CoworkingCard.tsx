/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react"

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge, Button, Carousel } from "antd"

interface coworkingCardProps {
    title: string;
    image: string;
    price: number;
    link: string;
    rating: number;
    metro: string;
    address: string;
}

export default function CoworkingCard({ title, image, price, link, rating, metro, address }: coworkingCardProps) {
    const backgroundColorRating = (rating: number) => {
        if (rating <= 4 && rating >= 3) {
            return "#faad14"
        }
        if (rating > 4) {
            return "#52c41a"
        } else {
            return "#f5222d"
        }
    }

    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: "100%",
        width: "100%",
        color: "#fff",
        textAlign: "center",
        background: "#364d79",
    }

    const ref = useRef<any>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(prev => prev + 1)
    }

    const prevSlide = () => {
        setCurrentIndex(prev => prev + 1)
    }

    return (
        <div className="coworking_card">
            <div className="coworking_card__wrapper">
                <Badge className="coworking_raiting" count={"Рейтинг: " + rating + " / 5"} style={{ backgroundColor: backgroundColorRating(rating) }} />
                <div className="coworking_card__col coworking_card__col-1">
                    <div className="coworking_card__carousel">
                        <Carousel ref={ref}>
                            <div className="coworking_card-image" style={contentStyle}>
                                <img src={image} alt={title} />
                            </div>
                            <div className="coworking_card-image" style={contentStyle}>
                                <img src={image} alt={title} />
                            </div>
                            <div className="coworking_card-image" style={contentStyle}>
                                <img src={image} alt={title} />
                            </div>
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
                        <Button className="coworking_card-button" type="primary" href={link}>
                            Забронировать
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
