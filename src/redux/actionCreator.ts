import { DataInterface } from "../components/utils";
import { GET_SEARCH_INPUT, SET_DATA } from "./constant";

export const setSeachInput = (payload: string) => ({
  type: GET_SEARCH_INPUT,
  payload,
});

export const setData = (payload: DataInterface[]) => ({
  type: SET_DATA,
  payload,
});
