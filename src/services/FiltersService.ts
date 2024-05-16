import axios from "axios"

export default class FilterService {
    static async getCities() {
        const cities = await axios.get('http://localhost:8000/city')
        return cities.data
    }
};

