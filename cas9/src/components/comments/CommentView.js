import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { properties } from "../../config/properties";

export function CommentView() {
  const { commentId } = useParams();
  const [comment, setComment] = useState({});

  useEffect(() => {
    fetch(`${properties.api.root}/comments/${commentId}`)
      .then((res) => res.json())
      .then((data) => setComment(data))
      .catch((err) => alert(err));
  }, [commentId]);

  return (
    <div id="comment-veiw">
      <h2>Comment View</h2>
      <p>Name: {comment.name}</p>
      <p>Email:{comment.email}</p>
      <p>Body:{comment.body}</p>
    </div>
  );
}
