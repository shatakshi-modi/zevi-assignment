import { GET_SEARCH_INPUT } from "./constant";

export const setSeachInput = (payload: string) => ({
  type: GET_SEARCH_INPUT,
  payload,
});
