import ChatRoom from './containers/ChatRoom';
import LoginDialog from './containers/LoginDialog';
import ChatInput from './containers/ChatInput';

import ChatAppLayout from './ui-components/ChatAppLayout';

function ChatApp() {
  return (
    <ChatAppLayout>
      <LoginDialog/>
      <ChatRoom/>
      <ChatInput/>
    </ChatAppLayout>
  );
}

export default ChatApp;
