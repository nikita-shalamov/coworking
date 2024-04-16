/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

import { Link } from "@tanstack/react-router"

import SocialMedia from "./SocialMedia"

export default function Footer() {
    const socialMedia = {
        vk: "https://vk.com",
        tg: "https://telegram.org",
    }

    const [activate, setActivate] = useState(true)
    useEffect(() => {
        const path = window.location.pathname
        const segments = path.split("/")
        if (segments[1] === "login" || segments[1] === "signup") {
            setActivate(false)
        } else {
            setActivate(true)
        }
    }, [window.location.pathname])

    if (activate) {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__menu">
                            <Link className="footer__item" to="/">
                                Главная
                            </Link>
                            <Link className="footer__item" to="/coworkings">
                                Коворкинги
                            </Link>
                            <Link className="footer__item" to="/forbusiness">
                                Для бизнеса
                            </Link>
                            <Link className="footer__item" to="/support">
                                Поддержка
                            </Link>
                        </div>
                        <div className="footer__social_media">
                            <SocialMedia links={socialMedia} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
