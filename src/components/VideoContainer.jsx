import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const stringifiedData = await fetch(YOUTUBE_VIDEOS_API);
    const data = await stringifiedData.json();

    setVideos(data.items);
  };

  if (!videos || !videos.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 gap-10 mt-8">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
