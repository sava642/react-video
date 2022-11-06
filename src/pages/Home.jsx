import { Link } from "react-router-dom";
export const Home = ({ trends }) => {
	return (
		<div>
			<h2>Trending today</h2>
			<div>
				{trends.map(({ id, title }) => (
					<ul key={id}>
						<Link to={`/movies/${id}`}>
							<li>{title}</li>
						</Link>
					</ul>
				))}
			</div>
		</div>

	);
};