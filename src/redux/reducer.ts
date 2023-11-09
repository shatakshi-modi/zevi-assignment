import { GET_SEARCH_INPUT } from "./constant";
interface Action {
  type: string;
  payload?: any;
}

export const ShoppingRedux = (state = { loading: false }, action: Action) => {
  switch (action.type) {
    case GET_SEARCH_INPUT:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default ShoppingRedux;
