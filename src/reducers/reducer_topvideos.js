import { FETCH_TOPVIDEOS } from './../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TOPVIDEOS:
      return [...action.payload.items];
  }
  return state;
}
