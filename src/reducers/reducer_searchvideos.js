import { SEARCHVIDEOS } from './../actions/index';
import { FETCH_TOPVIDEOS } from './../actions/index';
import { FETCH_PASTVIDEOS } from './../actions/index';
export default function(state = [], action) {
  switch (action.type) {
    case SEARCHVIDEOS:
      return [...action.payload.items];
    case FETCH_TOPVIDEOS:
      return [...action.payload.items];
    case FETCH_PASTVIDEOS:
      return [...action.payload.items];
  }

  return state;
}
