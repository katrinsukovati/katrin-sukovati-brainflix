import "./Video.scss";

function Video({ video }) {
  return (
    <div className="video">
      <video controls poster={video.image} className="video__content"></video>
    </div>
  );
}

export default Video;
