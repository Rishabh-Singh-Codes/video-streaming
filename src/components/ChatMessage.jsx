const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-start my-2 hover:bg-gray-200 px-4 break-all">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
        className="h-6"
      />
      <h2 className="text-sm ml-2"><span className="font-bold text-gray-700">{name}</span> {message}</h2>
    </div>
  );
};

export default ChatMessage;
