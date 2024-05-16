import { ICoworking } from "@/types/ICoworking"
import axios from "axios"

export class CoworkingService {
    static async getCoworkingItem(id: number): Promise<ICoworking> {
        const res = await axios.get(`http://localhost:8000/coworking/${id}`)
        return res.data
    }
}
