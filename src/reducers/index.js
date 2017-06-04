import { combineReducers } from 'redux';
import TopVideosReducer from './reducer_topvideos';

const rootReducer = combineReducers({
  topVideos: TopVideosReducer,
});

export default rootReducer;
