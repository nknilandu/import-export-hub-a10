import { NavLink, Link } from "react-router";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { FiBox } from "react-icons/fi";


export default function Navbar() {
    const user = false

  const handleLogOut = () => {
    
  };

  const linkClass = ({ isActive }) =>
    `hover:text-secondary/50 ${
      isActive ? "text-secondary border-b-2 border-w-[2px]" : "text-gray-500"
    }`;

  const list = (
    <ul className=" flex flex-col lg:flex-row items-center gap-5 font-medium ">
      <li>
        <NavLink className={linkClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClass} to="/all-products">
          All products
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClass} to="/my-exports">
          My Exports
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClass} to="/my-imports">
          My Imports
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div>
      <div className="navbar shadow-sm">
        <div className="navbar max-w-7xl mx-auto px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="mr-3 lg:hidden">
                <div
                  className="h-5 w-5 flex items-center"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <RiMenu2Fill className="text-lg" />
                </div>
              </div>
              {
                <ul
                  tabIndex={0}
                  className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-44 p-2 shadow"
                >
                  {list}
                </ul>
              }
            </div>

            <Link className="text-xl flex items-center gap-2">
              {/* <img className='h-5.5' src={logo} alt="logo" /> */}
              <FiBox />
              <h1 className="font-bold">
                Import <span className="text-primary">Export</span> Hub
              </h1>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">{list}</div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={handleLogOut}
                  className="text-xs border border-primary rounded-full text-primary font-semibold px-3 py-2 hover:bg-primary/10 transition duration-300"
                >
                  Log out
                </button>
                <img
                  src={user.photoURL}
                  alt="profile"
                  title={user?.displayName}
                  className="h-9 w-9 bg-black/10 rounded-full object-cover border border-gray-500"
                />
              </div>
            ) : (
              <NavLink to="/auth/login">
                <button className="text-xs bg-primary shadow-md rounded-full text-white font-semibold px-4 py-2 hover:bg-primary/80 transition duration-300">
                  Login Now
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
