import { DataInterface } from "../components/utils";
import { GET_SEARCH_INPUT, SET_DATA, SET_SEARCH } from "./constant";

export const setSeachInput = (payload: string) => ({
  type: GET_SEARCH_INPUT,
  payload,
});

export const setData = (payload: DataInterface[]) => ({
  type: SET_DATA,
  payload,
});

export const setSearchValue = (payload: string) => ({
  type: SET_SEARCH,
  payload,
});
