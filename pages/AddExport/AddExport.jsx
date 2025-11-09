import React from 'react';
import { NavLink } from 'react-router';
import { MdFileDownloadDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


const AddExport = () => {


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="min-h-screen w-full flex items-center px-4 bg-base-200">
      <title>Add Product</title>
      <div className="bg-base-100 rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold mb-2">Add Your Product/Export</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2 ">
          <div className="space-y-2">
            {/* name Field */}
            <div>
              <label className="block label mb-1">Product name</label>
              <input
                type="text"
                name="name"
                placeholder="your product name"
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            {/* image */}
            <div>
              <label className="block label mb-1">Image URL</label>
              <input
                type="text"
                name="image"
                placeholder="image url"
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            {/* Price (USD) */}
            <div>
              <label className="block label mb-1">Price (USD)</label>
              <input
                type="number"
                name="price"
                placeholder="00.0"
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            {/* Origin Country */}
            <div>
              <label className="block label mb-1">Origin Country</label>
              <input
                type="text"
                name="origin"
                placeholder="country"
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            {/* Rating */}
            <div>
              <label className="block label mb-1">Rating</label>
              <input
                type="number"
                name="rating"
                placeholder="5"
                max={5} 
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            {/* Available Quantity */}
            <div>
              <label className="block label mb-1">Available Quantity</label>
              <input
                type="number"
                name="quantity"
                placeholder="0"
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>

            
          </div>
          


          {/* button */}
        <div className=" h-full w-full mt-8 flex items-end">
          <div className="flex gap-3 w-full">
            {/* cancel */}
            <NavLink
              to='/my-exports'
              className="flex-1"
            >
              <button className="btn btn-outline btn-primary w-full rounded-md">
                <RxCross2  size={18} /> cancel
              </button>
            </NavLink>
            {/* delete */}
            <div
              className="flex-1"
            >
              <button className="btn  btn-primary w-full rounded-md">
                <MdFileDownloadDone  size={18} /> Add Product
              </button>
            </div>
          </div>
        </div>
        {/* ================= */}

        </form>
      </div>
    </div>
    );
};

export default AddExport;