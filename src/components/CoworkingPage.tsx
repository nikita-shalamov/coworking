import { useState } from "react"

import { ExportOutlined } from "@ant-design/icons"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps"
import { Badge, Button } from "antd"
import { Galleria } from "primereact/galleria"

import BookingForm from "./BookingForm"
import Description from "./Description"
import Feedback from "./Feedback"

interface coworkingPageProps {
    coworkingIndex: number;
}

export default function CoworkingPage({ coworkingIndex }: coworkingPageProps) {
    const data = {
        id: 1,
        title: "Коворкинг 1",
        images: [
            "../images/coworkings/image.png",
            "../images/coworkings/image.png",
            "../images/coworkings/image.png",
            "../images/coworkings/image.png",
            "../images/coworkings/image.png",
            "../images/coworkings/image.png",
        ],
        price: 199,
        link: "https://t.me/nikita_frl",
        rating: 4,
        metro: "м. Крестовский остров",
        address: "ул. Морской просп., 25",
        feedbackCounter: 3,
    }

    const [isFavorite, setIsFavorite] = useState(false) // Состояние для отслеживания статуса избранного

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite) // Переключение состояния
    }

    const [activeIndex, setActiveIndex] = useState(0)

    const prev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
    }

    const next = () => {
        if (activeIndex < data.images.length - 1) {
            setActiveIndex(activeIndex + 1)
        }
    }

    const responsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: "768px",
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: "560px",
            numVisible: 1,
            numScroll: 1,
        },
    ]

    const itemTemplate = (item: string) => {
        return (
            <div className="item-template">
                <img src={item} alt={item} style={{ width: "100%", display: "block" }} />
            </div>
        )
    }

    const thumbnailTemplate = (item: string) => {
        return <img src={item} alt={item} style={{ width: "100%", display: "block" }} />
    }

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

    return (
        <div className="coworking_page">
            <div className="container">
                <div className="coworking_page__wrapper">
                    <div className="coworking_page__header">
                        <button onClick={toggleFavorite} className={`coworking_page__heart  ${isFavorite ? "active" : ""}`}>
                            <svg
                                className={`coworking_page__heart_icon ${isFavorite ? "active" : ""}`}
                                width="24"
                                height="21"
                                viewBox="0 0 24 21"
                                fill={isFavorite ? "#FF4242" : "none"}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.84 2.60999C20.3292 2.099 19.7228 1.69364 19.0554 1.41708C18.3879 1.14052 17.6725 0.998169 16.95 0.998169C16.2275 0.998169 15.5121 1.14052 14.8446 1.41708C14.1772 1.69364 13.5708 2.099 13.06 2.60999L12 3.66999L10.94 2.60999C9.9083 1.5783 8.50903 0.998704 7.05 0.998704C5.59096 0.998704 4.19169 1.5783 3.16 2.60999C2.1283 3.64169 1.54871 5.04096 1.54871 6.49999C1.54871 7.95903 2.1283 9.3583 3.16 10.39L4.22 11.45L12 19.23L19.78 11.45L20.84 10.39C21.351 9.87924 21.7563 9.27281 22.0329 8.60535C22.3095 7.93789 22.4518 7.22248 22.4518 6.49999C22.4518 5.77751 22.3095 5.0621 22.0329 4.39464C21.7563 3.72718 21.351 3.12075 20.84 2.60999V2.60999Z"
                                    stroke={isFavorite ? "#FF4242" : "#b6b6b6"}
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            Избранное
                        </button>
                        <Button className="coworking_page__share" type="primary" icon={<ExportOutlined />} size="large" />
                    </div>
                    <div className="coworking_page__content">
                        <div className="coworking_page__col">
                            <div className="coworking_page__galery">
                                <Galleria
                                    value={data.images}
                                    activeIndex={activeIndex}
                                    onItemChange={e => setActiveIndex(e.index)}
                                    responsiveOptions={responsiveOptions}
                                    numVisible={5}
                                    item={itemTemplate}
                                    thumbnail={thumbnailTemplate}
                                    style={{ maxWidth: "100%" }}
                                />
                                <div onClick={prev} className="coworking_page__galery_button_left">
                                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#fff", fontSize: "30px" }} />
                                </div>
                                <div onClick={next} className="coworking_page__galery_button_right">
                                    <FontAwesomeIcon icon={faChevronRight} style={{ color: "#fff", fontSize: "30px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="coworking_page__col">
                            <div className="coworking_page__col_content">
                                <div className="coworking_raiting__wrapper">
                                    <a href="#" className="coworking_raiting__feedback">
                                        Отзывы: {data.feedbackCounter}
                                    </a>
                                    <Badge className="coworking_raiting" count={"Рейтинг: " + data.rating + " / 5"} style={{ backgroundColor: backgroundColorRating(data.rating) }} />
                                </div>
                                <div className="coworking_card-info">
                                    <h1 className="coworking_page__title">{data.title}</h1>
                                    <div className="coworking_card-price">Стоимость за час: от {data.price.toFixed(2)}р.</div>
                                    <div className="coworking_card-options">Безлимитный кофе · Удобные места · Больше окна</div>
                                    <div className="coworking_card-location">
                                        <img
                                            width="15"
                                            height="15"
                                            src="https://img.icons8.com/external-others-inmotus-design/67/external-Subway-metro-others-inmotus-design-14.png"
                                            alt="external-Subway-metro-others-inmotus-design-14"
                                        />
                                        <div className="coworking_card-metro">{data.metro}</div>
                                        <img width="15" height="15" src="https://img.icons8.com/material-rounded/24/visit.png" alt="visit" />
                                        <div className="coworking_card-address">{data.address}</div>
                                    </div>
                                </div>
                                <div className="coworking_card-button__wrapper">
                                    <Button className="coworking_card-button" type="primary" href={data.link}>
                                        Забронировать
                                    </Button>
                                </div>
                            </div>
                            <YMaps>
                                <Map
                                    defaultState={{
                                        center: [56.831956, 60.602963],
                                        zoom: 16,
                                        controls: ["zoomControl", "fullscreenControl"],
                                    }}
                                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                                    className="coworking_page__map"
                                >
                                    <Placemark
                                        modules={["geoObject.addon.balloon"]}
                                        properties={{
                                            balloonContentBody: "Description",
                                        }}
                                        defaultGeometry={[56.831956, 60.602963]}
                                    />
                                </Map>
                            </YMaps>
                        </div>
                    </div>
                    <Feedback />
                    <Description />
                </div>
            </div>
        </div>
    )
}
