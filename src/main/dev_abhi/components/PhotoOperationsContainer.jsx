const PhotoOperationsContainer = function () {
	return (
		<div className="utilityBox">
			<label htmlFor="fileInput">
				Choose images from here / Drop images on board
			</label>
			<input type="file" name="file" id="fileInput" multiple />

			<label htmlFor="imageCopyNum">Copy of Images add :</label>
			<input
				type="number"
				name="number"
				id="imageCopyNum"
				min="1"
				value="1"
				placeholder="Enter number for copy of images"
			/>

			<button type="button" className="btn reset">
				Clear All Images
			</button>
			<button type="button" className="btn generate">
				Generate Images
			</button>

			<button type="button" className="btn download">
				Download as PDF
			</button>
			<button type="button" className="btn print">
				🖨️ Print This Page
			</button>
		</div>
	);
};

export { PhotoOperationsContainer };
