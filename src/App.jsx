import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import videoData from "./data/video-details.json";
import Video from "./components/video/Video";
import VideoDetails from "./components/videoDetails/VideoDetails";
import NextVideos from "./components/nextVideos/NextVideos";

function App() {
  const [video, setVideo] = useState(videoData[0]);
  const [allVideos, setAllVideos] = useState(videoData);
  const [nextVideoSection, setNextVideoSection] = useState(
    videoData.filter((v) => v.id !== videoData[0].id)
  );

  console.log(video);

  // This function handles new video selection
  function newVideoSelection(id) {
    const newVid = videoData.find((v) => v.id === id);
    setVideo(newVid);
    setNextVideoSection(videoData.filter((v) => v.id !== id));
  }

  return (
    <div>
      <Header />
      {/* The actual video */}
      <Video video={video} />
      <div className="bottom-section">
        <div>
          {/* These are the details for the current selected video */}
          <VideoDetails video={video} />
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
