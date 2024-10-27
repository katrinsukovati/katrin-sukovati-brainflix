import "./Video.scss";

function Video({ video }) {
  return (
    <div className="video">
      <video poster={video.image} className="video__content"></video>
    </div>
  );
}

export default Video;
