const GOOGLE_API_KEY = "AIzaSyC1H-gARZVmp4cdWnjGsVEoWjMd4NvDQuc";

export const Recommendations_API = `https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=25&regionCode=in&key=${GOOGLE_API_KEY}&channelId=`;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=' + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVECHAT_COUNT = 50; 

export const ChannelImage_API = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=' + GOOGLE_API_KEY;

export const Comments_Thread_API = 'https://youtube.googleapis.com/youtube/v3/commentThreads?&textFormat=plainText&part=snippet&maxResults=100&order=relevance&key='+GOOGLE_API_KEY+ '&videoId=';