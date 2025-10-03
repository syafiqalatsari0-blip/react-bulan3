import React from "react";
import UserInfo from "./UserInfo";
import CommentText from "./CommenText";

function Comment({ user, text, date }) {
  return (
    <div className="comment">
      <UserInfo user={user} />
      <CommentText text={text} />
      <small className="comment-date">{date}</small>
    </div>
  );
}

export default Comment;
