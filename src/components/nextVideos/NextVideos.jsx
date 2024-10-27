// this is the entire section for videos (like the container for next videos)
import VideoThumbnail from "./VideoThumbnail";

import "./NextVideos.scss";

function NextVideos({ allVideos, newVideoSelection }) {
  const videoThumbnails = allVideos.map((vid) => {
    return (
      <VideoThumbnail
        key={vid.id}
        id={vid.id}
        author={vid.channel}
        title={vid.title}
        image={vid.image}
        newVideoSelection={newVideoSelection}
      />
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
