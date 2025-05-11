import { createSlice } from "@reduxjs/toolkit";
import assets from "../../../shared/Constants";

const initialState = {
	profileImgUrl: assets.images.profileImgUrl,
	images: null,
	imgSize: "110px",
};

const uploadSlice = createSlice({
	name: "upload img",
	initialState,
	reducers: {
		/**
		 * Upload Image from the directory.
		 * Provide full array of uploaded img.
		 * @param {object} state - The current state of the menubar.
		 * @param {object} action.payload - The new state data.
		 */
		uploadImg: (state, action) => {
			state.images = action.payload;
		},
	},
});

export const { uploadImg } = uploadSlice.actions;
export const uploadReducers = uploadSlice.reducer;
