import { useCallback } from "react"

import { Link } from "@tanstack/react-router"
import { Button } from "antd"

const isLogin = false

interface profileHeaderProps {
    profileIndex: number;
}

export default function Header({ profileIndex }: profileHeaderProps) {
    const data = {
        id: 1,
        profilePhoto: "../images/profile/avatar.png",
        userName: "George",
    }

    const checkProfile = useCallback((profile: boolean) => {
        if (profile) {
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
                    <div className="header__user">
                        <Link className="header__click-elem" to="/profile"></Link>
                        <div className="header__username">{data.userName}</div>
                        <div className="header__user-photo">
                            <img src={data.profilePhoto} alt="" />
                        </div>
                    </div>
                </div>
            )
        }
    }, [])

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
                    {checkProfile(isLogin)}
                </div>
            </div>
        </div>
    )
}
