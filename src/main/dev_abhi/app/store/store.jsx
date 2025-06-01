// ==============================REACT-REDUX-TOOLKIT========================
import { configureStore } from "@reduxjs/toolkit";

// ==============================REDUCERS-SLICCESS==========================
import { imagesHandlingReducers } from "../features/imageHandle/imagesHandlingSlice";
import { userConfigurationReducers } from "../features/userConfigurationSlice";

const store = configureStore({
	reducer: {
		imagesHandling: imagesHandlingReducers,
		userConfiguration: userConfigurationReducers,
	},
});

export default store;
