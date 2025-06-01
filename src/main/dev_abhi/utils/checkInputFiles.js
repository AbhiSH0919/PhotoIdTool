import { useState, useEffect } from "react";

/**
 * @param {object} - files data 
 * @returns {array} - all imagesUrls array.
 * ```js
 * @function checkInputFiles(files) {
 }
 *```
 */

const checkInputFiles = function (files) {
	const imagesUrls = [];

	// useEffect(() => {
	if (!files) return;

	for (let file of files) {
		if (file.type.startsWith("image/")) {
			const imageURL = URL.createObjectURL(file);
			imagesUrls.push(imageURL);
		} else {
			alert("Unsupported/Invalid file selected: " + file.name);
		}
	}
	// }, [files]);

	return imagesUrls;
};

export { checkInputFiles };
