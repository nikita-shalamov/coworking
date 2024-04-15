import { createLazyFileRoute } from "@tanstack/react-router"
import { Button, Input } from "antd"

export const Route = createLazyFileRoute("/signup")({
    component: () => (
        <div className="login">
            <div className="login__wrapper">
                <h1 className="login__title">Регистрация</h1>
                <div className="login__inputs">
                    <Input className="login__input" placeholder="E-mail" type="primary" size="large" />
                    <Input.Password className="login__input" placeholder="Пароль" type="primary" size="large" />
                    <Input.Password className="login__input" placeholder="Повторите пароль" type="primary" size="large" />
                    <Button className="login__button" type="primary" size="large">
                        Зарегистрироваться
                    </Button>
                </div>
                <p className="login__subbutton">Войти</p>
            </div>
        </div>
    ),
})
