import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useLocation } from "react-router-dom";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState({});

  const {
    state: { info },
  } = useLocation();
  const {
    snippet: { channelTitle, localized, publishedAt },
    statistics: { likeCount, viewCount },
  } = info;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex w-full gap-4 justify-between mt-8">
      <div className="w-3/4 flex flex-col">
        <div className="h-[600px]">
          <iframe
            style={{ height: "100%", width: "100%", borderRadius: "20px" }}
            src={`https://www.youtube.com/embed/${info.id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="flex flex-col mt-2">
          <h1 className="font-extrabold text-3xl">{localized.title}</h1>
          <div className="flex justify-between">
            <h2 className="font-bold text-lg">{channelTitle}</h2>
            <div className="flex">
              <h3 className="font-bold">
                {(likeCount / 10000).toFixed(2)}K 👍 |&nbsp;
              </h3>
              <h3 className="font-bold">
                {(viewCount / 10000).toFixed(2)}K Views |&nbsp;
              </h3>
              <h3 className="font-bold">
                {(
                  (Date.now() - new Date(publishedAt)) /
                  (60 * 60 * 1000 * 24)
                ).toFixed(1)}{" "}
                days ago
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <CommentsContainer />
        </div>
      </div>
      <div className="w-1/4 h-screen flex flex-col">
        <div>
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
