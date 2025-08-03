import React from "react";
import { useState, useEffect } from "react";
import CommentList from "./CommentsList";
import AddComment from "./AddComment";

const Api_Key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODU5Yjg1MjRlZjFiYzAwMTVkZjVhZDIiLCJpYXQiOjE3NTI4NTg0MDMsImV4cCI6MTc1NDA2ODAwM30.RMtDjGIUuLU4cQgpGrCJit52MvS7pmJgBMGJMrpGOlw";

function CommentArea({ asin }) {
  const Api_Url = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`;
  const [comment, setComment] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`${Api_Url}`, {
        headers: {
          Authorization: `Bearer ${Api_Key}`,
        },
      });
      const data = await response.json();
      setComment(data);
    } catch (error) {
      console.error("Errore nel recupero dei commenti: ", error);
    }
  };
  useEffect(() => {
    if (asin) fetchComments();
    else setComment([]);
  }, [asin]);
  console.log(comment);

  return (
    <div className="pe-5"> 
      <AddComment asin={asin} onNewComment={fetchComments} />

      <CommentList comments={comment} onEditOrDeleteComment={fetchComments} />
    </div>
  );
}

export default CommentArea;
