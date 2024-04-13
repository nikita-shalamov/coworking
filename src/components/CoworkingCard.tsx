import { Badge, Button } from "antd"

interface coworkingCardProps {
    title: string;
    image: string;
    price: number;
    link: string;
    rating: number;
}

export default function CoworkingCard({ title, image, price, link, rating }: coworkingCardProps) {
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
    console.log(rating)
    return (
        <div className="coworking_card">
            <div className="coworking_card__wrapper">
                <Badge className="coworking_raiting" count={"Рейтинг: " + rating + " / 5"} style={{ backgroundColor: backgroundColorRating(rating) }} />
                <div className="coworking_card__col coworking_card__col-1">
                    <div className="coworking_card-image">
                        <img src={image} alt={title} />
                    </div>
                </div>
                <div className="coworking_card__col">
                    <div className="coworking_card-info">
                        <div className="coworking_card-title">{title}</div>
                        <div className="coworking_card-price">Стоимость за час: от {price.toFixed(2)}р.</div>
                        <div className="coworking_card-options">Безлимитный кофе · Удобные места · Больше окна</div>
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
