import { ERol } from "./Erol"

export default interface IUser {
  map(arg0: () => void): unknown
  id: number,
  name: string,
  email: string,
  role: ERol
}
