/* ====================REACT==================== */
import { useState } from "react";

/* ====================REDUX==================== */
import { useDispatch, useSelector } from "react-redux";

/* ====================COMPONENTS==================== */
import { FileInput } from "./FileInput";

/* ====================UTILITY_FUNCTIONS==================== */
import { convertToPdf } from "../utils/convertToPdf";

/* ====================FEATURES_SLICE==================== */
import {
	clearImages,
	generateMoreImages,
} from "../app/features/imageHandle/imagesHandlingSlice";
/* ============================================================ */

const PhotoOperationsContainer = function ({ downloadContext }) {
	const { imagesUrls } = useSelector((state) => state.imagesHandling);
	const { boolean } = useSelector((state) => state.userConfiguration);
	const dispatch = useDispatch();
	const [copyNum, setCopyNum] = useState();

	return (
		<div className={`utilityBox ${boolean && "show"}`}>
			<label htmlFor="fileInput">
				Choose images from here / Drop images on board
			</label>

			<FileInput />

			<label htmlFor="imageCopyNum">Copy of Images add :</label>
			<input
				type="number"
				name="number"
				id="imageCopyNum"
				min="1"
				defaultValue={copyNum}
				onChange={(e) => setCopyNum(+e?.target?.value)}
				placeholder="Enter number for copy of images"
			/>

			<button
				type="button"
				className="btn reset"
				onClick={() => dispatch(clearImages())}
			>
				Clear All Images
			</button>
			<button
				type="button"
				className="btn generate"
				onClick={() => {
					dispatch(generateMoreImages(copyNum));
					!copyNum && imageCopyNum.focus();
				}}
			>
				Generate Images
			</button>

			<button
				type="button"
				className="btn download"
				onClick={() => {
					if (imagesUrls.length > 0) convertToPdf(downloadContext?.current);
					else alert("please add any one image first...!");
				}}
			>
				Download as PDF
			</button>
			<button
				type="button"
				className="btn print"
				onClick={() => window.print()}
			>
				🖨️ Print This Page
			</button>
		</div>
	);
};

export { PhotoOperationsContainer };
