export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const YOUTUBE_SEARCH_API =  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_VIDEO_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="

export const LIVE_CHAT_COUNT = 20;