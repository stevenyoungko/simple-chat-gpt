import { SendMessage } from '@/types/messages';

interface SendOptions {
  messages: SendMessage[];
  temperature?: number;
  token?: string;
  maxTokens?: number;
  model?: string;
  frequencyPenalty?: number;
  presencePenalty?: number;
}

export async function sendUserCompletions(
  options: SendOptions,
  apiKey?: string
) {
  let res: any;
  try {
    if (apiKey) {
      res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(options),
      });
    } else {
    }
    const data = await res.json();
    return data;
  } catch {
    return res;
  }
}
