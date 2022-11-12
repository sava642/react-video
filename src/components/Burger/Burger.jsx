import { FaHome, FaYoutube, FaProductHunt } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "./Basic.css";


export const Burger = ({ visibility, handleClick }) => {

	return (
		<div className={visibility ? "wrapper active" : "wrapper"}>
			<button className="dropdown" onClick={handleClick} >
				x
			</button>
			<ul>
				<li>
					<span><FaHome /></span>
					<NavLink className="card-link" aria-current="page" to="/">Home</NavLink>
				</li>
				<li>
					<span><FaYoutube /></span>
					<NavLink className="card-link" aria-current="page" to="/movies">Movies</NavLink>
				</li>
				<li>
					<span><FaProductHunt /></span>
					<NavLink className="card-link" aria-current="page" to="/about">About</NavLink>
				</li>
			</ul>
		</div>
	)
}
export default Burger;



