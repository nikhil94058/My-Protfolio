import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch comments from the API
  useEffect(() => {
    async function fetchComments() {
      const response = await axios.get("api/comments");
      setComments(response.data.data);
    }
    fetchComments();
  }, []);

  // Handle adding a new comment
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        user: "Anonymous",
        date: new Date().toLocaleString(),
        content: newComment,
        likes: 0,
      };

      const response = await axios.post("/api/comments", newCommentObj);
      setComments([response.data.data, ...comments]);
      setNewComment("");
    }
  };

  // Handle like
  const handleLike = async (id, likes) => {
    const response = await axios.put("/api/comments", { id, likes: likes + 1 });
    setComments(
      comments.map((comment) =>
        comment._id === id ? { ...comment, likes: response.data.data.likes } : comment
      )
    );
  };

  return (
    <StyledWrapper>
      <div className="card">
        <span className="title">Comments</span>
        <div className="comments">
          {comments.map((comment) => (
            <div key={comment._id} className="comment-container">
              <div className="user">
                <div className="user-pic"></div>
                <div className="user-info">
                  <span>{comment.user}</span>
                  <p>{comment.date}</p>
                </div>
              </div>
              <p className="comment-content">{comment.content}</p>
              <div className="comment-react">
                <button onClick={() => handleLike(comment._id, comment.likes)}>
                  ❤️ {comment.likes}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-box">
          <form onSubmit={handleAddComment} className="box-container">
            <textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit" className="send">
              Send
            </button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .card {
    width: 450px;
    height: fit-content;
    background-color: white;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 17px 17px 27px 27px;
  }

  .title {
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid #f1f1f1;
    font-weight: 700;
    font-size: 13px;
    color: #47484b;
  }

  .title::after {
    content: '';
    width: 8ch;
    height: 1px;
    position: absolute;
    bottom: -1px;
    background-color: #47484b;
  }

  .comments {
    display: grid;
    grid-template-columns: 35px 1fr;
    gap: 20px;
    padding: 20px;
  }

  .comment-react {
    width: 35px;
    height: fit-content;
    display: grid;
    grid-template-columns: auto;
    margin: 0;
    background-color: #f1f1f1;
    border-radius: 5px;
  }

  .comment-react button {
    width: 35px;
    height: 35px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
    outline: none;
  }

  .comment-react button:after {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    left: -2.5px;
    top: -2.5px;
    background-color: #f5356e;
    border-radius: 50%;
    z-index: 0;
    transform: scale(0);
  }

  .comment-react button svg {
    position: relative;
    z-index: 9;
  }

  .comment-react button:hover:after {
    animation: ripple 0.6s ease-in-out forwards;
  }

  .comment-react button:hover svg {
    fill: #f5356e;
  }

  .comment-react button:hover svg path {
    stroke: #f5356e;
    fill: #f5356e;
  }

  .comment-react hr {
    width: 80%;
    height: 1px;
    background-color: #dfe1e6;
    margin: auto;
    border: 0;
  }

  .comment-react span {
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 13px;
    font-weight: 600;
    color: #707277;
  }

  .comment-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0;
    margin: 0;
  }

  .comment-container .user {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 10px;
  }

  .comment-container .user .user-pic {
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
    border-radius: 50%;
  }

  .comment-container .user .user-pic:after {
    content: '';
    width: 9px;
    height: 9px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-radius: 50%;
    background-color: #0fc45a;
    border: 2px solid #ffffff;
  }

  .comment-container .user .user-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3px;
  }

  .comment-container .user .user-info span {
    font-weight: 700;
    font-size: 12px;
    color: #47484b;
  }

  .comment-container .user .user-info p {
    font-weight: 600;
    font-size: 10px;
    color: #acaeb4;
  }

  .comment-container .comment-content {
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    color: #5f6064;
  }

  .text-box {
    width: 100%;
    height: fit-content;
    background-color: #f1f1f1;
    padding: 8px;
  }

  .text-box .box-container {
    background-color: #ffffff;
    border-radius: 8px 8px 21px 21px;
    padding: 8px;
  }

  .text-box textarea {
    width: 100%;
    height: 40px;
    resize: none;
    border: 0;
    border-radius: 6px;
    padding: 12px 12px 10px 12px;
    font-size: 13px;
    outline: none;
    caret-color: #0a84ff;
  }

  .text-box .formatting {
    display: grid;
    grid-template-columns: auto auto auto auto auto 1fr;
  }

  .text-box .formatting button {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 50%;
    border: 0;
    outline: none;
  }

  .text-box .formatting button:hover {
    background-color: #f1f1f1;
  }

  .text-box .formatting .send {
    width: 30px;
    height: 30px;
    background-color: #0a84ff;
    margin: 0 0 0 auto;
  }

  .text-box .formatting .send:hover {
    background-color: #026eda;
  }

  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0.6;
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }`;

export default CommentsSection;
