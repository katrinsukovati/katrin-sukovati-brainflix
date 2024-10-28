// this is the entire section for videos (like the container for next videos)
import "./NextVideos.scss";

function NextVideos({ allVideos, newVideoSelection }) {
  // This updates the video thumbnails when selecting new video
  const videoThumbnails = allVideos.map((vid) => {
    return (
      <div
        key={vid.id}
        className="video-thumbnail"
        onClick={() => newVideoSelection(vid.id)}
      >
        <img
          className="video-thumbnail__img"
          src={vid.image}
          alt={"video thumbnail"}
        />
        <div className="video-thumbnail__section">
          <p className="video-thumbnail__title">{vid.title}</p>
          <p className="video-thumbnail__author">{vid.channel}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="next-video">
      <p className="next-video__header">Next Video</p>
      {videoThumbnails}
    </div>
  );
}

export default NextVideos;
