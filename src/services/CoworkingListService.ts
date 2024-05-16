import axios from "axios"

export class CoworkingListService {
    static async getCoworkingList() {
        const res = await axios.get(`http://localhost:8000/coworking`)
        return res.data
    }
}
