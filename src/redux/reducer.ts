import { GET_SEARCH_INPUT, SET_DATA } from "./constant";
interface Action {
  type: string;
  payload?: any;
}

export const ShoppingRedux = (
  state = { loading: false, search: "", data: [] },
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
    default:
      return state;
  }
};
export type RootState = ReturnType<typeof ShoppingRedux>;
export default ShoppingRedux;
