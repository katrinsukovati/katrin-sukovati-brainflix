import VideoDetails from "../../components/videoDetails/VideoDetails";
import NextVideos from "../../components/nextVideos/NextVideos";
import Comments from "../../components/comments/Comments";
import Video from "../../components/video/Video";

import videoData from "../../data/video-details.json";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_BASE = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const API_KEY = "e0ef0a58-82e7-4a27-acd5-5bc52b6714f8";

function Home() {
  // store the currently selected video details
  const [selectedVideo, setSelectedVideo] = useState(null);
  // store the list of videos for the sidebar
  const [videoList, setVideoList] = useState([]);
  // retrieve the `id` parameter from the url
  const { id } = useParams();
  const navigate = useNavigate();

  // fetch the list of videos from the api
  const getVideoList = async () => {
    try {
      const response = await axios.get(`${API_BASE}/videos?api_key=${API_KEY}`);
      setVideoList(response.data);
      console.log(videoList);
    } catch (error) {
      console.error("Error loading video list:", error);
    }
  };

  // get the details of a specific video by id
  const getVideoDetails = async (videoId) => {
    try {
      const response = await axios.get(
        `${API_BASE}/videos/${videoId}?api_key=${API_KEY}`
      );
      setSelectedVideo(response.data);
    } catch (error) {
      console.error("Error loading video details:", error);
    }
  };

  // load video list and selected video details when the component mounts or when `id` changes
  useEffect(() => {
    if (videoList.length === 0) {
      getVideoList();
    } else if (id) {
      // only load video details if `id` is present
      getVideoDetails(id);
    } else if (videoList.length > 0) {
      // load default video (first in the list) if no id is present in the url
      getVideoDetails(videoList[0].id);
    }
  }, [id, videoList]);

  // function to update the URL when a new video is selected
  const handleVideoSelection = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    selectedVideo && (
      <div>
        {/* Main video player */}
        <Video video={selectedVideo} />

        <div className="bottom-section">
          <div>
            {/* Video details and comments */}
            <VideoDetails video={selectedVideo} />
            <Comments video={selectedVideo} />
          </div>

          {/* Next videos list */}
          <NextVideos
            allVideos={videoList.filter(
              (video) => video.id !== selectedVideo.id
            )}
            newVideoSelection={handleVideoSelection}
          />
        </div>
      </div>
    )
  );
}

export default Home;
