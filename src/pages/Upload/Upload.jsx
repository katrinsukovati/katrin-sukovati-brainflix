import "./Upload.scss";
import logo from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Upload has been successful.");
    navigate("/");
  };

  return (
    <div className="upload-video__container">
      <h1 className="upload-video__header">Upload Video</h1>
      <form className="upload-video" onSubmit={handleSubmit}>
        <div className="upload-video__img-container">
          <label className="upload-video__img-label">VIDEO THUMBNAIL</label>
          <img
            className="upload-video__img"
            src={logo}
            alt="your uploaded video thumbnail"
            name="thumbnail"
          />
        </div>
        <div className="upload-video__details">
          <div className="upload-video__title-container">
            <label className="upload-video__title-label">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload-video__title-input"
              name="title"
              placeholder="Add a title to your video"
            ></input>
          </div>
          <div className="upload-video__description-container">
            <label className="upload-video__description-label">
              ADD A VIDEO DESCRIPTION
            </label>
            <input
              className="upload-video__description-input"
              name="description"
              placeholder="Add a description to your video"
            ></input>
          </div>
        </div>
        <div className="upload-video__btn-container">
          <button className="upload-video__btn-submit">PUBLISH</button>
          <button
            className="upload-video__btn-cancel"
            onClick={() => navigate("/")}
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}

export default Upload;
