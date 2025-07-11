import Equipment from "./equipment.interface"
import Image from "./image.interface"
import Reservation from "./reservation.interface"
import Service from "./service.interface"
import User from "./user.interface"

export default interface Announcement {
  id: number
  title: string
  description: string
  fullAddress: string
  address: string
  city: string
  zipcode: string
  lattitude: string
  longitude: string
  maxClient: number
  dailyPrice: number
  imageCover: string
  owner: User
  images: Image[]
  services: Service[]
  equipment: Equipment[]
  reservations: Reservation[]
}

