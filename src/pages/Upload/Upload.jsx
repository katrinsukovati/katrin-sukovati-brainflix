import "./Upload.scss";
import logo from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

function Upload() {
  const navigate = useNavigate();

  // this is a function to send post request to the backend
  const postVideo = async (title, description) => {
    try {
      await axios.post(`${BASE_URL}/videos`, {
        title: title,
        description: description,
      });
      console.log("Video uploaded successfully!");

      alert("Upload has been successful.");
      navigate("/");
    } catch (error) {
      console.error("Video Upload Error:", error);
    }
  };

  // this handles the new video submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;

    postVideo(title, description);
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
              required
            />
          </div>
          <div className="upload-video__description-container">
            <label className="upload-video__description-label">
              ADD A VIDEO DESCRIPTION
            </label>
            <input
              className="upload-video__description-input"
              name="description"
              placeholder="Add a description to your video"
              required
            />
          </div>
        </div>
        <div className="upload-video__btn-container">
          <button className="upload-video__btn-submit" type="submit">
            PUBLISH
          </button>
          <button
            className="upload-video__btn-cancel"
            type="button"
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
