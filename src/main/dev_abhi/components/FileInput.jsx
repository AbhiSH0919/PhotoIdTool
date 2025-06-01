/* ====================REACT==================== */
import { useEffect, useState } from "react";

/* ====================REDUX==================== */
import { useDispatch, useSelector } from "react-redux";

/* ====================UTILITY_FUNCTIONS==================== */
import { checkInputFiles } from "../utils/checkInputFiles";

/* ====================FEATURES_SLICE==================== */
import { uploadImg } from "../app/features/imageHandle/imagesHandlingSlice";
/* ============================================================ */

/**
 *
 * @param {null}: null
 * @returns {JSX.element}: Returns the HTML input element from the components/FileInput.
 * @description : Using element Inputed all images urls dispatched throgh the uploadImg features. All images urls push in array.
 * ```js
 * @function onInput(e) {
	- 	const onInputChange = function(e) {
	-		const selectedFiles = [...e.target.files];
	-		const imagesUrls = checkInputFiles(selectedFiles);
	-		dispatch(uploadImg(imagesUrls));
	-		}
	-	}
 * ```
 * 
 */

const FileInput = function () {
	const dispatch = useDispatch();

	const onInputChange = function (e) {
		const selectedFiles = [...e?.target?.files];
		const imagesUrls = checkInputFiles(selectedFiles);

		dispatch(uploadImg(imagesUrls));
	};

	return (
		<input
			type="file"
			name="file"
			id="fileInput"
			multiple
			onInput={onInputChange}
		/>
	);
};

export { FileInput };
