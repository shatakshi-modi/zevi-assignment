import { GET_SEARCH_INPUT, SET_DATA, SET_SEARCH } from "./constant";
interface Action {
  type: string;
  payload?: any;
}

export const ShoppingRedux = (
  state = { loading: false, search: "", data: [], searchValue: "" },
  action: Action
) => {
  switch (action.type) {
    case GET_SEARCH_INPUT:
      return {
        ...state,
        search: action.payload,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };

    default:
      return state;
  }
};
export type RootState = ReturnType<typeof ShoppingRedux>;
export default ShoppingRedux;
