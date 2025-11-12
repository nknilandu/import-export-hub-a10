// import React, { useEffect, useState } from "react";
// import { FaRegStar } from "react-icons/fa6";
// import { FaStar } from "react-icons/fa6";
// import { SlLocationPin } from "react-icons/sl";
// import { FiBox } from "react-icons/fi";
// import { LuShield } from "react-icons/lu";
// import { FiTruck } from "react-icons/fi";
// import { HiOutlineShoppingCart } from "react-icons/hi";
// import { useParams } from "react-router";
// import LoadingPage from "../Loading/LoadingPage";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   // const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`http://localhost:3031/product-details/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         setLoading(false);
//       });
//   }, [id]);

//   // console.log(product)


//   if (product) {
//     return <LoadingPage></LoadingPage>;
//   }


//   const {
//     // _id,
//     productName,
//     productImage,
//     price,
//     originCountry,
//     rating,
//     quantity,
//     dateAdded,
//     description,
//     userName,
//     userEmail,
//     userPhotoURL,
//   } = product || {};

//   const [error, setError] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);

  

//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="flex flex-col lg:flex-row gap-8 py-10">
//         <div className="flex-1 bg-base-300 rounded-2xl overflow-hidden h-[70vh] ">
//           {/* image */}
//           <img
//             src={productImage}
//             alt={productName}
//             className="object-cover h-full w-full"
//           />
//         </div>
//         <div className="flex-1">
//           <div>
//             <h2 className="text-3xl font-bold text-foreground mb-2">
//               Latest Products
//             </h2>
//             <p className="line-clamp-2 text-muted-foreground text-base-content/70">
//               {description}
//             </p>
//           </div>
//           <div className="flex items-end gap-2 mt-4">
//             <h1 className="text-5xl font-bold text-primary">$ {price}</h1>
//             <p className="text-xl">per unit</p>
//           </div>
//           {/* ========== */}
//           <div className="flex gap-1 items-center text-yellow-500 mt-3">
//             <FaStar size={16} />
//             <FaStar size={16} />
//             <FaStar size={16} />
//             <FaStar size={16} />
//             <FaRegStar size={16} />
//             <span className="text-base-content/70">{rating} (ratings)</span>
//           </div>
//           {/* ========== */}
//           <div className="bg-base-300 rounded-xl flex flex-col sm:flex-row p-3 my-6 gap-3">
//             <div className="flex-1">
//               <div className="flex flex-col gap-3">
//                 {/* item 1 */}
//                 <div className="flex-1 flex items-center gap-3">
//                   <SlLocationPin className="text-secondary" size={18} />
//                   <div>
//                     <h4 className="text-sm">Origin Country</h4>
//                     <p className="font-semibold">{originCountry}</p>
//                   </div>
//                 </div>
//                 {/* item 2 */}
//                 <div className="flex-1 flex items-center gap-3">
//                   <FiTruck className="text-secondary" size={18} />
//                   <div>
//                     <h4 className="text-sm">Shipping</h4>
//                     <p className="font-semibold">Worldwide Available</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* another */}
//             <div className="flex-1">
//               <div className="flex flex-col gap-3">
//                 {/* item 3 */}
//                 <div className="flex-1 flex items-center gap-3">
//                   <FiBox className="text-secondary" size={18} />
//                   <div>
//                     <h4 className="text-sm">Available Quantity</h4>
//                     <p className="font-semibold">{quantity} units</p>
//                   </div>
//                 </div>
//                 {/* item 4 */}
//                 <div className="flex-1 flex items-center gap-3">
//                   <LuShield className="text-secondary" size={18} />
//                   <div>
//                     <h4 className="text-sm">Quality Assurance</h4>
//                     <p className="font-semibold">ISO Certified</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ========== */}
//           <div>
//             <h2 className="text-xl font-bold mb-2">Product Description</h2>
//             <p className="text-base-content/70">{description}</p>
//           </div>
//           <div className="divider my-4"></div>
//           {/* ========== */}
//           <div>
//             <h2 className="text-xl font-bold my-4">Additional Information</h2>
//             <div className="flex flex-col sm:flex-row gap-2">
//               <div className="flex-1 flex flex-col gap-2">
//                 <p>
//                   <span className="font-semibold">Product Code: </span>
//                   {id}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Minimum Order: </span>1-10
//                   unit
//                 </p>
//               </div>
//               <div className="flex-1 flex flex-col gap-2">
//                 <p>
//                   <span className="font-semibold">Category: </span>Premium Goods
//                 </p>
//                 <p>
//                   <span className="font-semibold">Lead Time: </span>5-7 business
//                   days
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* ========== */}
//           <button
//             onClick={() =>
//               document.getElementById("import_product_modal").showModal()
//             }
//             className="btn btn-active btn-primary w-full rounded-lg mt-5"
//           >
//             <HiOutlineShoppingCart size={18} /> Import Now
//           </button>
//           {/* ========== */}
//         </div>
//       </div>

//       {/* =========== modal ============== */}
//       <dialog id="import_product_modal" className="modal">
//         <div className="modal-box w-full max-w-md p-6 relative">
//           {/* Close button */}
//           <form method="dialog" className="absolute right-2 top-2">
//             <button className="btn btn-sm btn-circle btn-ghost">✕</button>
//           </form>

//           {/* Header */}
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-semibold text-foreground">
//               Import Product
//             </h2>
//           </div>

//           {/* Product Summary */}
//           <div className="flex items-center space-x-4 p-4 bg-base-200 rounded-lg mb-6">
//             <div className="w-16 h-16 bg-base-100 rounded-lg overflow-hidden flex-shrink-0">
//               <img className="w-full h-full object-cover" />
//             </div>
//             <div className="flex-1 min-w-0">
//               <h3 className="font-medium text-foreground truncate">
//                 {product?.name}
//               </h3>
//               <p className="text-sm text-gray-500">$ 20.45 per unit</p>
//               <p className="text-sm text-gray-500">
//                 {product?.availableQuantity?.toLocaleString()} units available
//               </p>
//             </div>
//           </div>

//           {/* Quantity Input */}
//           <div className="mb-6">
//             <label className="label">
//               <span className="label-text mb-2">Quantity</span>
//             </label>
//             <input
//               type="number"
//               min="1"
//               max={product?.availableQuantity}
//               //   value={}
//               //   onChange={handleQuantityChange}
//               placeholder="Enter quantity"
//               className={`input input-bordered w-full ${
//                 error ? "input-error" : ""
//               }`}
//             />
//             {error && (
//               <span className="text-red-500 text-sm mt-1">{error}</span>
//             )}
//             <p className="text-sm text-gray-500 mt-1">
//               Available: {product?.availableQuantity?.toLocaleString()} units
//             </p>
//           </div>

//           {/* Price Summary */}
//           <div className="bg-base-200 rounded-lg p-4 mb-6">
//             <div className="flex justify-between items-center mb-3">
//               <span className="text-gray-500">Unit Price:</span>
//               <span className="text-foreground">
//                 {/* {formatPrice(product?.price)} */}
//               </span>
//             </div>
//             <div className="flex justify-between items-center mb-3">
//               <span className="text-gray-500">Quantity:</span>
//               <span className="text-foreground">
//                 {/* {quantity?.toLocaleString()} */}
//               </span>
//             </div>
//             <div className="border-t border-gray-300 pt-2">
//               <div className="flex justify-between items-center">
//                 <span className="font-semibold text-foreground">
//                   Total Price:
//                 </span>
//                 <span className="font-semibold text-primary text-lg">
//                   {/* {formatPrice(totalPrice)} */}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex space-x-3">
//             <button
//               className="btn btn-outline flex-1 rounded-lg"
//               onClick={() =>
//                 document.getElementById("import_product_modal").close()
//               }
//               //   disabled={isProcessing}
//             >
//               Cancel
//             </button>
//             <button
//               className="btn btn-primary flex-1 rounded-lg"
//               //   onClick={handleImport}
//               //   disabled={
//               //     !!error ||
//               //     quantity < 1 ||
//               //     quantity > product?.availableQuantity ||
//               //     isProcessing
//               //   }
//             >
//               {isProcessing ? "Processing..." : "Import Now"}
//             </button>
//           </div>
//         </div>
//       </dialog>
//       {/* =========== modal ============== */}
//     </div>
//   );
// };

// export default ProductDetails;
