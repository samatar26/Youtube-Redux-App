import { SEARCHVIDEOS } from './../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case SEARCHVIDEOS:
      return [...action.payload.items];
  }
  return state;
}
