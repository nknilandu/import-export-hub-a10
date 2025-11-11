import { IoMdAdd } from "react-icons/io";
import ExportProductCard from "../../components/ExportProductCard/ExportProductCard";
import { NavLink } from "react-router";



const MyExports = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
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
        <NavLink to='/add-export'>
          <button className="btn btn-primary rounded-md"><IoMdAdd size={18}/> Add Export/Product</button>
        </NavLink>
        
        {/* ================== */}
      </div>
      {/* ===== grid ======== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-hidden my-5 pb-9 mt-10">
            <ExportProductCard></ExportProductCard>
            <ExportProductCard></ExportProductCard>
            <ExportProductCard></ExportProductCard>
            <ExportProductCard></ExportProductCard>
            <ExportProductCard></ExportProductCard>
            <ExportProductCard></ExportProductCard>
        </div>
    </div>
  );
};

export default MyExports;
