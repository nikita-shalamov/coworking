import { Link } from "@tanstack/react-router"
import { Button } from "antd"

export default function Header() {
    const profile = false

    function checkProfile(profile: boolean) {
        if (!profile) {
            return (
                <div className="header__auth">
                    <Link to="/signup">
                        <Button className="header__reg" type="primary" size="large">
                            Регистрация
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button className="header__signin" size="large">
                            Вход
                        </Button>
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="header__auth">
                    {/* <Link to="/profile">
                        <div className="header__profile">Profile</div>
                    </Link> */}
                </div>
            )
        }
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__menu">
                        <Link to="/" className="header__item">
                            Главная
                        </Link>
                        <Link to="/coworkings" className="header__item">
                            Коворкинги
                        </Link>
                        <Link to="/support" className="header__item">
                            Поддержка
                        </Link>
                        <Link to="/forbusiness" className="header__item">
                            Для бизнеса
                        </Link>
                    </div>
                    {checkProfile(profile)}
                </div>
            </div>
        </div>
    )
}
