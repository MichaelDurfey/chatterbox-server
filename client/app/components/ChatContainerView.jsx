import React from 'react';
import PropTypes from 'prop-types';
import ChatMessageView from './ChatMessageView';

function ChatContainerView({ messages, room }) {
  return (
    <div className="ChatContainerView">
      {
        messages.filter(message => 'roomname' in message && message.roomname === room && message.text.length > 1 && message.username.length > 1)
          .map(message => <ChatMessageView message={message} />)
      }
    </div>
  );
}

ChatContainerView.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  room: PropTypes.string.isRequired,
};

export default ChatContainerView;
