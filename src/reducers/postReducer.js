import { FETCH_POSTS, NEW_POST,ERROR} from '../actions/types';

const initialState = {
  items: [],
  item: {},
  error:""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };

      case ERROR:
        return {
          ...state,
          error: action.payload
        };
    default:
      return state;
      
  }
}
