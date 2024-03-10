import { message, Skeleton, Spin } from 'antd';
import { useEffect, useState } from 'react';

import useMessages, { parseResMessage } from '@/hooks/useMessages';
import { RawGPTMessage, RoleType, SendMessage } from '@/types/messages';
import { Icon } from '@iconify/react/dist/iconify.js';

import ChatInput from './ChatInput';
import MessageItem from './MessageItem';

interface MessageContainer {
  names: {
    user: string;
    assistant: string;
  };
  minLength?: number;
  onSendRequest: (message: SendMessage) => Promise<RawGPTMessage | void>;
}

const MessageContainer = ({
  names,
  minLength = 8,
  onSendRequest,
}: MessageContainer) => {
  const { isInit, messages, initialize, addMessage } = useMessages();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    initialize();
  }, [initialize]);

  const handleSubmit = async (input: string) => {
    if (input.length < minLength) {
      message.info(
        "Question is too short, make sure you have enter your question correctly."
      );
      return;
    }
    const newUserMessage = {
      role: RoleType.USER,
      content: input,
    };
    addMessage(newUserMessage);
    setLoading(true);
    try {
      const res = await onSendRequest(newUserMessage);
      addMessage(parseResMessage(res));
    } catch (error) {
      console.error("error", error);
    }
    setLoading(false);
  };

  return (
    <Spin spinning={!isInit}>
      <div className="relative px-4 py-6 md:px-6">
        <div className="max-w-[512px] md:max-w-[850px] mx-auto pb-28">
          {messages.map((item) => (
            <MessageItem
              key={item.id}
              names={names}
              message={item}
              onDelete={() => {}}
            />
          ))}
          {messages.length === 0 && (
            <div className="h-[280px] sm:h-[400px] md:h-[600px] flex justify-center items-center select-none">
              <div className="text-center text-gray-500 dark:text-gray-300">
                <Icon width={36} icon="mdi:emoticon-cool-outline" />
                <h2>How can I help you today?</h2>
              </div>
            </div>
          )}
          <Spin spinning={loading}>
            {loading && <Skeleton className="mt-4" avatar active />}
          </Spin>
        </div>

        <div className="fixed bottom-12 left-0 md:left-[14%] right-0 max-w-[580px] mx-auto px-4">
          <ChatInput loading={loading} onSubmit={handleSubmit} />
        </div>
      </div>
    </Spin>
  );
};

export default MessageContainer;
