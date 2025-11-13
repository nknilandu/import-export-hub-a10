import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { NavLink } from "react-router";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuEye } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ExportProductCard = ({ item, setProducts, products }) => {
  const { _id, productName, productImage, price, rating, quantity, dateAdded } =
    item;
  const formattedDate = new Date(dateAdded).toLocaleDateString("en-CA");

  const { user } = useContext(AuthContext);

  const hanldeDelete = (id) => {
    Swal.fire({
      title: "Are you sure want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      theme: "auto",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // ======================= delete user
        // console.log(id)
        fetch(`https://import-export-hub-api-server.vercel.app/my-products/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
            email: user.email,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.deletedCount) {
              // success
              Swal.fire({
                theme: "auto",
                title: "Successfully Product Deleted!",
                icon: "success",
                draggable: false,
              });
              // ============ update ui
              const filterProduct = products.filter((item) => item._id !== id);
              setProducts(filterProduct);
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
        // ===========
      }
    });
  };

  return (
    <div className="bg-base-100 w-full rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col">
      <div className="w-full h-52 bg-base-300 overflow-hidden">
        <img
          src={productImage}
          alt={productName}
          className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{productName}</h3>

        <div className="flex gap-1 items-center text-yellow-400">
          <FaStar size={16} />
          <FaStar size={16} />
          <FaStar size={16} />
          <FaStar size={16} />
          <FaRegStar size={16} />
          <span className="text-base-content/50">{rating} (ratings)</span>
        </div>

        {/* =================== */}

        <div className="flex gap-2 flex-col">
          <div className="flex justify-between">
            <p>price: </p>
            <h3 className="text-lg text-primary font-semibold">$ {price}</h3>
          </div>
          <div className="flex justify-between">
            <p>Available: </p>
            <h3 className="text-md text-green-500">{quantity} unit</h3>
          </div>
          <div className="flex justify-between">
            <p>Added: </p>
            <h3 className="text-base-content/50">{formattedDate}</h3>
          </div>
        </div>

        {/* button */}
        <div className=" h-full w-full mt-2 flex items-end">
          <div className="flex gap-3 w-full">
            {/* edit */}
            <NavLink to={`/update-product/${_id}`} className="flex-1">
              <button className="btn btn-soft btn-warning w-full rounded-md">
                <FiEdit size={18} /> Edit
              </button>
            </NavLink>
            {/* delete */}

            <div className="flex-1">
              <button
                onClick={() => {
                  hanldeDelete(_id);
                }}
                className="btn btn-soft btn-error w-full rounded-md"
              >
                <LuTrash2 size={18} /> Delete
              </button>
            </div>
          </div>
        </div>
        {/* ================= */}

        {/* ================= */}
      </div>
    </div>
  );
};

export default ExportProductCard;
