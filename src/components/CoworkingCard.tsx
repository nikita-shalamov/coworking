interface coworkingCardProps {
    title: string;
    image: string;
}

export default function CoworkingCard({ title, image }: coworkingCardProps) {
    return (
        <>
            <div className="coworking_card">
                <div className="coworking_card__wrapper">
                    <div className="coworking_card-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="coworking_card-info">
                        <div className="coworking_card-title">{title}</div>
                        <div className="coworking_card-price">Стоимость за час: 2000р.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
