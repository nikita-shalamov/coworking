import { Link } from "@tanstack/react-router"
import { Button } from "antd"

export default function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__col">
                        <div className="hero__title">
                            <span>Забронировать коворкинг</span> стало легче!
                        </div>
                        <Button href="/coworkings" className="hero__button" type="primary">
                            Выбирать!
                        </Button>
                        <div className="hero__arrow_message">
                            <img src="../images/hero/arrow.svg" alt="" />
                            <div className="hero__arrow_message_text">Ваше идеальное рабочее место тут!</div>
                        </div>
                    </div>
                    <div className="hero__col">
                        <div className="hero__image">
                            <img src="../images/hero/hero_promo.png" alt="" />
                            <div className="hero__advs">
                                <div className="hero__adv">Большой выбор</div>
                                <div className="hero__adv">Мгновенная бронь</div>
                                <div className="hero__adv">Коворкинги со всей России</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
