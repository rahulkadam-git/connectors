import React from "react";
import Sidebar from "../Component/Sidebar/Sidebar";
import Topbar from "../Component/Topbar/Topbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[18%] lg:w-[18%] md:w-[8%] xl:w-[14%] bg-white">
        <Sidebar />
      </div>
      <div className="w-[82%] md:w-[92%] lg:w-[82%] xl:w-[86%]">
        <Topbar />
        <div className="h-[90%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
