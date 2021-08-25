import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

function CommentBox({ saveComment, fetchComments }) {
  const [comment, setComment] = useState("");
  //const valueRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    saveComment(comment);

    setComment("");
    //valueRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={fetchComments}>
        Fetch comments
      </button>
    </div>
  );
}

export default connect(null, actions)(CommentBox);
