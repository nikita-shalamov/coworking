import $api from "."

export class AuthService {
    static async login(email: string, password: string) {
        const response = await $api.post("/auth/login", { email, password })
        localStorage.setItem("access", response.data.access)
    }

    static async registration(email: string, password: string) {
        const response = await $api.post("/auth/registration", { email, password })
        localStorage.setItem("access", response.data.access)
    }

    // static async refresh() {
    //     const response = await $api.get("/auth/refresh")
    //     localStorage.setItem("access", response.data.access)
    // }

    static async logout() {
        localStorage.removeItem("access")
        await $api.get("/auth/logout")
    }
}
