const VideoCard = ({info}) => {
    console.log('info', info)
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    const count = statistics.viewCount;
    const views = count > 1000000 ? `${(count/1000000).toFixed(2)}M views` : count > 1000 ? `${(count/1000).toFixed(0)}K views` : `${count} views`;

    return (
        <div className="flex flex-col">
            <img src={thumbnails.maxres.url} alt="thumbnail" className="w-full rounded-xl"/>
            <div className="grid grid-flow-col">
                <div className="col-span-11">
                    <h3>{title}</h3>
                    <h4>{channelTitle}</h4>
                    <h4>{views}</h4>
                </div>
                <div className="col-span-1">
                    <img src="https://charbase.com/images/glyph/8942" alt="options" className="h-"/>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;