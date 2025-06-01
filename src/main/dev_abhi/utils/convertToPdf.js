import html2pdf from "html2pdf.js";

const convertToPdf = async function (eleContent) {
	const pdfContent = eleContent;
	pdfContent.classList.add("showLoader", "pdf-export");

	const opt = {
		position: "relative",
		top: 0,
		left: 0,
		margin: 1,
		filename: "Img.pdf",
		image: { type: "png", quality: 1 },
		html2canvas: { scale: 4, useCORS: true },
		jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
	};

	const images = pdfContent.querySelectorAll(".img");
	const promises = [];

	images.forEach((img) => {
		if (!img.complete) {
			console.warn("img in not loaded");
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
		await html2pdf().set(opt).from(pdfContent).save();
	} catch (error) {
		console.error(error);
		alert("Something went wrong while generating the PDF.\nPlease try again.");
	} finally {
		setTimeout(() => {
			pdfContent.classList.remove("showLoader", "pdf-export");
		}, 5000);
	}
};

export { convertToPdf };
