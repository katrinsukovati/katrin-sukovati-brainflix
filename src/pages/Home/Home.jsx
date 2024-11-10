import VideoDetails from "../../components/videoDetails/VideoDetails";
import NextVideos from "../../components/nextVideos/NextVideos";
import Comments from "../../components/comments/Comments";
import Video from "../../components/video/Video";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

// use the base url from environment variables
const BASE_URL = import.meta.env.VITE_API_URL;

function Home() {
  // store the currently selected video details
  const [selectedVideo, setSelectedVideo] = useState(null);
  // store the list of videos for the sidebar
  const [videoList, setVideoList] = useState([]);
  // retrieve the `id` parameter from the url
  const { id } = useParams();
  const navigate = useNavigate();

  // fetch the list of videos from the api only once when the component mounts
  useEffect(() => {
    const getVideoList = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/videos`);
        setVideoList(response.data);
      } catch (error) {
        console.error("error loading video list:", error);
      }
    };
    getVideoList();
  }, []); // empty dependency array ensures this runs only once on mount

  // fetch the details of a specific video when `id` or `videoList` changes
  useEffect(() => {
    const getVideoDetails = async (videoId) => {
      try {
        const response = await axios.get(`${BASE_URL}/videos/${videoId}`);
        setSelectedVideo(response.data);
      } catch (error) {
        console.error("error loading video details:", error);
      }
    };

    if (id && videoList.length > 0) {
      // load video details for the selected `id`
      getVideoDetails(id);
    } else if (!id && videoList.length > 0) {
      // if no `id` is in the url, load the first video in the list as default
      getVideoDetails(videoList[0].id);
    }
  }, [id, videoList]); // runs when `id` or `videoList` changes

  // function to update the url when a new video is selected
  const handleVideoSelection = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    selectedVideo && (
      <div>
        {/* main video player */}
        <Video video={selectedVideo} />

        <div className="bottom-section">
          <div>
            {/* video details and comments */}
            <VideoDetails video={selectedVideo} />
            <Comments video={selectedVideo} />
          </div>

          {/* next videos list */}
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
