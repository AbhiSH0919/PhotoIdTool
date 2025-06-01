// import html2pdf from "html2pdf.js";

const convertToPdf = async function (eleContent) {
	if (!eleContent) return;

	const pdfContent = eleContent;
	pdfContent.classList.add("showLoader", "pdf-export");

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
		const html2pdf = (await import("html2pdf.js")).default;
		const html2canvas = await import("html2canvas");

		await Promise.all(promises);

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

		await html2pdf().set(opt).from(pdfContent).save();
	} catch (error) {
		console.error(error);
		alert(
			"Something went wrong while generating the PDF.\nPlease try again.\nIf the same issue persists, reload the page."
		);
		pdfContent.classList.remove("showLoader", "pdf-export");
	} finally {
		setTimeout(() => {
			pdfContent.classList.remove("showLoader", "pdf-export");
		}, 5000);
	}
};

export { convertToPdf };
