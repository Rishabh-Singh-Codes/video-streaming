const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const count = statistics.viewCount;
  const views =
    count > 1000000
      ? `${(count / 1000000).toFixed(2)}M views`
      : count > 1000
      ? `${(count / 1000).toFixed(0)}K views`
      : `${count} views`;
  const uploadedAt = `${(
    (Date.now() - new Date(publishedAt)) /
    (60 * 60 * 1000 * 24)
  ).toFixed(1)} days ago`;

  return (
    <div className="flex flex-col">
      <img
        src={
          thumbnails.maxres?.url ||
          thumbnails.medium?.url ||
          thumbnails.standard?.url
        }
        alt="thumbnail"
        className="w-full rounded-xl"
      />
      <div className="grid grid-flow-col">
        <div className="col-span-11">
          <h3 className="font-bold text-lg">
            {title.length > 75 ? `${title.slice(0, 75)}...` : title}
          </h3>
          <h4 className="text-sm text-gray-700 font-medium">{channelTitle}</h4>

          <div className="flex">
            <h4 className="text-sm text-gray-700 font-medium">{views}</h4>
            <h5 className="font-black text-lg text-center relative -translate-y-2 mx-1">
              .
            </h5>
            <h4 className="text-sm text-gray-700 font-medium">{uploadedAt}</h4>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src="https://charbase.com/images/glyph/8942"
            alt="options"
            className="h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
