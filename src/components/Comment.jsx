const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
        className="h-8 mt-2"
      />
      <div className="flex flex-col pl-2">
        <h4 className="font-semibold">{name}</h4>
        <h5>{comment}</h5>
        {replies?.length > 0 && (
          <>
            {replies.map((reply, idx) => (
              <Comment data={reply} key={idx} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
