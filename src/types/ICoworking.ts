import { ICity } from "./ICity"
import { IConvenience } from "./IConvenience"
import { ICoworkingImage } from "./ICoworkingImage"
import { IMetro } from "./IMetro"
import { IPrice } from "./IPrice"

export interface ICoworking {
  id: number
  title: string
  description: string
  address: string
  countRate: number
  rate: number
  cityId: number
  city: ICity
  conveniences: IConvenience[]
  images: ICoworkingImage[]
  latitude: number
  link: string
  longitude: number
  metro?: IMetro
  metroId?: number
  price: IPrice[]
  updatedAt: Date
  createdAt: Date
}