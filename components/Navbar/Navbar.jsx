import { NavLink, Link } from "react-router";
import { RiMenu2Fill } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { HiMenuAlt2 } from "react-icons/hi";

export default function Navbar() {
  const { user, setUser, loading, logOut } = useContext(AuthContext);
  // console.log(user);

  // ======= theme controller ======================
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const html = document.querySelector("html");
    html.setAttribute("data-theme", savedTheme);
  }, []);
  const handleTheme = (e) => {
    const isChecked = e.target.checked;
    const html = document.querySelector("html");
    const theme = isChecked ? "dark" : "light";

    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };
  //======================log out =================
  const handleLogOut = () => {
    // sweetalert2 start
    Swal.fire({
      title: "Log out?",
      theme: "auto",
      text: "Are you sure want to logout ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        //logout action
        logOut()
          .then(() => {
            setUser(null);
            // success
            Swal.fire({
              title: "LogOut Successful!",
              theme: "auto",
              text: "You successfully loged out. You can login again by clicking 'login now' button",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error.message);
            Swal.fire({
              title: "Oops..",
              theme: "auto",
              text: "Somethings went wrong. please try again later",
              icon: "error",
            });
          });
      }
    });

    // sweetalert2 end
  };

  const linkClass = ({ isActive }) =>
    `hover:text-secondary/50 ${
      isActive ? "text-secondary border-b-2 border-w-[2px]" : "text-gray-500"
    }`;

  const list = (
    <>
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
      <li>
        <NavLink className={linkClass} to="/add-export">
          Add Product
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar shadow-sm">
        <div className="navbar max-w-7xl mx-auto px-4">
          <div className="navbar-start">
            {/* ================= */}

            <div className="drawer w-fit">
              <input
                id="my-drawer-3"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-3" className="lg:hidden p-2 mr-2">
                  <HiMenuAlt2 size={20} />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <ul className="space-y-3">{list}</ul>
                </ul>
              </div>
            </div>

            {/* ================= */}

            <Link className="text-xl flex items-center gap-2">
              {/* <img className='h-5.5' src={logo} alt="logo" /> */}
              <FiBox className="hidden sm:flex text-primary" />
              <h1 className="font-bold">
                Import <span className="text-primary">Export</span> Hub
              </h1>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className=" flex flex-col lg:flex-row items-center gap-5 font-medium ">
              {list}
            </ul>
          </div>
          <div className="navbar-end">
            {/* =========== theme ============ */}

            <div className="hover:bg-primary/10 transition p-1 rounded-full mr-2">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="theme-controller"
                  onChange={handleTheme}
                />
                {/* sun icon */}
                <svg
                  className="swap-on h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                {/* moon icon */}
                <svg
                  className="swap-off h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>

            {/* ======================= */}
            {loading ? (
              <span className="loading loading-spinner text-primary"></span>
            ) : user ? (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={handleLogOut}
                  className="btn btn-soft btn-primary rounded-full"
                >
                  Log out
                </button>
                <NavLink to="/profile">
                  <img
                    src={user.photoURL}
                    alt="profile"
                    title={user?.displayName}
                    className="h-9 w-9 bg-black/10 rounded-full object-cover border border-gray-500"
                  />
                </NavLink>
              </div>
            ) : (
              <NavLink to="/auth/login">
                <button className="btn btn-primary rounded-full">
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
