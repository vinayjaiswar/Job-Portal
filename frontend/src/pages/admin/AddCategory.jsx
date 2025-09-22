import React, { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";

const AddCategory = () => {
  const { navigate } = useContext(AppContext);
  const [categoryData, setCategoryData] = useState({
    name: "",
    icon: "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setCategoryData({ ...categoryData, logo: selectedFile });
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("categoryData", categoryData);
    navigate("/admin");
  };
  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center max-w-4xl w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm
    rounded shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl mb-6 text-center font-semibold text-gray-800">
          Register a new category
        </h2>
        <div className="w-full my-4">
          {preview && (
            <div>
              <img
                src={preview}
                alt="Profile Preview"
                className="w-24 h-24 object-cover rounded-full border shadow"
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:bg-blue-50 file:text-blue-700
                file:text-sm file:font-semibold
                hover:file:bg-blue-100 cursor-pointer"
          />
        </div>
        <label htmlFor="name">Category Name</label>
        <input
          type="text"
          name="name"
          value={categoryData.name}
          onChange={handleChange}
          className="w-full border mt-1 border-gray-500/3 focus:border-indigo-500  outline-none rounded py-2.5 px-4"
          placeholder="Enter category name"
        />
        <button
          type="submit"
          className="w-full my-3 bg-primary active:scale-95 transition py-2.5 rounded text-white"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
