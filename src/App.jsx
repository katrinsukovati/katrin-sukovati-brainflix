import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import videoData from "./data/video-details.json";
import Video from "./components/video/Video";
import VideoDetails from "./components/videoDetails/VideoDetails";
import NextVideos from "./components/nextVideos/NextVideos";
import Comments from "./components/comments/Comments";

function App() {
  const [video, setVideo] = useState(videoData[0]);
  const [nextVideoSection, setNextVideoSection] = useState(
    videoData.filter((v) => v.id !== videoData[0].id)
  );

  // For Testing
  console.log(video);

  // This function handles the new video selection based on the videos id
  function newVideoSelection(id) {
    const newVid = videoData.find((v) => v.id === id);
    setVideo(newVid);
    setNextVideoSection(videoData.filter((v) => v.id !== id));
  }

  return (
    <div>
      <Header />
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

export default App;
