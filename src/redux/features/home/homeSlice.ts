import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../../store";
import { API_URL } from "../../../api/constants";
import { HomeState } from "./model";

const initialState: HomeState = {
  navLinks: [],
  loading: false,
  errors: "",
};

const homeSlice = createSlice({
  name: "navLinks",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    getNavLinksFailure: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },
  
    getNavLinks : (state, { payload }: PayloadAction<any>) => {
      state.navLinks = payload;
    },
  },
});


export const fetchNavLinks = (lang: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {     
      const res = await axios.get(
        `${API_URL}/sections`,{
            headers: {
              'Content-Language': lang,
            },
          }
      );
      dispatch(setLoading(false));
      dispatch(getNavLinks(res.data));
    } catch (error) {
      dispatch(getNavLinksFailure(error.message));
      dispatch(setLoading(false));
    }
  };
};

export const { setLoading, getNavLinksFailure, getNavLinks } = homeSlice.actions;

export default homeSlice.reducer;

export const homeSelector = (state: { homeStore: HomeState }) =>
  state.homeStore;