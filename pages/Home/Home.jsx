import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router";
import { IoMdArrowRoundForward } from "react-icons/io";
import { TbLeaf2 } from "react-icons/tb";
import { MdAdd } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { RiGlobalLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import ExportProductCard from "../../components/ExportProductCard/ExportProductCard";
import LoadingComponent from "../Loading/LoadingComponent";
import NoDataFound from "../../components/NoDataFound/NoDataFound";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [fallback, setFallback] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3031/latest-products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFallback(false);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>

      <div className="max-w-7xl mx-auto px-4">
        {/* title */}
        <div className="flex items-center justify-between mb-8 my-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Latest Products
            </h2>
            <p className="text-muted-foreground">
              Discover the newest additions to our global marketplace
            </p>
          </div>
          <Link to="/all-products">
            <button className="btn btn-outline btn-primary rounded-full">
              {" "}
              View All Products <IoMdArrowRoundForward size={18} />
            </button>
          </Link>
        </div>
        {/* latest product data */}

        {fallback ? (
          <LoadingComponent></LoadingComponent>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-hidden my-5 pb-9">
            {products.map((item) => (
              <ProductCard key={item._id} item={item}></ProductCard>
            ))}
          </div>
        ) : (
          <NoDataFound></NoDataFound>
        )}

        {/* ready to start */}
        <div className="bg-base-300 gap-3 rounded-xl flex flex-col justify-center items-center py-10 px-5 my-15">
          <TbLeaf2 size={60} className="text-primary" />
          <div className="text-center my-2">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to Start Trading?
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-2">
              Join thousands of businesses already using our platform to expand
              their global reach. Start importing premium products or export
              your own to international markets.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center max-w-sm my-2 ">
            <button className="rounded-lg sm:flex-1 w-full btn btn-primary">
              <FiSearch size={18} />
              Brouse Product
            </button>
            <button className="rounded-lg sm:flex-1 w-full btn btn-outline btn-primary">
              <MdAdd size={18} />
              Add your product
            </button>
          </div>
        </div>
        {/* Why Choose Import Export Hub? */}
        <div>
          <div className="text-center my-2">
            <h2 className="text-3xl font-bold text-foreground">
              Why Choose Import Export Hub?
            </h2>
            <p className="text-muted-foreground mt-2 text-center">
              Built for international traders with security, reliability, and
              growth in mind
            </p>
          </div>
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* card 1 */}
            <div className="flex flex-col justify-center items-center gap-2 py-8 px-4 bg-base-100 w-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <LuShieldCheck className="text-secondary" size={30} />
              <h4 className="font-bold text-xl text-center">
                Secure Transactions
              </h4>
              <p className="text-center text-sm">
                SSL encrypted payments and secure data handling for all
                transactions
              </p>
            </div>
            {/* card 2 */}
            <div className="flex flex-col justify-center items-center gap-2 py-8 px-4 bg-base-100 w-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <LuUsers className="text-secondary" size={30} />
              <h4 className="font-bold text-xl text-center">
                Verified Suppliers
              </h4>
              <p className="text-center text-sm">
                All exporters are verified through our comprehensive
                authentication process
              </p>
            </div>
            {/* card 3 */}
            <div className="flex flex-col justify-center items-center gap-2 py-8 px-4 bg-base-100 w-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <RiGlobalLine className="text-secondary" size={30} />
              <h4 className="font-bold text-xl text-center">Global Network</h4>
              <p className="text-center text-sm">
                Connect with trusted partners across 150+ countries worldwide
              </p>
            </div>
            {/* card 4 */}
            <div className="flex flex-col justify-center items-center gap-2 py-8 px-4 bg-base-100 w-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <MdOutlineWatchLater className="text-secondary" size={30} />
              <h4 className="font-bold text-xl text-center">24/7 Support</h4>
              <p className="text-center text-sm">
                Round-the-clock customer support for seamless trading experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
