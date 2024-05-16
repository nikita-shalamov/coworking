import { IPrice } from "@/types/IPrice"

export const getMinPrice = (prices: IPrice[]): number | null => {
    if (prices.length === 0) {
        return null
    }

    const minPrice = prices.reduce((min, price) => {
        return price.rub < min ? price.rub : min
    }, prices[0].rub)

    return minPrice
}
