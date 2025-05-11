// ==============================REACT-REDUX-TOOLKIT========================
import { configureStore } from "@reduxjs/toolkit";

// ==============================REDUCERS-SLICCESS==========================
import { uploadReducers } from "../features/upload/uploadSlice";

const store = configureStore({
	reducer: {
		upload: uploadReducers,
	},
});

export default store;
