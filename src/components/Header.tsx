/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "@tanstack/react-router"
import { Button } from "antd"
import { useEffect, useState } from "react"

export default function Header() {
    const [activate, setActivate] = useState(true)
    useEffect(() => {
        const path = window.location.pathname
        const segments = path.split("/")
        console.log(path)
        if (segments[1] === "login" || segments[1] === "signup") {
            setActivate(false)
        } else {
            setActivate(true)
        }
    }, [window.location.pathname])

    // Проверяем первый сегмент пути для определения маршрута
    if (activate) {
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
                    </div>
                </div>
            </div>
        )
    }
}
