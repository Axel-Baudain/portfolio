import { INCREMENT_PROGRESS } from '../actions/progressbar';

const initialState = {
  progression: 0,
};

const progressbarReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
    case INCREMENT_PROGRESS:
      if (state.progression < 100) {
        return {
          ...state,
          progression: state.progression + 1,
        }
      }
      return state;
  }
}

export default progressbarReducer;