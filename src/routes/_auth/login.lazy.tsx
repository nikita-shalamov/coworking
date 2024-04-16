import { createLazyFileRoute, Link } from "@tanstack/react-router"

import { LoginForm } from "@/components/Auth/LoginForm"

export const Route = createLazyFileRoute("/_auth/login")({
    component: () => <Login />,
})

const Login = () => {
    return (
        <div className="login">
            <div className="login__wrapper">
                <h1 className="login__title">Войти</h1>
                <LoginForm />
                <Link to={"/signup"} className="login__subbutton">
                    Зарегистрироваться
                </Link>
                <Link to={"/"} className="login__subbutton">
                    Вернуться на главную
                </Link>
            </div>
        </div>
    )
}
