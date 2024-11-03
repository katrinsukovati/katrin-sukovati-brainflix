import "./Comments.scss";

function Comments({ video }) {
  let allComments = video.comments.map((comment) => {
    return (
      <div key={comment.id} className="comment-container">
        <div className="comment__pic"></div>
        <div className="comment__info">
          <div className="comment__person-information">
            <p className="comment__person-name">{comment.name}</p>
            <p className="comment__day">
              {new Date(comment.timestamp).toLocaleDateString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </p>
          </div>
          <p className="comment__desc">{comment.comment}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="comments">
      <div className="comment-form__container">
        <div className="comment-form__avatar"></div>
        <form className="comment-form">
          <div className="comment-form__input-container">
            <label className="comment-form__label" htmlFor="comment">
              Join the conversation
            </label>
            <input
              className="comment-form__input"
              name="comment"
              placeholder="Add a new comment"
            ></input>
          </div>
          <button className="comment-form__btn">Comment</button>
        </form>
      </div>
      {/* All of the comments */}
      {allComments}
    </div>
  );
}

export default Comments;
