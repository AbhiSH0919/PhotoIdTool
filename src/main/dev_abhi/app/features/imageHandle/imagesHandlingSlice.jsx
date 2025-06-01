import { createSlice } from "@reduxjs/toolkit";
import assets from "../../../shared/Constants";

const initialState = {
	profileImgUrl: assets?.images?.profileImgUrl,
	imagesData: [],
	imagesUrls: [],
	imgSize: "110px",
};

const imagesHandlingSlice = createSlice({
	name: "uploadImgObj",
	initialState,
	reducers: {
		/**
		 * Upload Image from the directory.
		 * Provide full array of uploaded img.
		 * @param {object} state - The current state of the menubar.
		 * @param {object} action.payload - The new state data.
		 */
		uploadImg: (state, action) => {
			// const [imagesData, imagesUrls] = action.payload;
			// state.imagesData.push(...imagesData);
			// state.imagesUrls.push(...imagesUrls);
			state.imagesUrls.push(...action.payload);
		},

		clearImages: (state, action) => {
			state.imagesUrls.length > 0
				? confirm("Do you want clear photos?") && (state.imagesUrls = [])
				: alert("All images are already cleared...!");
			// state.imagesUrls = [];
		},

		generateMoreImages: (state, action) => {
			if (!state.imagesUrls.length > 0)
				alert("Please add any one image first...!");
			if (!action.payload)
				alert("Please enter valid number for copy of images...!");

			if (state.imagesUrls.length > 0 && action.payload) {
				const item = state.imagesUrls[0];
				if (!item) return;
				for (let i = 0; i < action.payload; i++) {
					state.imagesUrls.push(item);
				}
			}
		},
	},
});

export const { uploadImg, clearImages, generateMoreImages } =
	imagesHandlingSlice.actions;
export const imagesHandlingReducers = imagesHandlingSlice.reducer;
