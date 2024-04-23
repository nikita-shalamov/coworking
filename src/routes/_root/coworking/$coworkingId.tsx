import { CoworkingService } from "@/services/CoworkingService"
import { ExportOutlined } from "@ant-design/icons"
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps"
import { createFileRoute } from "@tanstack/react-router"
import { Badge, Button } from "antd"

import { backgroundColorRating } from "@/helpers/backgroundColorRating"

import FavoriteToggler from "@/components/CoworkingPage/FavoriteToggler"
import Gallery from "@/components/CoworkingPage/Gallery"
import Feedback from "@/components/Feedback"

export const Route = createFileRoute("/_root/coworking/$coworkingId")({
    loader: ({ params: { coworkingId } }) => CoworkingService.getCoworking(Number(coworkingId)),
    component: () => <Page />,
})

const Page = () => {
    const data = Route.useLoaderData()

    return (
        <div className="coworking_page">
            <div className="container">
                <div className="coworking_page__wrapper">
                    <div className="coworking_page__header">
                        <FavoriteToggler id={data.id} defaultIsFavorite={data.isFavorite} />
                        <Button className="coworking_page__share" type="primary" icon={<ExportOutlined />} size="large" />
                    </div>
                    <div className="coworking_page__content">
                        <Gallery images={data.images} />
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
                                    <div className="coworking_card-options">{data.conveniences.join(" · ")}</div>
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
                                        center: [data.longitude, data.latitude],
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
                                        defaultGeometry={[data.longitude, data.latitude]}
                                    />
                                </Map>
                            </YMaps>
                        </div>
                    </div>
                    <Feedback />
                </div>
            </div>
        </div>
    )
}
