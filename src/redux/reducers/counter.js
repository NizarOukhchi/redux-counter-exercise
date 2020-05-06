import { INCREMENT, DECREMENT, ADD_TO_LIST } from '../actionTypes';

const intitialState = { value: 0, list: [] };

const counterReducer = (state = intitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case ADD_TO_LIST:
      return { ...state, list: [...state.list, action.payload] };
    default:
      return state;
  }
};

export default counterReducer;
