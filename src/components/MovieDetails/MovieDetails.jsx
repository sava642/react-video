import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovieID } from '../../api'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { BackLink } from 'components/BackLink';


export default function MovieDetails() {
	const [aboutMovie, setAboutMovie] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const { movieID } = useParams()

	useEffect(() => {
		const url = `movie/${movieID}`
		async function fetchMovie() {
			try {
				setIsLoading(true);
				const aboutMovie = await fetchMovieID(url);
				setAboutMovie(aboutMovie)
				setIsLoading(false)
			} catch (error) {
				console.log(error.massage)
			}
		}
		fetchMovie()
	}, [movieID])


	const location = useLocation();
	const backLinkHref = location.state?.from ?? "/movies";
	const { poster_path, title, release_date, vote_average, overview, genres } = aboutMovie;
	const path = 'https://image.tmdb.org/t/p/w500'
	const url = `${path}${poster_path}`

	if (!release_date) {
		return;
	}

	return (
		<div className="contant-custom " style={{ minHeight: "calc(100vh - 56px - 56px)", marginBottom: "3px" }}>
			{isLoading ?
				<Loader /> :
				<>
					<BackLink to={backLinkHref}>Go back</BackLink>
					<div className="card mb-3" style={{ maxWidth: "100%" }}>
						<div className="row g-0">
							<div className="col-md-4">
								{poster_path && <img src={url} className="img-fluid rounded-start" alt="" />}
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{title} ({release_date.slice(0, 4)})</h5>
									<p className="card-text">User Score {Math.floor(vote_average * 10)}%.</p>
								</div>
								<div className="card-body">
									<h5 className="card-title">Overview</h5>
									<p className="card-text">{overview}</p>
								</div>
								<div className="card-body">
									<h5 className="card-title">Genres</h5>
									{genres && <p className="card-text">{genres.map(el => (
										<span key={el.id}> {el.name}</span>
									))}</p>}
								</div>
							</div>
						</div>
					</div>
					<div className=' pt-3 mb-3 container border-top border-bottom border-dark'>
						<h5 className="card-title">Additional information</h5>
						<ul>
							<li>
								<Link to="cast">Cast</Link>
							</li>
							<li>
								<Link to="reviews">Reviews</Link>
							</li>
						</ul>
					</div>
					<Suspense fallback={null}>
						<Outlet context={{ movieID }} />
					</Suspense>
				</>
			}
		</div >
	)
}

