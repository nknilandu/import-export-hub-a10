import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { NavLink } from "react-router";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuEye } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";


const ExportProductCard = () => {
  const itemData = {
    image: "https://example.com/images/service1.jpg",
    serviceName: "Premium Car Wash",
    price: 49.99,
    rating: 4.7,
    slotsAvailable: 12,
    description:
      "A complete premium car wash service including interior cleaning, waxing, and tire shine.",
    category: "Automotive",
    serviceId: "svc12345",
  };

  const {
    image,
    serviceName,
    price,
    rating,
    slotsAvailable,
    description,
    category,
    serviceId,
  } = itemData;

  return (
    <div className="bg-base-100 w-full rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col">
      <div className="w-full h-52 bg-base-300 overflow-hidden">
        <img
          src={image}
          alt={serviceName}
          className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{serviceName}</h3>

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
            <h3 className="text-lg text-primary font-semibold">$24.99</h3>
          </div>
          <div className="flex justify-between">
            <p>Available: </p>
            <h3 className="text-md text-green-500">50 unit</h3>
          </div>
          <div className="flex justify-between">
            <p>Added: </p>
            <h3 className="text-base-content/50">10/15/2024</h3>
          </div>
        </div>

        {/* button */}
        <div className=" h-full w-full mt-2 flex items-end">
          <div className="flex gap-3 w-full">
            {/* edit */}
            <NavLink
              to={`/serviceDetails/${serviceId}`}
              className="flex-1"
            >
              <button className="btn btn-outline btn-warning w-full rounded-md">
                <FiEdit size={18} /> Edit
              </button>
            </NavLink>
            {/* delete */}
            <NavLink
              to={`/serviceDetails/${serviceId}`}
              className="flex-1"
            >
              <button className="btn btn-outline btn-error w-full rounded-md">
                <LuTrash2 size={18} /> Delete
              </button>
            </NavLink>
          </div>
        </div>
        {/* ================= */}

        {/* ================= */}
      </div>
    </div>
  );
};

export default ExportProductCard;
