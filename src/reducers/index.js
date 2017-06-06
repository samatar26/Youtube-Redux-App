import { combineReducers } from 'redux';
import TopVideosReducer from './reducer_topvideos';
import SearchVideosReducer from './reducer_searchvideos';
import SelectedVideoReducer from './reducer_selectedvideo';

const rootReducer = combineReducers({
  topVideos: TopVideosReducer,
  searchVideosResult: SearchVideosReducer,
  selectedVideo: SelectedVideoReducer,
});

export default rootReducer;
