import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar mx-auto bg-base-100 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Buy</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl font-lobster tracking-wider font-medium"
        >
          <IoFastFoodOutline className="text-primary size-6" /> WellupBite
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Buy</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2 hidden sm:flex">
        <a className="btn btn-outline btn-primary">Login</a>
        <a className="btn  btn-primary">Register</a>
      </div>
    </div>
  );
}
