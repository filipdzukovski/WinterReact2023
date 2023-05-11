import React, {useState, useEffect } from "react";
import { CommentsComponent } from "./CommentsComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments,deleteComment,editComment } from "./duck/operations";

export default function CommentsContainer() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsReducer.comments);
  const message = useSelector((state) => state.commentsReducer.message);

  const [activeEdit,setActiveEdit] = useState(false);
  const [comment,setComment] = useState({});

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  function deleteComments(id){
    dispatch(deleteComment(id))
  }

  function editCommentFunction(comment){
    setComment(comment);
    setActiveEdit(true);
  }

  function saveComment(){
    dispatch(editComment(comment));
    setActiveEdit(false);
    setComment({})
  }

  return (
    <div id="comments-container">

        {activeEdit && 
        <>
            <input type="text" value={comment.name} onChange={e=>setComment({...comment,name:e.target.value})} />
            <br/>
            <br/>
            <input type="text" value={comment.email} onChange={e=>setComment({...comment,email:e.target.value})} />
            <br/>
            <br/>
            <input type="text" value={comment.body} onChange={e=>setComment({...comment,body:e.target.value})} />
            <br/>
            <br/>
            <button onClick={saveComment}>Save</button>
            <button onClick={()=>{setActiveEdit(false); setComment({})}}>&times;</button>
        </>
        }

      <CommentsComponent 
      comments={comments} 
      message={message} 
      deleteCommentFunction={deleteComments}
      editCommentFunction = {editCommentFunction}
      />
    </div>
  );
}
