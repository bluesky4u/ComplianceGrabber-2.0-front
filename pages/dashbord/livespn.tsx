import React from "react";
import LiveSpn from "../../components/DashbordElements/LiveSpn";
import DashbordSideBar from "../../components/DashbordSideBar";
import Footer from "../../components/Footer";

function livespn() {
  return (
    <>
      <div className="relative flex overflow-hidden">
        <DashbordSideBar />

        <div className="p-5 w-full bg-gray-100 ">
          <LiveSpn />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default livespn;
