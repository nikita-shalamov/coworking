
import { Badge, Button } from "antd";

import { backgroundColorRating } from "@/helpers/backgroundColorRating";

import { useNavigate } from "@tanstack/react-router";
import FavoriteToggler from "./FavoriteToggler";
import Galery from "./Galery";

interface CoworkingCardProps {
    title: string;
    images: string[];
    conveniences: string[]
    price: number;
    link: string;
    rating: number;
    metro: string;
    address: string;
    isFavorite: boolean
    id: number
}

export default function CoworkingCard({ title, images, price, link, rating, metro, address, conveniences, id, isFavorite }: CoworkingCardProps) {
    const route = useNavigate({ from: '/coworkings' })

    const cardOpen = () => {
        route({ to: '/coworking/$coworkingId', params: { coworkingId: id.toString() } })
    }
    console.log(321)

    return (
        <div className="coworking_card">
            <div className="coworking_card_click_elem" onClick={cardOpen} />
            <div className="coworking_card__wrapper">
                <Badge className="coworking_raiting" count={"Рейтинг: " + rating + " / 5"} style={{ backgroundColor: backgroundColorRating(rating) }} />
                <Galery images={images} title={title} />
                <div className="coworking_card__col">
                    <div className="coworking_card-info">
                        <div className="coworking_card-title">{title}</div>
                        <div className="coworking_card-price">Стоимость за час: от {price.toFixed(2)}р.</div>
                        <div className="coworking_card-options">{conveniences.join(' · ')}</div>
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
                        <FavoriteToggler id={id} defaultIsFavorite={isFavorite} />
                        <Button className="coworking_card-button" type="primary" onClick={cardOpen}>
                            Забронировать
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
