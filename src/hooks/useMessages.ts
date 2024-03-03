import { create } from "zustand";

type useMessagesType = {
  isInit: boolean;
  initialize: () => void;
};

const useMessages = create<useMessagesType>((set) => ({
  isInit: false,
  initialize: () => {
    set({
      isInit: true,
    });
  },
}));

export default useMessages;
