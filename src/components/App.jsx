import { useState, useEffect, lazy } from 'react';
import { fetchTrendingToday } from 'api';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
//import Home from "../pages/Home";
//import Movies from '../pages/Movies';
import Movie from '../pages/Movie';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));

export default function App() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const url = 'trending/movie/day'
      try {
        const data = await fetchTrendingToday(url);
        const trendsMovies = data.results.map(({ id, title
        }) => {
          return { id, title };
        });
        if (trendsMovies) {
          setTrends(trendsMovies);
        }
      } catch (error) {
        toast(error.massage)
      }
    }
    fetchTrending()
  }, [])

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home trends={trends} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieID" element={<Movie />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

