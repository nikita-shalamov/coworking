export const checkPassword = (password: string): string | true => {
    if (password.length < 8) {
        return "Пароль должен содержать как минимум 8 символов"
    }

    const digitRegex = /\d/
    if (!digitRegex.test(password)) {
        return "Пароль должен содержать как минимум одну цифру"
    }

    const latinRegex = /[a-zA-Z]/
    if (!latinRegex.test(password)) {
        return "Пароль должен содержать хотя бы одну латинскую букву"
    }

    return true
}
