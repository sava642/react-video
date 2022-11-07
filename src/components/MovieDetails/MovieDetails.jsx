import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovieID } from '../../api'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Container, Wrapper, FlexItem, AddInfo, ImgBox } from './MovieDetails.styled'
import { BackLink } from 'components/BackLink';

import styled from "styled-components";

const Img = styled.img`
background-image: liner-gradient(rgba(0, 0, 0, 0.4), rgba(0,0,0,0.4)), var(url);
background-repeat: no-repeat;
background-size:100%;
`;

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
							<div>
								{release_date && <h2>{title} ({release_date.slice(0, 4)})</h2>}
								<br />
								<p>User Score {Math.floor(vote_average * 10)}%</p>
							</div>
							<div>
								<h3>Overview</h3>
								<br />
								<p>{overview}</p>
							</div>
							<div>
								<h4>Genres</h4>
								<br />
								{genres && <div>{genres.map(el => (
									<span key={el.id}> {el.name}</span>
								))}</div>}
							</div>

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
					<Suspense fallback={null}>
						<Outlet context={{ movieID }} />
					</Suspense>
				</>
			}
		</Container >
	)
}

// max-width: 100%;
// hight: auto;
// overflow:hidden;
//  object-fit: cover;