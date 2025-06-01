/* ====================CONSTANTS==================== */
import assets from "@shared/Constants";

/* ====================REDUX==================== */
import { useDispatch, useSelector } from "react-redux";

/* ====================FEATURES_SLICE==================== */
import { updateBoolean } from "@app/features/userConfigurationSlice";
/* ============================================================ */

const Header = function () {
	const { boolean } = useSelector((state) => state.userConfiguration);
	const dispatch = useDispatch();

	return (
		<header className="header">
			<img className="header__logo" src={assets.icons.faviconIcon} alt="logo" />
			<h1 className="heading__primary">Photo Id Tool</h1>
			<button
				className="btn btn__menu"
				onClick={() => dispatch(updateBoolean(boolean))}
			>
				menu
			</button>
		</header>
	);
};

export { Header };
