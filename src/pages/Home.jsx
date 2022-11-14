import { Link, useLocation } from "react-router-dom";

export default function Home({ trends }) {
	const location = useLocation();

	return (
		<div className="content-custom container mb-3">
			<p className="fs-3 my-2">Trending today</p>
			<div className="card-group row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 ">
				{trends.map(({ id, title, poster_path }) => (
					<div className="col" key={id}>
						<div className="card h-100" >
							<div className="card-body ">
								<img src={`https://image.tmdb.org/t/p/w200${poster_path}`} className="card-img-top " alt="" />
							</div>
							<div className="card-body p-3">
								<h6 className="card-title">{title}</h6>
								<Link to={`/movies/${id}`} state={{ from: location }} className="btn btn-primary">Read more</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

