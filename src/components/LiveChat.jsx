import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  console.log("chatMessage", chatMessages);

  useEffect(() => {
    const polling = setInterval(() => {
      console.log("polling");

      dispatch(
        addMessage({
          name: "Rishabh Singh",
          message: "Waah ji waah 🚀",
        })
      );
    }, 2000);

    return () => {
      clearInterval(polling);
    };
  }, []);

  return (
    <div className="h-[600px] border rounded-2xl bg-gray-100 py-2 flex flex-col overflow-y-scroll">
      {chatMessages.map((msg, idx) => (
        <ChatMessage key={idx} name={msg.name} message={`${idx}. ${msg.message}`} />
      ))}
    </div>
  );
};

export default LiveChat;
