const API_KEY = 'AIzaSyAUD5jiHkVOCBRTl-UDPNhAUbG_GTUHwts';

const today = new Date().toISOString();
const yesterday = new Date(Date.now() - 86400).toISOString();
const baseUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=viewCount&relevanceLanguage=en&type=video&publishedAfter=${yesterday}&publishedBefore=${today}&key=${API_KEY}`;

export const FETCH_TOPVIDEOS = 'FETCH_TOPVIDEOS';
export const SEARCHVIDEOS = 'SEARCHVIDEOS';
export const SELECTEDVIDEO = 'SELECTEDVIDEO';
export const FETCH_PASTVIDEOS = 'FETCH_PASTVIDEOS';

export function fetchPastVideos(time) {
  const past = new Date(Date.now() - time).toISOString();
  const baseUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=viewCount&type=video&publishedAfter=${past}&publishedBefore=${today}&key=${API_KEY}`;
  const request = fetch(baseUrl).then(response => response.json());

  return {
    type: FETCH_PASTVIDEOS,
    payload: request,
  };
}

export function fetchTopVideos() {
  const request = fetch(baseUrl).then(response => response.json());
  return {
    type: FETCH_TOPVIDEOS,
    payload: request,
  };
}

export function searchVideos(term) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=s${term}&maxResults=12&relevanceLanguage=en&regionCode=gb&key=${API_KEY}`;
  const request = fetch(url).then(response => response.json());
  return {
    type: SEARCHVIDEOS,
    payload: request,
  };
}

export function selectedVideo(video) {
  return {
    type: SELECTEDVIDEO,
    payload: video,
  };
}
