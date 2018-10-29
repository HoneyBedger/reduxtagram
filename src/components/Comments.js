import React from 'react';

const Comments = (props) => {
  let commentForm, author, comment;

  const renderComment = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment"
            onClick={() => props.removeComment(props.postId, i)}>
            &times;
          </button>
        </p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addComment(props.postId, author.value, comment.value);
    commentForm.reset();
  }

  return (
    <div className="comment">
      {props.postComments.map((comment, i) => renderComment(comment, i))}
      <form ref={form => {commentForm = form}} className="comment-form"
        onSubmit={handleSubmit}>
        <input type="text" ref={(input) => {author = input}} placeholder="author" />
        <input type="text" ref={(input) => {comment = input}} placeholder="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
}

export default Comments;
