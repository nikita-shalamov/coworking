import { useRef, useState } from "react"

import { useNavigate } from "@tanstack/react-router"
import { Button, Input } from "antd"
import axios from "axios"

import { checkAuthData } from "@/helpers/checkAuthFormData"

interface IError {
    field: "email" | "password" | "auth" | "";
    error: string;
}

export const LoginForm = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState<IError | null>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const router = useNavigate({ from: "/login" })

    const login = async () => {
        setError(null)
        setLoading(true)
        try {
            if (!formRef?.current) return

            const formData = new FormData(formRef.current)
            const data = Object.fromEntries(formData) as { email: string, first_password: string }

            const isValidData = checkAuthData(data)
            if (isValidData !== true) return setError(isValidData)

            const response = await axios.post("http://192.168.24.177:5000/auth/login", data)

            localStorage.setItem("accessToken", response.data.access)
            localStorage.setItem("refreshToken", response.data.refresh)
            router({ to: "/" })
        } catch (e) {
            // if (e.response.status === 500) {
            setError({ field: "", error: "Неверная почта или пароль" })
            // } else {
            //     setError({ field: "", error: "Другая ошибка" })
            // }
        } finally {
            setLoading(false)
        }
    }

    return (
        <form ref={formRef} className="login__inputs">
            <Input name="email" status={error?.field === "email" ? "error" : ""} className="login__input" placeholder="E-mail" type="primary" size="large" />
            <div className="login__input-password">
                <Input.Password name="first_password" className="login__input" placeholder="Пароль" type="primary" size="large" />
                <p>Забыли пароль?</p>
            </div>
            {error && (
                <p className="authForm__error">
                    {error.field === "email" && error.error}
                    {error.field === "" && error.error}
                </p>
            )}
            <Button onClick={login} loading={isLoading} className="login__button" type="primary" size="large">
                Войти
            </Button>
        </form>
    )
}
