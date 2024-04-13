import { Button } from "antd"

interface coworkingCardProps {
    title: string;
    image: string;
    price: number;
    link: string;
}

export default function CoworkingCard({ title, image, price, link }: coworkingCardProps) {
    return (
        <div className="coworking_card">
            <div className="coworking_card__wrapper">
                <div className="coworking_col">
                    <div className="coworking_card-image">
                        <img src={image} alt={title} />
                    </div>
                </div>
                <div className="coworking_col">
                    <div className="coworking_card-info">
                        <div className="coworking_card-title">{title}</div>
                        <div className="coworking_card-price">Стоимость за час: {price.toFixed(2)}р.</div>
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
