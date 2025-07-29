import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUsers = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault(); // ✅ correct method name
    console.log("Form Submitted:", { Name, Age, Email });

    axios.post("https://crud-app-basic.onrender.com/createUser", { name: Name, age: Age, email: Email })
      .then((result) => {
        console.log("User created successfully:", result.data);
        alert("User created successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        alert("Error creating user");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cyan-300">
      <div className="bg-white w-full max-w-md rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add USER</h2>

        <form onSubmit={Submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-200 rounded-xl p-2 w-full outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              placeholder="Enter age"
              value={Age}
              onChange={(e) => setAge(e.target.value)}
              className="bg-gray-200 rounded-xl p-2 w-full outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 rounded-xl p-2 w-full outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 p-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsers;
