import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { ChatBubble } from "@material-ui/icons";
import ChatBox from "src/pages/chatBot/chatBox";

const ChatBot: React.FC<{}> = () => {
  const [toggleChat, setToggleChat] = useState(false);

  return (
    <Box className="absolute bottom-0 right-0 m-16 flex justify-end flex-col items-end">
      {toggleChat && <ChatBox />}
      <ChatBubble
        onClick={() => setToggleChat((prev) => !prev)}
        fontSize="large"
        className="text-primary cursor-pointer"
      />
    </Box>
  );
};
export default ChatBot;
