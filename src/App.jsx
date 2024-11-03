import "./App.scss";
import Header from "./components/header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* The Home Page route that will load the default video.
           */}
          <Route path="/" element={<Home />} />
          {/* The Video Details Page route that will load the video with the provided video id.
           */}
          <Route path="/video/:id" element={<Home />} />
          {/* The Video Upload Page route. */}
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
