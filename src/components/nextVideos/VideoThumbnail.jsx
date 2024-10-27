// this is the little thumbnail of the video within the next videos section
import "./VideoThumbnail.scss";

function VideoThumbnail(props) {
  return (
    <div
      key={props.id}
      className="video-thumbnail"
      onClick={() => props.newVideoSelection(props.id)}
    >
      <img
        className="video-thumbnail__img"
        src={props.image}
        alt={"video thumbnail"}
      />
      <div className="video-thumbnail__section">
        <p className="video-thumbnail__title">{props.title}</p>
        <p className="video-thumbnail__author">{props.author}</p>
      </div>
    </div>
  );
}

export default VideoThumbnail;
