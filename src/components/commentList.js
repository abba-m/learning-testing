import React from "react";
import { connect } from "react-redux";

function CommentList({ comments }) {
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
