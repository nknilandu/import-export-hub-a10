import React, { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { IoWarningOutline } from "react-icons/io5";

import Swal from "sweetalert2";

export default function Profile() {
  const { user, setUser, updateUser } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const avater = e.target.avater.value;

    updateUser({
      displayName: name,
      photoURL: avater,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: avater });
        // success
        Swal.fire({
          theme: "auto",
          title: "Successfully Profile Updated!",
          icon: "success",
          draggable: false,
        });
      })
      .catch((error) => {
        // error
        Swal.fire({
          theme: "auto",
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          error,
        });
      });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="min-h-[80vh] flex items-center justify-center overflow-hidden py-5"
    >
      <title>User Profile | Import Export Hub</title>
      <div className=" bg-base-100 rounded-2xl shadow-lg max-w-lg py-8 px-5 mx-4">
        <div className="flex items-center justify-center gap-4">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring-2 ring-offset-2">
              <img src={user?.photoURL} alt="icon" />
            </div>
          </div>
          {/* ==================================== */}
          <div>
            <h1 className="text-2xl font-semibold text-base-content">{user?.displayName}</h1>
            <p className="text-base-content/70">{user?.email}</p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-5">
          <form onSubmit={handleSubmit}>
            <div className="text-warning bg-warning/10 px-3 mb-3 rounded-lg flex gap-3 justify-center items-center">
            <IoWarningOutline size={22}/>
                <p className="py-2 text-xs">
              You can change your photoURL and username. To change your username
              and photoURL, need to click 'Save change'
            </p>
            </div>

            <div>
              <label className="block label mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="enter your name here"
                defaultValue={user.displayName}
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            <div className="mt-3">
              <label className="block label mb-1">Photo link</label>
              <input
                type="text"
                name="avater"
                placeholder="photo link (url)"
                defaultValue={user.photoURL}
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>

            <button className="w-full p-2 mt-5 bg-primary hover:bg-primary/50 text-white font-md rounded-lg transition-colors">
              Save change
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
