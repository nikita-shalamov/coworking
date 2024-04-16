import { createLazyFileRoute, Link } from "@tanstack/react-router"

import { SignupForm } from "@/components/Auth/SignupForm"

export const Route = createLazyFileRoute("/_auth/signup")({
    component: () => <Signup />,
})

const Signup = () => {
    return (
        <div className="login">
            <div className="login__wrapper">
                <h1 className="login__title">Регистрация</h1>
                <SignupForm />
                <Link to={"/login"} className="login__subbutton">
                    Войти
                </Link>
                <Link to={"/"} className="login__subbutton">
                    Вернуться на главную
                </Link>
            </div>
        </div>
    )
}
