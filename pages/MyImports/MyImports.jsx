import { FaRegStar } from "react-icons/fa6";


const tableData = [
  {
    id: 1,
    name: "Premium Organic Coffee Beans",
    img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    quantity: 50,
    unitPrice: 24.99,
    totalValue: 1249.5,
    importDate: "Nov 5, 2024",
    rating: 4.8,
  },
];


const MyImports = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between items-start gap-3 ">
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

       <div className="overflow-x-auto h-[60vh] my-10">
      <table className="table">
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
            <th></th> {/* Details button column */}
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {tableData.map((item, index) => (
            <tr key={item.id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item.img} alt={item.name} />
                    </div>
                  </div>
                  <div className="font-semibold">{item.name}</div>
                </div>
              </td>
              <td>{item.quantity}</td>
              <td>${item.unitPrice.toFixed(2)}</td>
              <td>${item.totalValue.toFixed(2)}</td>
              <td>{item.importDate}</td>
              <td><div className="flex items-center gap-2"><FaRegStar /> {item.rating}</div></td>
              <td>
                <button className="btn btn-ghost btn-xs underline text-primary">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


      {/* =================== */}
    </div>
  );
};

export default MyImports;
