import React, { useState } from "react";
import { connectorFormFields } from "../../utils/connectors";
import Toast from "../../Component/Toast/Toast";

export default function FinalData({ collectedData }) {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    connectorFormFields.push(collectedData);
    
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="relative">
      <button
        className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {showToast && <Toast message="Data added successfully!" onClose={() => setShowToast(false)} />}
    </div>
  );
}
