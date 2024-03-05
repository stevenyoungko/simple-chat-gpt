export enum RoleType {
  GPT = "assistant",
  USER = "user",
  SYSTEM = "system",
}

export type MessageType = {
  role: RoleType;
  content: string;
  id: string;
  sentTime: number;
};
