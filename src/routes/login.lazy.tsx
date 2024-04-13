import { Button, Input } from "antd"

export function Login() {
    return (
        <div className="login">
            <div className="login__wrapper">
                <h1 className="login__title">Войти</h1>
                <div className="login__inputs">
                    <Input className="login__input" placeholder="E-mail" type="primary" size="large" />
                    <div className="login__input-password">
                        <Input.Password className="login__input" placeholder="Пароль" type="primary" size="large" />
                        <p>Забыли пароль?</p>
                    </div>
                    <Button className="login__button" type="primary" size="large">
                        Войти
                    </Button>
                </div>
                <p className="login__subbutton">Зарегистрироваться</p>
            </div>
        </div>
    )
}
