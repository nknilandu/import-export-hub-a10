import { useContext, useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthProvider";
import { NavLink } from "react-router";
import LoadingComponent from "../Loading/LoadingComponent";
import NoDataFound from "../../components/NoDataFound/NoDataFound";

const MyImports = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  // console.log(user.accessToken)
  useEffect(() => {
    fetch(`https://import-export-hub-api-server.vercel.app/import-product?email=${user.email}`, {
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

  // console.log(products);

  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
      <title>My Import | Import Export Hub</title>
      <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col sm:flex-row sm:items-center justify-between items-start gap-3 ">
        <div className="">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            My Imports
          </h2>
          <p className="text-muted-foreground">
            Track and manage your imported products from around the world
          </p>
        </div>
      </div>
      {/* =================== */}

      <div data-aos="fade-up" data-aos-delay="100" className=" overflow-x-auto my-10">
        {loading ? (
          <LoadingComponent></LoadingComponent>
        ) : (
          products.length>0 ? (
            <div  className="min-h-[60vh]">
              <table  className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Value</th>
                <th>Import Date</th>
                <th>Rating</th>
               
              </tr>
            </thead>

            {/* body */}
            <tbody>
              {
                // =========================
                products.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.productImage}
                              alt={item.productName}
                            />
                          </div>
                        </div>
                        <div className="font-semibold">{item.productName}</div>
                      </div>
                    </td>
                    <td>{item.takeQuantity}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.totalPrice}</td>
                    <td>
                      {new Date(item.importDate).toLocaleDateString("en-CA")}
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <FaRegStar className="text-yellow-500" /> {item.rating}
                      </div>
                    </td>
                    <td>
                      <NavLink to={`/product-details/${item.productId}`}>
                        <button className="btn btn-ghost btn-xs underline text-primary">
                          Details
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                ))
                // ======================
              }
            </tbody>
          </table>
            </div>
          ) : (
            <NoDataFound></NoDataFound>
          )
        )}
      </div>

      {/* =================== */}
    </div>
  );
};

export default MyImports;
