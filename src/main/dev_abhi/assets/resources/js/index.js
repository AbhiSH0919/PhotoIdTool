"use-strict";
const menuBtn = document.querySelector(".menuBtn");
const mainContainer = document.querySelector(".mainContainer");
const imgContainer = document.querySelector(".imgContainer");
const utilityBox = document.querySelector(".utilityBox");
const fileInput = document.getElementById("fileInput");
let str = "";

const downloadPDF = async function (e) {
	mainContainer.classList.add("showLoader");

	const opt = {
		position: "relative",
		top: 0,
		left: 0,
		margin: 3,
		filename: "Img.pdf",
		image: { type: "png", quality: 1 },
		html2canvas: { scale: 4, useCORS: true },
		jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
	};

	const images = mainContainer.querySelectorAll(".img");
	const promises = [];

	images.forEach((img) => {
		if (!img.complete) {
			console.warn("img is not loaded");
			promises.push(
				new Promise((resolve) => {
					img.onload = resolve;
					img.onerror = resolve;
				})
			);
		}
	});

	try {
		await Promise.all(promises);
		await html2pdf().set(opt).from(imgContainer).save();
	} catch (error) {
		console.error(error);
		alert("Something went wrong while generating the PDF.");
	} finally {
		mainContainer.classList.remove("showLoader");
	}
};

const printContent = () => window.print();

const generateMoreImageRow = () =>
	str
		? (imgContainer.innerHTML += str) && (str = imgContainer.innerHTML)
		: alert("Please add any one image first...!");

const clearImgContainer = () =>
	str
		? confirm("Do you want clear photos?") &&
		  (imgContainer.innerHTML = str = "")
		: alert("All images are already cleared...!");

const addImg = function (files) {
	const imageCopyLength = parseInt(
		document.getElementById("imageCopyNum").value,
		10
	);

	[...files].forEach((file) => {
		if (file.type.startsWith("image/")) {
			const imageURL = URL.createObjectURL(file); // Create temp URL for image
			for (let i = 0; i < imageCopyLength; i++) {
				// addImg(file);
				str += `<img src="${imageURL}" class="img" crossorigin="anonymous">`;
			}
		} else {
			alert(
				"Please select a valid image file.\nYour selected image file is wrong"
			);
			return;
		}

		imgContainer.innerHTML = str;
	});
};

utilityBox.addEventListener("click", function (e) {
	const targetEle = e.target;

	targetEle.classList.contains("reset") && clearImgContainer(e);
	targetEle.classList.contains("generate") && generateMoreImageRow(e);
	targetEle.classList.contains("download") && downloadPDF(e);
	targetEle.classList.contains("print") && printContent(e);
});

mainContainer.addEventListener("dragover", (e) => {
	e.preventDefault();
	mainContainer.classList.add("dragHover");
});

mainContainer.addEventListener("drop", function (e) {
	e.preventDefault();
	mainContainer.classList.remove("dragHover");
	addImg(e.dataTransfer.files);
});

mainContainer.addEventListener("dragleave", function (e) {
	e.preventDefault();
	mainContainer.classList.remove("dragHover");
});

fileInput.addEventListener("input", function (e) {
	e.preventDefault();
	addImg(e.target.files);
});

menuBtn.addEventListener("click", (e) => {
	e.preventDefault();
	utilityBox.classList.toggle("show");
});
