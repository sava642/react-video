import { NavLink } from "react-router-dom";

export const About = () => {
	return (
		<div className="card content-custom" style={{ width: "100%" }}>
			<div className="card-body">
				<h5 className="card-title mb-3">Про проект:</h5>
				<p className="card-text mb-3">
					В этом проекте я применил Bootstrap как основу стилизации.
					Для прижатия Footer было использовано вычисление 100vl минус Header и Footer.
					Для ознакомления с Bootstrap было просмотрено видео https://www.youtube.com/watch?v=-qfEOE4vtxE , а ткже прочитан конспект на сайте https://getbootstrap.com/. Для управления поисковика в навигации использовал location.pathname. В качестве адаптивной верстки использовался off-canvas sidebar.
				</p>
				<NavLink className="card-link" aria-current="page" to="/">Home</NavLink>
				<NavLink className="card-link" to="/movies">Movies</NavLink>
			</div>
		</div>
	);
};
export default About;