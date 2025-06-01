import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	boolean: true,
};

const userConfigurationSlice = createSlice({
	name: "userConfig",
	initialState,
	reducers: {
		updateBoolean: (state, action) => {
			state.boolean = !action.payload;
			console.log(state.boolean, action.payload);
		},
	},
});

export const { updateBoolean } = userConfigurationSlice.actions;
export const userConfigurationReducers = userConfigurationSlice.reducer;
