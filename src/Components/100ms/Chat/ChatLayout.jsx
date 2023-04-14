import React from 'react';

const ChatLayout = ({ children }) => {
  return (
    <div className='flex flex-col w-80 bg-slate-700 rounded-lg chat-shadow relative'>
      <div className='font-bold text-xl my-1 py-1 border-b border-gray-100 text-center'>
        CHAT
      </div>
      {children}
    </div>
  );
};

export default ChatLayout;