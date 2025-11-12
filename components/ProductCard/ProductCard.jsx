import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { NavLink } from "react-router";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuEye } from "react-icons/lu";

const ProductCard = ({ item }) => {
  const {
    _id,
    productName,
    productImage,
    price,
    originCountry,
    rating,
    quantity,
    description
  } = item;

  // console.log(item);

  return (
    <div className="bg-base-100 w-full rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col">
      <div className="w-full h-56 bg-base-300 overflow-hidden">
        <img
          src={productImage}
          alt={productName}
          className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col gap-2">
        <div className="w-fit text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex gap-1 items-center">
          <HiOutlineLocationMarker />

          <p>{originCountry}</p>
        </div>
        <h3 className="text-xl font-semibold line-clamp-1">{productName}</h3>
        <p className=" text-sm line-clamp-3">{description}</p>

        <div className="flex gap-1 items-center text-yellow-400">
          <FaStar size={16} />
          <FaStar size={16} />
          <FaStar size={16} />
          <FaStar size={16} />
          <FaRegStar size={16} />
          <span className="text-base-content/50">{rating} (ratings)</span>
        </div>

        <div className="flex justify-start items-center gap-4">
          <h2 className="flex-1 text-3xl font-bold">
            ${price}
            <span className="text-base font-normal text-base-content/70"> price</span>
          </h2>
          <div className="flex items-center gap-1">
            <FiBox size={18} />
            <span className="font-bold text-xl">
              {quantity} <span className="text-xs font-bold text-base-content/70">in Stock</span>
            </span>
          </div>
        </div>

        {/* button */}
          <NavLink to={`/product-details/${_id}`} className="w-full">
            <button className="btn btn-secondary w-full rounded-md">
              <LuEye size={18} /> See Details
            </button>
          </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;
