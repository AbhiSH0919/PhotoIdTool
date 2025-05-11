// import images from "@shared/Constants";
import { Loader } from "../utils/Loader";
import { ImgTag } from "../utils/ImgTag";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MainImgContainer = function () {
	const { profileImgUrl, images } = useSelector((state) => state.upload);

	const [imgUrl, setImgUrl] = useState(profileImgUrl);

	return (
		<>
			<section className="section">
				<div
					className="mainContainer showLoade dragHove"
					aria-placeholder="drop Your Images Here!"
				>
					<div className="imgContainer">
						<ImgTag imgUrl={imgUrl} />
					</div>
				</div>

				<Loader />
			</section>
		</>
	);
};

export { MainImgContainer };
