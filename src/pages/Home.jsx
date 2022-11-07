import { Link, useLocation } from "react-router-dom";

export default function Home({ trends }) {
	const location = useLocation();
	return (
		<div>
			<h2>Trending today</h2>
			<div>
				{trends.map(({ id, title }) => (
					<ul key={id}>
						<Link to={`/movies/${id}`} state={{ from: location }}>
							<li>{title}</li>
						</Link>
					</ul>
				))}
			</div>
		</div>

	);
};