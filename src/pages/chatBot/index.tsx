import { Box } from "@material-ui/core";
import React from "react";
import { ChatBubble } from "@material-ui/icons";
import ChatBox from "src/pages/chatBot/chatBox";

const ChatBot: React.FC<{}> = () => {
  return (
    <Box className="absolute bottom-0 right-0 m-16 flex justify-end flex-col items-end">
      <ChatBox />
      <ChatBubble fontSize="large" className="text-primary cursor-pointer" />
    </Box>
  );
};
export default ChatBot;
