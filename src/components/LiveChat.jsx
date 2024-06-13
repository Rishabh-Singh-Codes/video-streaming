import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, clearMessages } from "../utils/chatSlice";
import { createRandomString, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveChatMessage, setLiveChatMessage] = useState("");

  useEffect(() => {
    const polling = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: createRandomString((Math.random() * 100).toFixed(0)) + " 🚀",
        })
      );
    }, 1000);

    return () => {
      dispatch(clearMessages());
      clearInterval(polling);
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-[600px] border rounded-2xl bg-gray-100">
      <div className="w-full bg-white py-2 text-center rounded-t-2xl">
        <h2 className="font-bold text-lg">Live Chat</h2>
      </div>
      <div className="py-2 flex flex-1 overflow-y-scroll flex-col-reverse">
        {chatMessages.map((msg, idx) => (
          <ChatMessage key={idx} name={msg.name} message={msg.message} />
        ))}
      </div>
      <form
        className="w-full bg-white py-2 text-center rounded-b-2xl px-4 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Guest", message: liveChatMessage }));
          setLiveChatMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Enter your message"
          className="focus:outline-none w-full"
          value={liveChatMessage}
          onChange={(e) => setLiveChatMessage(e.target.value)}
        />
        <button type="submit">
          <img
            src="https://static.thenounproject.com/png/3553333-200.png"
            alt="send message"
            className="h-6 hover:cursor-pointer"
          />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
