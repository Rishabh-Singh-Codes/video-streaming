import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({location = "main"}) => {
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
    <div className={`grid ${location === "main" ? "grid-cols-3" : "grid-cols-1"} gap-10 mt-8 w-full`}>
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id} state={{"info": video}}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
