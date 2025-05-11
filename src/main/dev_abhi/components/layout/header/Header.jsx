import assets from "@shared/Constants";

const Header = function () {
	return (
		<header className="header">
			<img className="header__logo" src={assets.icons.faviconIcon} alt="logo" />
			<h1 className="heading__primary">Photo Id Tool</h1>
			<button className="btn btn__menu">menu</button>
		</header>
	);
};

export { Header };
