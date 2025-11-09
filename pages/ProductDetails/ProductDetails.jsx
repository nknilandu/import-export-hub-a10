import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { FiBox } from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import { FiTruck } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";


const ProductDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-8 py-10">
        <div className="flex-1 bg-base-300 rounded-2xl overflow-hidden h-[70vh] ">
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1524350876685-274059332603"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Latest Products
            </h2>
            <p className="text-muted-foreground text-base-content/70">
              Discover the newest additions to our global marketplace
            </p>
          </div>
          <div className="flex items-end gap-2 mt-4">
            <h1 className="text-5xl font-bold text-primary">$89.99</h1>
            <p className="text-xl">per unit</p>
          </div>
          {/* ========== */}
          <div className="flex gap-1 items-center text-yellow-500 mt-3">
            <FaStar size={16} />
            <FaStar size={16} />
            <FaStar size={16} />
            <FaStar size={16} />
            <FaRegStar size={16} />
            <span className="text-base-content/70">4.9 (ratings)</span>
          </div>
          {/* ========== */}
          <div className="bg-base-300 rounded-xl flex flex-col sm:flex-row p-3 my-6 gap-3">
            <div className="flex-1">
              <div className="flex flex-col gap-3">
                {/* item 1 */}
                <div className="flex-1 flex items-center gap-3">
                  <SlLocationPin className="text-secondary" size={18} />
                  <div>
                    <h4 className="text-sm">Origin Country</h4>
                    <p className="font-semibold">Colombia</p>
                  </div>
                </div>
                {/* item 2 */}
                <div className="flex-1 flex items-center gap-3">
                  <FiTruck className="text-secondary" size={18} />
                  <div>
                    <h4 className="text-sm">Shipping</h4>
                    <p className="font-semibold">Worldwide Available</p>
                  </div>
                </div>
              </div>
            </div>
            {/* another */}
            <div className="flex-1">
              <div className="flex flex-col gap-3">
                {/* item 3 */}
                <div className="flex-1 flex items-center gap-3">
                  <FiBox className="text-secondary" size={18} />
                  <div>
                    <h4 className="text-sm">Available Quantity</h4>
                    <p className="font-semibold">500 units</p>
                  </div>
                </div>
                {/* item 4 */}
                <div className="flex-1 flex items-center gap-3">
                  <LuShield className="text-secondary" size={18} />
                  <div>
                    <h4 className="text-sm">Quality Assurance</h4>
                    <p className="font-semibold">ISO Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========== */}
          <div>
            <h2 className="text-xl font-bold mb-2">Product Description</h2>
            <p className="text-base-content/70">
              Experience the rich, full-bodied flavor of our premium organic
              coffee beans, carefully sourced from the high-altitude regions of
              Colombia. These single-origin beans are grown using sustainable
              farming practices and are certified organic, ensuring you get the
              purest coffee experience. Our coffee beans are hand-picked at peak
              ripeness and processed using traditional methods that preserve
              their natural oils and complex flavor profiles. The result is a
              coffee with notes of chocolate, caramel, and a hint of citrus that
              will elevate your morning routine. Our premium quality products
              are sourced directly from certified suppliers in Colombia,
              ensuring the highest standards of quality and authenticity. Each
              batch undergoes rigorous quality control testing to meet
              international export standards. Perfect for businesses looking to
              import high-quality products for retail or wholesale distribution.
              Bulk quantities available with competitive pricing and flexible
              shipping options to destinations worldwide.
            </p>
          </div>
           <div className="divider my-4"></div>
          {/* ========== */}
          <div>
            <h2 className="text-xl font-bold my-4">Additional Information</h2>
            <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex flex-col gap-2">
                    <p><span className="font-semibold">Product Code: </span>PRD-000001</p>
                    <p><span className="font-semibold">Minimum Order: </span>1 unit</p>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <p><span className="font-semibold">Category: </span>Premium Goods</p>
                    <p><span className="font-semibold">Lead Time: </span>5-7 business days</p>
                    
                </div>
            </div>
          </div>
          {/* ========== */}
          <button className="btn btn-active btn-primary w-full rounded-lg mt-5"><HiOutlineShoppingCart size={18}/> Import Now</button>
          {/* ========== */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
