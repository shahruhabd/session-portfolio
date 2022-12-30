import React, { useState } from "react";
import "./comments.css";

const Comments = () => {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const SendComment = () => {
    if (input.length > 0) {
      setComments((comments) => [...comments, input]);
      setInput("");
    } else {
      alert("Введите данные!");
      setInput("");
    }
  };
  const CommentOutput = () =>
    comments == 0 ? (
      <div style={{ color: "#bbb" }}>Nothing yet</div>
    ) : (
      <div className="comments-container">
        {comments.map((comment) => (
          <div className="comment" key={comment}>
            <span style={{color: "#bbb"}}>Anonymous: </span>{comment}
          </div>
        ))}
      </div>
    );

  return (
    <div className="comments-wrapper">
      <h3 className="commets-title">Comments</h3>
      <CommentOutput/>
      <textarea
        className="comments-input"
        type="text"
        value={input}
        onChange={onChange}
        placeholder="Type something"
      />
      <button onClick={SendComment} className="commets-btn">
        Send
      </button>
    </div>
  );
};
export default Comments;
