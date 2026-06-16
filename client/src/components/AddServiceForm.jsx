import { useState } from "react";
import { createService } from "../services/serviceService";

function AddServiceForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createService({
        title,
        description,
        price,
      });

      alert("Service Created Successfully");

      setTitle("");
      setDescription("");
      setPrice("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Service Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <textarea
        placeholder="Service Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        rows="4"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Create Service
      </button>
    </form>
  );
}

export default AddServiceForm;