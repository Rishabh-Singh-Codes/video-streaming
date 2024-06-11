export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const YOUTUBE_SEARCH_API =  "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q="