import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovieID } from '../../api'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Container, Wrapper, FlexItem, AddInfo, Img, ImgBox } from './MovieDetails.styled'
import { BackLink } from 'components/BackLink';


export default function MovieDetails() {
	const [aboutMovie, setAboutMovie] = useState({})
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

	const { poster_path, title, release_date, vote_average, overview, genres } = aboutMovie

	const path = 'https://image.tmdb.org/t/p/w500'
	const url = `${path}${poster_path}`
	return (

		<Container>
			{isLoading ?
				<Loader /> :
				<>
					<BackLink to={backLinkHref}>Go back</BackLink>
					<Wrapper>
						<ImgBox>
							{poster_path && <Img
								src={url}
								alt=""
							/>}
						</ImgBox>
						<FlexItem>
							{release_date && <h2>{title} ({release_date.slice(0, 4)})</h2>}
							<p>User Score {Math.floor(vote_average * 10)}%</p>
							<h3>Overview</h3>
							<p>{overview}</p>
							<h4>Genres</h4>
							{genres && <div>{genres.map(el => (
								<span key={el.id}> {el.name}</span>
							))}</div>}
						</FlexItem>
					</Wrapper>


					<AddInfo>
						<p>Additional information</p>
						<ul>
							<li>
								<Link to="cast">Cast</Link>
							</li>
							<li>
								<Link to="reviews">Reviews</Link>
							</li>
						</ul>
					</AddInfo>

					<Outlet context={{ movieID }} />
				</>

			}

		</Container >
	)
}