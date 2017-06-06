const API_KEY = 'AIzaSyAUD5jiHkVOCBRTl-UDPNhAUbG_GTUHwts';

const today = new Date().toISOString();
const yesterday = new Date(Date.now() - 86400000).toISOString();
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=viewCount&publishedAfter=${yesterday}&publishedBefore=${today}&relevanceLanguage=en&type=video&key=${API_KEY}`;

export const FETCH_TOPVIDEOS = 'FETCH_TOPVIDEOS';
export const SEARCHVIDEOS = 'SEARCHVIDEOS';

export function fetchTopVideos() {
  const request = fetch(url).then(response => response.json());
  return {
    type: FETCH_TOPVIDEOS,
    payload: request,
  };
}

export function searchVideos(term) {
  const url = `https://www.googleapis.com/youtube/v3/search?q=${term}`;
  const request = fetch(url).then(response => response.json());
  console.log(request, term);
  return {
    type: SEARCHVIDEOS,
    payload: 'request',
  };
}
