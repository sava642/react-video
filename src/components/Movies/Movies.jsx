import { Link, useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";


export default function Movies() {

	const [foundMovies] = useOutletContext();
	const location = useLocation();

	return (
		<div className="content-custom mb-3 mt-3">
			{foundMovies.length === 0 && <h5 className="card-title mt-2" >Введите название фильма...</h5>}
			<div className="card-group row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
				{foundMovies.map(({ id, title, poster_path }) => (
					<div className="col" key={id}>
						<div className="card h-100" >
							<div className="card-body">
								<img src={`https://image.tmdb.org/t/p/w200${poster_path}`} className="card-img-top " alt="" />
							</div>
							<div className="card-body ">
								<h6 className="card-title">{title}</h6>
								<Link to={`/movies/${id}`} state={{ from: location }} className="btn btn-primary">Read more</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
