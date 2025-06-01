/* ====================REDUX==================== */
import { useDispatch, useSelector } from "react-redux";

/* ====================COMPONENTS==================== */
import { Loader } from "../utils/Loader";
import { ImgTag } from "./ImgTag";

/* ====================CONSTANTS==================== */
import { DRAGLEAVE, DRAGOVER, DROP } from "@shared/Constants";

/* ====================UTILITY_FUNCTIONS==================== */
import { checkInputFiles } from "../utils/checkInputFiles";

/* ====================FEATURES_SLICE==================== */
import { uploadImg } from "../app/features/imageHandle/imagesHandlingSlice";
/* ============================================================ */

const MainImgContainer = function ({ downloadContext }) {
	const { profileImgUrl, imagesUrls } = useSelector(
		(state) => state.imagesHandling
	);
	const dispatch = useDispatch();

	const onDropChange = function (e) {
		const selectedFiles = [...e?.dataTransfer?.files];
		const imagesUrls = checkInputFiles(selectedFiles);

		dispatch(uploadImg(imagesUrls));
	};

	const handleDragDrop = function (e, action) {
		e.preventDefault();
		const ele = e.target.closest(".mainContainer");

		action === DRAGOVER && ele.classList.add("dragHover");
		action === DRAGLEAVE && ele.classList.remove("dragHover");
		action === DROP &&
			(ele.classList.remove("dragHover") || (action && onDropChange(e)));
	};

	return (
		<>
			<div
				ref={downloadContext}
				className={"mainContainer showLoade dragHove"}
				aria-placeholder="drop Your Images Here!"
				onDragOver={(e) => handleDragDrop(e, DRAGOVER)}
				onDragLeave={(e) => handleDragDrop(e, DRAGLEAVE)}
				onDrop={(e) => handleDragDrop(e, DROP)}
			>
				<div className="imgContainer">
					{imagesUrls.length === 0 ? (
						<>
							<ImgTag imgUrl={profileImgUrl} />
						</>
					) : (
						imagesUrls?.map((imgUrl, i) => {
							return <ImgTag key={i} imgUrl={imgUrl} />;
						})
					)}

					{/* {imagesUrls?.map((imgUrl, i) => {
							return <ImgTag key={i} imgUrl={imgUrl} />;
						})} */}
				</div>
			</div>

			<Loader />
		</>
	);
};

export { MainImgContainer };
