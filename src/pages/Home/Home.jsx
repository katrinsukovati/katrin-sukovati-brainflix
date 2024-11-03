import VideoDetails from "../../components/videoDetails/VideoDetails";
import NextVideos from "../../components/nextVideos/NextVideos";
import Comments from "../../components/comments/Comments";
import Video from "../../components/video/Video";

import videoData from "../../data/video-details.json";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_BASE = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const API_KEY = "e0ef0a58-82e7-4a27-acd5-5bc52b6714f8"; // Replace with your actual API key

function Home() {
  const [video, setVideo] = useState(videoData[0]);
  const [nextVideoSection, setNextVideoSection] = useState(
    videoData.filter((v) => v.id !== videoData[0].id)
  );

  // This function handles the new video selection based on the videos id
  function newVideoSelection(id) {
    const newVid = videoData.find((v) => v.id === id);
    setVideo(newVid);
    setNextVideoSection(videoData.filter((v) => v.id !== id));
  }
  return (
    <div>
      {/* The actual video player */}
      <Video video={video} />
      <div className="bottom-section">
        <div>
          {/* These are the details for the current selected video */}
          <VideoDetails video={video} />
          {/* Comments for the current video */}
          <Comments video={video} />
        </div>
        {/* The video selection (next video section) */}
        <NextVideos
          allVideos={nextVideoSection}
          newVideoSelection={newVideoSelection}
        />
      </div>
    </div>
  );
}

export default Home;
