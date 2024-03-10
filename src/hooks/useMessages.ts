import { create } from 'zustand';

import { random } from '@/lib/random';
import { MessageType, RoleType } from '@/types/messages';

type AddMessagePayload = {
  id?: string;
  sentTime?: number;
  role: RoleType;
  content: string;
};

type useMessagesType = {
  isInit: boolean;
  messages: MessageType[];
  initialize: () => void;
  addMessage: (payload: AddMessagePayload) => void;
};

const useMessages = create<useMessagesType>((set, get) => ({
  isInit: false,
  messages: [],
  initialize: () => {
    set({
      isInit: true,
    });
  },
  addMessage: (payload: AddMessagePayload) => {
    const { messages } = get();
    const newMessages = [
      ...messages,
      {
        id: random(),
        sentTime: Date.now(),
        ...payload,
      },
    ];
    set({ messages: newMessages });
  },
}));

export default useMessages;

export const parseResMessage = (rawMessage: any): MessageType => {
  return {
    id: rawMessage.id,
    role: RoleType.GPT,
    content: rawMessage.choices[0].message.content,
    sentTime: rawMessage.created,
  };
};
