import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connectorFormFields } from "../../utils/connectors";
import Toast from "../../Component/Toast/Toast";
import MoreImg from "../../../public/more.svg";

export default function UpdateConnector() {
  const { id } = useParams();
  const navigate = useNavigate();
  const connector = connectorFormFields.find((c) => c.id === parseInt(id));
  const [openMore, setMore] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({ ...connector });
  const [showToast, setShowToast] = useState(false);

  if (!connector) {
    return <div className="p-4">Connector not found!</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = connectorFormFields.findIndex((c) => c.id === connector.id);
    if (index !== -1) {
      connectorFormFields[index] = {
        ...connectorFormFields[index],
        ...formData,
      };
    
      setMessage("Connector updated successfully!")
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/");
      }, 2000);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();

    const index = connectorFormFields.findIndex((c) => c.id === connector.id);

    if (index !== -1) {
      connectorFormFields.splice(index, 1);
      setMessage("Connector Deleted successfully!")
   
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <div className="relative flex justify-between items-center">
        <h2 className="text-xl font-bold mb-4">Update Connector</h2>
        <button onClick={() => setMore(!openMore)}>
          <img src={MoreImg} alt="" />
        </button>

        {openMore && (
          <button
            onClick={handleDelete}
            className="absolute right-0 top-10 px-4 py-2 bg-gray-800 text-white rounded-md"
          >
            Delete
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block mb-2">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Update
          </button>
        </div>
      </form>

      {showToast && <Toast message={message} />}
    </div>
  );
}
