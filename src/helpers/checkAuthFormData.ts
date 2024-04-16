import { checkEmail } from "./checkEmail";
import { checkPassword } from "./checkPassword";

interface ICheckDataRes {
  field: "email" | "password";
    error: string;
}

interface ICheckData {
  email: string
  first_password: string
  second_password?: string
}

export const checkAuthData = (body: ICheckData): ICheckDataRes | true => {
  const { email, first_password, second_password } = body

  if (!checkEmail(email)) return { field: "email", error: "Некорректная почта" }

  if (second_password) {
    if (first_password !== second_password) return { field: "password", error: "Пароли должны совпадать" }
  }

  const isValidPassword = checkPassword(first_password)
  if (isValidPassword !== true) return { field: "password", error: isValidPassword }

  return true
}