"use client";
import { FloatButton, message } from 'antd';
import { useRef } from 'react';

import useCommon from '@/hooks/useCommon';
import useMessages from '@/hooks/useMessages';
import { SendMessage } from '@/types/messages';

import MessageContainer from './MessageContainer';
import { sendUserCompletions } from './MessageContainer/api';

const MessageBoard = () => {
  const ref = useRef(null);
  const { settings, apiKey } = useCommon();
  const { messages } = useMessages();

  const handleMessages = (newMessage: SendMessage) => {
    let sendMessages = messages.map(({ role, content }) => ({
      role,
      content,
    }));
    sendMessages.push(newMessage);
    return sendMessages;
  };

  const handleSendRequest = async (newMessage: SendMessage) => {
    if (!apiKey) {
      message.error(
        "Please enter your API key in settings before sending question."
      );
      return;
    }

    try {
      const res = await sendUserCompletions(
        {
          model: "gpt-3.5-turbo",
          messages: handleMessages(newMessage),
        },
        apiKey
      );
      if (res?.id) return res;
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div ref={ref} className="h-full overflow-auto">
      <FloatButton.BackTop />
      <MessageContainer
        names={{
          user: settings.username,
          assistant: settings.gptname,
        }}
        onSendRequest={handleSendRequest}
      />
    </div>
  );
};

export default MessageBoard;
