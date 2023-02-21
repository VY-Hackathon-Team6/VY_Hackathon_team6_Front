import { ERol } from "./Erol"

export default interface IUser {
  id: number,
  nombre: string,
  email: string,
  rol: ERol
}
