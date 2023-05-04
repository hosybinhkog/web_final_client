import React from 'react';

const ChatFeed = ({ children }) => {
  return (
    <div
      id='chat-feed'
      className='w-full max-h-[610px] px-2 flex flex-col overflow-y-scroll scrollbar-thumb-white scrollbar-track-white'
      style={{ height: 'calc(80vh - 100px)' }}
    >
      {children}
    </div>
  );
};

export default ChatFeed;