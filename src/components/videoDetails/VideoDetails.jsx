import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDetails.scss";

function VideoDetails({ video }) {
  return (
    <div className="video-details">
      <h1 className="video-details__header">{video.title}</h1>
      <div className="video-details__info">
        <div className="video-details__left-section">
          <p className="video-details__channel">By {video.channel}</p>
          <p className="video-details__day">
            {new Date(video.timestamp).toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="video-details__right-section">
          <div className="video-details__views-section">
            <img
              className="video-details__views-icon"
              src={viewsIcon}
              alt="views icon"
            />
            <p className="video-details__views">{video.views}</p>
          </div>
          <div className="video-details__likes-section">
            <img
              className="video-details__likes-icon"
              src={likesIcon}
              alt="likes icon"
            />
            <p className="video-details__likes">{video.likes}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="video-details__desc">{video.description}</p>
      </div>
      <p className="video-details__comments">
        {video.comments.length} Comments
      </p>
    </div>
  );
}

export default VideoDetails;
