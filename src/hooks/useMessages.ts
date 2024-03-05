import { create } from "zustand";
import { MessageType } from "@/types/messages";

type useMessagesType = {
  isInit: boolean;
  messages: MessageType[];
  initialize: () => void;
};

const useMessages = create<useMessagesType>((set) => ({
  isInit: false,
  messages: [],
  initialize: () => {
    set({
      isInit: true,
    });
  },
}));

export default useMessages;
