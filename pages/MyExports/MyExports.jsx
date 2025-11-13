import { IoMdAdd } from "react-icons/io";
import ExportProductCard from "../../components/ExportProductCard/ExportProductCard";
import { NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import NoDataFound from "../../components/NoDataFound/NoDataFound";
import LoadingComponent from "../Loading/LoadingComponent";
import { MdOutlineFileDownload } from "react-icons/md";
import toast from "react-hot-toast";
import { unparse } from "papaparse";

const MyExports = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://import-export-hub-api-server.vercel.app/my-products?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [user]);

  // console.log(products)

  const handleDownloadCsv = () => {
    if (products.length > 0) {
      const csv = unparse(products);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "my_exports.csv";
      link.click();
    } else {
      // make a toast
      toast("Product list are empty or couldn't load", {
        icon: "⚠️ ",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
      <title>My Export | Import Export Hub</title>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between items-start gap-3 ">
        <div className="">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            My Export Products
          </h2>
          <p className="text-muted-foreground">
            Manage your export inventory and download business data
          </p>
        </div>
        {/* add emports */}
        <div className="flex gap-2 flex-col md:flex-row w-full sm:w-fit">
          <button
            onClick={handleDownloadCsv}
            className="btn btn-soft btn-secondary rounded-md "
          >
            <MdOutlineFileDownload size={18} /> Download CSV
          </button>
          {/* add emports */}
          <NavLink to="/add-export">
            <button className="btn btn-secondary rounded-md w-full  sm:w-fit">
              <IoMdAdd size={18} /> Add Export/Product
            </button>
          </NavLink>
        </div>

        {/* ================== */}
      </div>

      {loading ? (
        <LoadingComponent></LoadingComponent>
      ) : products.length > 0 ? (
        //  ===== grid ========
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-hidden my-5 pb-9 mt-10">
          {products.map((item) => (
            <ExportProductCard
              key={item._id}
              item={item}
              products={products}
              setProducts={setProducts}
            ></ExportProductCard>
          ))}
        </div>
      ) : (
        <NoDataFound></NoDataFound>
      )}
    </div>
  );
};

export default MyExports;
