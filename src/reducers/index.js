import { combineReducers } from 'redux';
import TopVideosReducer from './reducer_topvideos';
import SearchVideosReducer from './reducer_searchvideos';

const rootReducer = combineReducers({
  topVideos: TopVideosReducer,
  searchVideos: SearchVideosReducer,
});

export default rootReducer;
