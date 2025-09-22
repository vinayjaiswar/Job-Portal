import React from "react";
import { useState } from "react";

const Profile = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    loacation: "",
    education: "",
    experience: "",
    skills: "",
    about: "",
    profileImage: null,
    resume: null,
  });

  const [preview, setPreview] = useState({});
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setformData({ ...formData, [name]: files[0] });
    } else {
      setformData({ ...formData, [name]: files[0] });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="text-w-3xl mx-auto mt-8 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
          )}
        </div>
        <div>
          <label className="block mb-1 font font-semibold">Profile Image</label>
          <input type="file" name="profileImage" onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2 bg-gray-100"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">skills</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="2"
            placeholder="React,Node.js,Mongodb"
          ></textarea>
        </div>

        <div>
          <label className="">Resume (Pdf/Doc)</label>
          <input type="file" name="resume" onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
