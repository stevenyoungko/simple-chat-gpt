import { create } from 'zustand';

import { random } from '@/lib/random';
import { MessageType, RoleType, Room } from '@/types/messages';

type AddMessagePayload = {
  id?: string;
  sentTime?: number;
  role: RoleType;
  content: string;
};

type useMessagesType = {
  isInit: boolean;
  messages: MessageType[];
  currentRoom: Room;
  roomHistory: Room[];
  initialize: () => void;
  addMessage: (payload: AddMessagePayload) => void;
  setChatroom: (room: Room) => void;
};

export const localRoomHistoryKey = 'simple-gpt-history';

export const newRoom = () => ({
  label: 'New Chat',
  key: random(),
});

const keyPrefix = (key: string) => `simple-gpt_room-${key}`;

const getRoomHistory = () => {
  return JSON.parse(localStorage.getItem(localRoomHistoryKey) ?? '[]');
};
const getRoomMessages = (key: string) => {
  return JSON.parse(localStorage.getItem(keyPrefix(key)) ?? '[]');
};

const setRoomHistory = (history: Room[]) => {
  localStorage.setItem(localRoomHistoryKey, JSON.stringify(history));
};

const setRoomMessages = (key: string, messages: MessageType[]) => {
  localStorage.setItem(keyPrefix(key), JSON.stringify(messages));
};

const useMessages = create<useMessagesType>((set, get) => ({
  isInit: false,
  messages: [],
  currentRoom: {
    label: '',
    key: '',
  },
  roomHistory: [],
  initialize: () => {
    const { setChatroom } = get();
    const roomHistory = getRoomHistory();
    set({
      isInit: true,
      roomHistory: roomHistory,
    });
    setChatroom(roomHistory[0] ?? newRoom());
  },
  addMessage: (payload: AddMessagePayload) => {
    const { messages, currentRoom, roomHistory } = get();
    const newMessages = [
      ...messages,
      {
        id: random(),
        sentTime: Date.now(),
        ...payload,
      },
    ];
    set({ messages: newMessages });
    try {
      const roomKey = currentRoom.key;
      setRoomMessages(roomKey, newMessages);

      if (roomHistory.findIndex((room) => room.key === roomKey) < 0) {
        const newRoomHistory = [...roomHistory];
        newRoomHistory.push(currentRoom);
        set({
          roomHistory: newRoomHistory,
        });
        setRoomHistory(newRoomHistory);
      }
    } catch (err) {
      console.warn(err);
    }
  },
  setChatroom: (room: Room) => {
    const { currentRoom } = get();
    if (currentRoom.key === room.key) return;
    const messages = getRoomMessages(room.key);
    set({
      currentRoom: room,
      messages: messages,
    });
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
