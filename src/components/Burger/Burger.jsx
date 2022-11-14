import { FaHome, FaYoutube, FaProductHunt } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "./Basic.css";


export const Burger = ({ visibility, handleClick }) => {

	return (
		<div className={visibility ? "wrapper active" : "wrapper"}>
			<button className="btn m-3 btn-light position-absolute top-0 end-0" onClick={handleClick} >
				X
			</button>
			<ul className="flex-column m-0 pl-20 mt-5">
				<NavLink onClick={handleClick} className="d-flex p-2 text-decoration-none text-light width" aria-current="page" to="/"><span className="m-3 "><FaHome size={24} /></span><li>Home</li></NavLink>

				<NavLink onClick={handleClick} className="d-flex p-2 text-decoration-none text-light" aria-current="page" to="/movies"><span className="m-3"><FaYoutube size={24} /></span><li>Movies</li></NavLink>

				<NavLink onClick={handleClick} className="d-flex p-2 text-decoration-none text-light" aria-current="page" to="/about"><span className="m-3"><FaProductHunt size={24} /></span><li>About</li></NavLink>
			</ul>
		</div>
	)
}
export default Burger;



