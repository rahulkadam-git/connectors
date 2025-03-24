import React from "react";
import { providers } from "../../utils/providers";

export default function SelectService({ selectServiceData }) {
  const {
    setSelectedService,
    handleServiceChange,
    setName,
    setType,
    type,
    name,
    selectedService,
  } = selectServiceData;
  console.log(type, name, selectedService);

  return (
    <div className="px-5">
      <form className="p-5 rounded-lg " onSubmit={handleServiceChange}>
        <div className="mb-12">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="mb-12 flex items-center justify-between">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Type
          </label>

          <div class="inline-flex rounded-md shadow-xs" role="group">
            <button
              type="button"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium border border-gray-900 rounded-l-lg 
                ${
                  type === "source"
                    ? "bg-gray-900 text-white"
                    : "bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              onClick={() => setType("source")}
            >
              <svg
                class="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Source
            </button>

            <button
              type="button"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium border border-gray-900 rounded-e-lg 
                ${
                  type === "destination"
                    ? "bg-gray-900 text-white"
                    : "bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              onClick={() => setType("destination")}
            >
              <svg
                class="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>
              Destination
            </button>
          </div>
        </div>
        <div>
          {providers.map((prov, index) => (
            <button
              type="button"
              className={`inline-flex items-center px-4 py-2 m-2 text-sm font-medium border border-gray-900 rounded-lg 
                ${
                  selectedService === prov.name
                    ? "bg-gray-900 text-white"
                    : "bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              key={index}
              onClick={() => setSelectedService(prov.name)}
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              {prov.name}
            </button>
          ))}
        </div>
        {/* <div className="flex justify-end">
          <button
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Continue
          </button>
        </div> */}
      </form>
    </div>
  );
}
