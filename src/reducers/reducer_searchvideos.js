import { SEARCHVIDEOS } from './../actions/index';
import { FETCH_TOPVIDEOS } from './../actions/index';
export default function(state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case SEARCHVIDEOS:
      return [...action.payload.items];
    case FETCH_TOPVIDEOS:
      return [...action.payload.items];
  }

  return state;
}
