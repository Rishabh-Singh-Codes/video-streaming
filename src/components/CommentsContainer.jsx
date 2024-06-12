import { comments } from "../utils/data";
import Comment from "./Comment";

const CommentsContainer = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold border-b-2">Comments</h2>
      {comments.map((comment, idx) => (
        <Comment data={comment} key={idx} />
      ))}
    </div>
  );
};

export default CommentsContainer;
