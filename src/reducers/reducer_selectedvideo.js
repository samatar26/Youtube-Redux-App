import { SELECTEDVIDEO } from './../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case SELECTEDVIDEO:
      return [action.payload];
  }
  return state;
}
