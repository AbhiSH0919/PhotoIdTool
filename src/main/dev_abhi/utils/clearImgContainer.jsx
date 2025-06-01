/* ====================REDUX==================== */
import { useDispatch, useSelector } from "react-redux";

/* ====================FEATURES_SLICE==================== */
import {
	clearImages,
	uploadImg,
} from "../app/features/imageHandle/imagesHandlingSlice";
/* ============================================================ */

const ClearImgContainer = function () {
	// const clearFun = function () {
	const { imagesUrls } = useSelector((state) => state.upload);
	const dispatch = useDispatch();
	console.log(imagesUrls);

	imagesUrls.length > 0
		? confirm("Do you want clear photos?") && dispatch(clearImages())
		: alert("All images are already cleared...!");
	// };

	// return clearFun;
};

// export default clearImgContainer

export { ClearImgContainer };
