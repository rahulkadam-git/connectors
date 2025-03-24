import React, { useEffect, useState } from "react";
import Add from "../../../public/create.svg";
import searchImage from "../../../public/search.svg";
import { connectorFormFields } from "../../utils/connectors";
import connectorImage from "../../../public/connector-image.jpg";
import { Link } from "react-router-dom";

export default function Connectors() {
  const [selectType, setSelectedType] = useState("");
  const [showConnectors, setShowConnectors] = useState([]);

  useEffect(() => {
    setShowConnectors(connectorFormFields);
  }, []);

  const selectedType = (type) => {
    setSelectedType(type);
    const availableConnectors = connectorFormFields.filter(
      (x) => x.type === type
    );

    setShowConnectors(availableConnectors);
  };

  const handleSearch = (e, value) => {
    e.preventDefault();
    const availableConnectors = connectorFormFields.filter((x) =>
      x.name.toLowerCase().includes(value.toLowerCase())
    );
    
    setShowConnectors(availableConnectors);
  };
  return (
    <div className="w-full h-full  flex flex-wrap">
      {/* LEFT */}
      <div className="w-[28%] lg:w-[28%] md:w-[100%] sm:w-[100%] xl:w-[20%] bg-white p-2 ">
        <div className="flex items-center justify-between">
          <p className="font-bold">Connector</p>
          <Link
            to="/create-connector"
            className="flex gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <img src={Add} alt="" width={10} height={10} /> New
          </Link>
        </div>
        <div className="w-full pt-4">
          <div className="sm:hidden">
            <label for="tabs" className="sr-only">
              Select your country
            </label>
            <select
              id="tabs"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Sources</option>
              <option>Destination</option>
            </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li className="w-full focus-within:z-10">
              <button
                className="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                onClick={() => selectedType("source")}
              >
                Sources
              </button>
            </li>
            <li className="w-full focus-within:z-10">
              <button
                className="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                onClick={() => selectedType("destination")}
              >
                Destination
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <form class="max-w-sm mx-auto">
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={searchImage} alt="" />
              </div>
              <input
                type="text"
                id="email-address-icon"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search sources"
                onChange={(e) => handleSearch(e, e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="">
          {showConnectors.length === 0 ? (
            <>
              <img src={connectorImage} alt="" />
              <p className="text-center font-bold">
                Start by adding a connector to structure your workflow
              </p>
            </>
          ) : (
            <div className="">
              {showConnectors.map((connector, index) => (
                <Link to={`/update/${connector.id}`}>
                  {" "}
                  <div
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5 cursor-pointer"
                    key={index}
                  >
                    <p className="text-[12px] font-bold">{connector.name}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[10px]">{connector.type}</p>
                      <p className="text-[10px]">
                        createdAt {connector.createdAt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-[72%] md:w-[100%] lg:w-[72%] sm:w-[100%] xl:w-[80%] flex items-center justify-center">
        <Link
          to="/create-connector"
          className="flex gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <img src={Add} alt="" width={10} height={10} /> New
        </Link>
      </div>
    </div>
  );
}
