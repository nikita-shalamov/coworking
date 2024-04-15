import { Link } from "@tanstack/react-router"
import { Button } from "antd"

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__menu">
                        <Link to="/" className="header__item">
                            Главная
                        </Link>
                        <a href="#" className="header__item">
                            Поддержка
                        </a>
                        <a href="#" className="header__item">
                            Еще страница
                        </a>
                    </div>
                    <div className="header__auth">
                        <Button className="header__reg" type="primary" size="large">
                            Регистрация
                        </Button>
                        <Button className="header__signin" size="large">
                            Вход
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
