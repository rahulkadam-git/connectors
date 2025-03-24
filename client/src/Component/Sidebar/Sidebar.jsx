import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "/home.svg";
import projectsIcon from "/layer.png";
import dataSource from "/database.png";
import modelsIcon from "/3d.png";
import settingsIcon from "/settings.svg";
import connectorIcon from "/connector.png";

export default function Sidebar() {
  const location = useLocation();
  const menus = [
    { title: "Home", icon: homeIcon, path: "/" },
    { title: "Projects", icon: projectsIcon, path: "/projects" },
    { title: "Data Sources", icon: dataSource, path: "/data-sources" },
    { title: "Models", icon: modelsIcon, path: "/models" },
    { title: "Settings", icon: settingsIcon, path: "/settings" },
    { title: "Connectors", icon: connectorIcon, path: "/connectors" },
  ];
  return (
    <div className="mt-12 p-4">
      {menus.map((menu, index) => (
        <Link
          key={index}
          to={menu.path}
          className={`flex items-center gap-4 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-200 ${
            location.pathname === menu.path ? "bg-gray-300 font-bold" : ""
          }`}
        >
          <img src={menu.icon} alt={menu.title} width={20} height={20} />
          <p className="hidden lg:block">{menu.title}</p>
        </Link>
      ))}
    </div>
  );
}
