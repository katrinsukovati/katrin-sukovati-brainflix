import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import videoData from "./data/video-details.json";
import Video from "./components/video/Video";

function App() {
  const [video, setVideo] = useState(videoData[0]);
  console.log(video);
  return (
    <div className="App">
      <Header />
      <Video video={video} />
    </div>
  );
}

export default App;
