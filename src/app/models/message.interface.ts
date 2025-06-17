import User from "./user.interface";

export default interface Message {
  id: number;
  created_at: string;
  receiver: User
  sender: User
  content: string;
}