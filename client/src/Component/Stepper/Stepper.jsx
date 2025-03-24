import React from "react";

export default function Stepper({ steps, currentStep }) {
  return (
    <div>
      <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`ms-6 ${index !== steps.length - 1 ? "mb-20" : ""}`}
          >
            <span
              className={`absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900
                ${
                  index <= currentStep
                    ? "bg-green-200 dark:bg-green-900"
                    : "bg-gray-100 dark:bg-gray-700"
                }
              `}
            >
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d={step.iconPath}
                  className={`${
                    index <= currentStep
                      ? "text-green-500 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                />
              </svg>
            </span>
            <h3 className="font-medium leading-tight">{step.title}</h3>
          </li>
        ))}
      </ol>
    </div>
  );
}
