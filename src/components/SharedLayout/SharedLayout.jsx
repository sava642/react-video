import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from '../../api';
import { useState, useEffect } from "react";
import Burger from "components/Burger/Burger";


const SharedLayout = () => {

	const [query, setQuery] = useState('');
	const [foundMovies, setFoundMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const valueParam = searchParams.get('query') ?? '';
	const location = useLocation();
	const [visibility, setVisibility] = useState(false)

	const handleClick = () => {
		setVisibility(prevvisibility => !prevvisibility)
	}

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.currentTarget;
		const value = form.elements.searchValue.value;
		if (value === "") {
			toast('Впишите значение поиска')
			return;
		}
		setSearchParams(value !== '' ? { query: value } : {});
		form.reset();
	}
	useEffect(() => {
		if (searchParams === "") {
			return;
		}
		async function fetchSearch() {
			const url = 'search/movie'
			try {
				const data = await fetchSearchMovies(url, valueParam);
				if (data.results.length === 0
				) {
					toast('По вашему запросу ничего не найдено')
				};
				const foundMovies = data.results.map(({ id, title, poster_path
				}) => {
					return {
						id,
						title,
						poster_path
					};
				});
				if (foundMovies) {
					setFoundMovies(foundMovies);
				}
			} catch (error) {
				toast(error.massage)
			}
		}
		fetchSearch()
	}, [valueParam, searchParams])

	return (
		<div className="container wrapper-custom">
			<ToastContainer />
			<Burger visibility={visibility} handleClick={handleClick} />
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<div className="container-fluid">
					<button onClick={handleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/movies">Movies</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
							</li>
						</ul>
						{location.pathname === '/movies' &&
							<form className="d-flex" role="search" onSubmit={handleSubmit}>
								<input className="form-control me-2"
									type="search"
									name="searchValue"
									placeholder="Search"
									aria-label="Search"
									value={query}
									onChange={(e) => setQuery(e.target.value)} />
								<button className="btn btn-outline-success" type="submit">Search</button>
							</form>
						}

					</div>
				</div>
			</nav>
			<Suspense fallback={null} >
				<Outlet context={[foundMovies]} />
			</Suspense>
			<footer className="footer-custom bg-dark text-center text-white">
				<div className="text-center p-3" style={{
					backgroundColor: 'rgba(0, 0, 0, 0.2)',
				}}>
					© {new Date().getFullYear()}Copyright:
					<a className="text-white" href="https://bootstrap.com/">Bootstrap.com</a>
				</div>
			</footer >
		</div >
	);
};
export default SharedLayout;