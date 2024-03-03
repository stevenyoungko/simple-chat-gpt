import { create } from "zustand";

type useMessagesType = {
  isInit: boolean;
  initialize: () => void;
};

const useMessages = create<useMessagesType>((set) => ({
  isInit: true,
  initialize: () => {
    set({
      isInit: true,
    });
  },
}));

export default useMessages;
