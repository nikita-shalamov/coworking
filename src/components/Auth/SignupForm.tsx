import { useRef, useState } from "react"

import { AuthService } from "@/services/AuthService"
import { useNavigate } from "@tanstack/react-router"
import { Button, Input } from "antd"

import { checkAuthData } from "@/helpers/checkAuthFormData"

interface IError {
    field: "email" | "password" | "";
    error: string;
}

export const SignupForm = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState<IError | null>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const handleChangePassword = () => {}
    const router = useNavigate({ from: "/login" })

    const registration = async () => {
        setError(null)
        setLoading(true)

        try {
            if (!formRef?.current) return

            const formData = new FormData(formRef.current)
            const data = Object.fromEntries(formData) as { email: string, first_password: string, second_password: string }

            const isValidData = checkAuthData(data)
            if (isValidData !== true) return setError(isValidData)

            await AuthService.registration(data.email, data.first_password)
            router({ to: "/" })
        } catch (e) {
            console.log(e)

            // @ts-expect-error: Unreachable code error
            setError({ field: "", error: e.response.data.message })
        } finally {
            setLoading(false)
        }
    }

    return (
        <form ref={formRef} className="login__inputs">
            <Input name="email" onBlur={() => handleChangePassword} status={error?.field === "email" ? "error" : ""} className="login__input" placeholder="E-mail" type="primary" size="large" />
            <Input.Password name="first_password" status={error?.field === "password" ? "error" : ""} className="login__input" placeholder="Пароль" type="primary" size="large" />
            <Input.Password name="second_password" status={error?.field === "password" ? "error" : ""} className="login__input" placeholder="Повторите пароль" type="primary" size="large" />
            {error && <p className="authForm__error">{error.error}</p>}
            <Button onClick={registration} loading={isLoading} className="login__button" type="primary" size="large">
                Зарегистрироваться
            </Button>
        </form>
    )
}
