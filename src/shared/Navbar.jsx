import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li className="font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "mx-2 py-2 border-2 border-b-emerald-700 border-transparent text-[#1A5319]"
              : "mx-2 py-2 border-2 hover:border-2 hover:border-b-emerald-700 border-transparent hover:text-[#1A5319]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            isActive
              ? "mx-2 py-2 border-2 border-b-emerald-700 border-transparent text-[#1A5319]"
              : "mx-2 py-2 border-2 hover:border-2 hover:border-b-emerald-700 border-transparent hover:text-[#1A5319]"
          }
        >
          Books
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img
            src="https://i.ibb.co.com/VLV4TZf/Booka-Boo-v2.png"
            className="h-12 w-16"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
