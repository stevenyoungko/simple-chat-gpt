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

export type SendMessage = {
  role: RoleType;
  content: string;
};

type GPTChoice = {
  message: {
    role: string;
    content: string;
  };
  index: number;
  finish_reason: "stop" | "length";
  [key: string]: any;
} 

export type RawGPTMessage = {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: GPTChoice[];
}