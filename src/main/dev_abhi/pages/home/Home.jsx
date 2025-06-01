/* ====================REACT==================== */
import { useRef } from "react";

/* ====================COMPONENTS==================== */
import { MainImgContainer } from "../../components/MainImgContainer";
import { PhotoOperationsContainer } from "../../components/PhotoOperationsContainer";
/* ============================================================ */

const Home = function () {
	const downloadContext = useRef(null);
	return (
		<section className="sectionHome">
			<MainImgContainer downloadContext={downloadContext} />
			<PhotoOperationsContainer downloadContext={downloadContext} />
		</section>
	);
};

export { Home };
