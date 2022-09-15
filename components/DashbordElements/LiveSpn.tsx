import { useRouter } from "next/router";
import React from "react";
import DahbordHeader from "./DahbordHeader";
import suppliersList from "../../utils/suppliers";
function LiveSpn() {
  const router = useRouter();
  return (
    <div>
      <DahbordHeader title="Live Spn Data" />
      <div className="mt-9">
        <button onClick={() => router.push("/dashbord")}>
          <svg
            width="52"
            height="52"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="61"
              height="61"
              rx="6.5"
              stroke="#B1B1B1"
            />
            <path
              d="M20 32.5502C18.6667 31.7804 18.6667 29.8559 20 29.0861L29.2727 23.7325C30.6061 22.9627 32.2727 23.925 32.2727 25.4646V36.1718C32.2727 37.7114 30.6061 38.6736 29.2727 37.9038L20 32.5502Z"
              fill="#B1B1B1"
            />
            <path
              d="M34.8182 31H45.0001"
              stroke="#B1B1B1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="flex mt-6 space-x-7">
          <select
            name="Type of supplier"
            className="w-full  my-2 smooth-transition min-h-[50px] rounded-lg font-poppins text-lg cursor-pointer hover:shadow-lg shadow-md border-0"
          >
            <option value="">Type of supplier</option>

            <option value="Manufacturer">Manufacturer</option>
            <option value="Distributer">Distributer</option>
          </select>

          <select
            name="Type of supplier"
            className="w-full mx-5 my-2 smooth-transition min-h-[50px] rounded-lg font-poppins text-lg cursor-pointer hover:shadow-lg shadow-md border-0"
          >
            <option value="">Select supplier</option>
            {suppliersList.manufacturers.map((manufacturer, i) => (
              <option key={i} value="Manufacturer">
                {manufacturer}
              </option>
            ))}
          </select>
        </div>
        <div className="flex space-x-9 mt-7">
          <input
            placeholder="Enter SPN Number"
            className="bg-white outline-0 text-[#0E8D90] font-poppins text-lg w-full p-3 rounded-md"
          />
          <button className="sidebar-color py-3 px-14 rounded-lg text-white font-poppins text-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default LiveSpn;
