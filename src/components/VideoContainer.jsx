import { useEffect, useState } from "react";
import { youTubeApi } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const stringifiedData = await fetch(youTubeApi);
    const data = await stringifiedData.json();

    setVideos(data.items);
  };

  if (!videos.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 gap-10 mt-8">
      {videos.map((video) => (
        <VideoCard info={video} key={video.id}/>
      ))}
    </div>
  );
};

export default VideoContainer;
