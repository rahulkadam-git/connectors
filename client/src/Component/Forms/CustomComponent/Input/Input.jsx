import React from "react";

export default function Input({ type = "text", ...props }) {
  let classNames;
  if (type === "text" || type === "password") {
    classNames =
      "mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500";
  }
  if (type === "radio") {
    classNames =
      "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600";
  }

  return <input type={type} {...props} className={classNames} />;
}
