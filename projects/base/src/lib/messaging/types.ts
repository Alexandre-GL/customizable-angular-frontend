export type Message = {
  msg: string;
  author?: string;
}

export type MessageList = Message[]

export type Config = {
  input: InputConfig 
}

export type InputConfig = {
  fields: { id: string, label: string }[]
}