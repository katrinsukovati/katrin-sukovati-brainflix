import VideoDetails from "../../components/videoDetails/VideoDetails";
import NextVideos from "../../components/nextVideos/NextVideos";
import Comments from "../../components/comments/Comments";
import Video from "../../components/video/Video";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

// Use the base URL from environment variables
const BASE_URL = import.meta.env.VITE_API_URL;

function Home() {
  // Store the currently selected video details
  const [selectedVideo, setSelectedVideo] = useState(null);
  // Store the list of videos for the sidebar
  const [videoList, setVideoList] = useState([]);
  // Retrieve the `id` parameter from the URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch the list of videos from the API
  const getVideoList = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/videos`);
      setVideoList(response.data);
    } catch (error) {
      console.error("Error loading video list:", error);
    }
  };

  // Get the details of a specific video by id
  const getVideoDetails = async (videoId) => {
    try {
      const response = await axios.get(`${BASE_URL}/videos/${videoId}`);
      setSelectedVideo(response.data);
    } catch (error) {
      console.error("Error loading video details:", error);
    }
  };

  // Load video list and selected video details when the component mounts or when `id` changes
  useEffect(() => {
    if (videoList.length === 0) {
      getVideoList();
    } else if (id) {
      // Only load video details if `id` is present
      getVideoDetails(id);
    } else if (videoList.length > 0) {
      // Load default video (first in the list) if no id is present in the URL
      getVideoDetails(videoList[0].id);
    }
  }, [id, videoList]);

  // Function to update the URL when a new video is selected
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
