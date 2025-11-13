import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import { MdFileDownloadDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import LoadingPage from "../Loading/LoadingPage";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateExport = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://import-export-hub-api-server.vercel.app/product-details/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id, user]);

  const {
    _id,
    productName,
    productImage,
    price,
    originCountry,
    rating,
    quantity,
    description,
  } = product || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const productName = e.target.name.value;
    const productImage = e.target.image.value;
    const price = Number(e.target.price.value);
    const originCountry = e.target.origin.value;
    const rating = Number(e.target.rating.value);
    const quantity = Number(e.target.quantity.value);
    const description = e.target.description.value;

    // console.log(productName, productImage, price, originCountry, rating, quantity, dateAdded)

    const updateProduct = {
      productName,
      productImage,
      price,
      originCountry,
      rating,
      quantity,
      description,
    };

    fetch(`https://import-export-hub-api-server.vercel.app/update-product/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
        email: user.email,
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.modifiedCount) {
          // success
          Swal.fire({
            theme: "auto",
            title: "Successfully Product Updated!",
            icon: "success",
            draggable: false,
          });
        } else {
          // error
          Swal.fire({
            theme: "auto",
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div data-aos="fade-up" data-aos-delay="100" className="min-h-screen w-full flex items-center p-4 bg-base-200">
      <title>Update Product | Import Export Hub</title>
      <div className="bg-base-100 rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold mb-2">
            Update Your Product/Export
          </h1>
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
                defaultValue={productName}
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
                defaultValue={productImage}
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-between gap-2">
              {/* Price (USD) */}
              <div>
                <label className="block label mb-1">Price (USD)</label>
                <input
                  type="number"
                  name="price"
                  placeholder="00.0"
                  step={0.01}
                  defaultValue={price}
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
                  defaultValue={originCountry}
                  required
                  className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              {/* Available Quantity */}
              <div>
                <label className="block label mb-1">Available Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="0"
                  defaultValue={quantity}
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
                  placeholder="0"
                  max={5}
                  step={0.1}
                  defaultValue={rating}
                  required
                  className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
            </div>
            {/* description */}
            <div>
              <label className="block label mb-1">Description</label>
              <textarea
                name="description"
                placeholder="Write your product details here"
                rows={5}
                maxLength={2000} // limits to 2000 characters
                defaultValue={description}
                required
                className="textarea text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
          </div>

          {/* button */}
          <div className=" h-full w-full mt-8 flex items-end">
            <div className="flex gap-3 w-full">
              {/* cancel */}
              <NavLink to="/my-exports" className="flex-1">
                <button className="btn btn-outline btn-primary w-full rounded-md">
                  <RxCross2 size={18} /> cancel
                </button>
              </NavLink>
              {/* update */}
              <div className="flex-1">
                <button className="btn  btn-primary w-full rounded-md">
                  <MdFileDownloadDone size={18} /> Update
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

export default UpdateExport;
