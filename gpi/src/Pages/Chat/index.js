import React, { useContext } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { UserContext } from '../../Utils/UserContext';
import './styles.css';

const Chat = () => {
  const { user } = useContext(UserContext);
  return(
      <ChatEngine 
        id="Chat-page"
        height="90vh"
        width="80vw"
        projectID="c44f788e-12ce-4067-b8b0-4becd63697ab"
        userName={user.email}
        userSecret={user.password}
      />
  );
}

export default Chat;