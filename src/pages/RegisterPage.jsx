import React, { useRef, useState } from "react";
import Logo from "../components/Logo.jsx";
import { useNavigate } from "react-router-dom";
import userApi from "../api/userApi.js";

function RegisterPage() {
  const initialData = {
    fullName: "",
    userName: "",
    email: "",
    password1: "",
    password: "",
    profileImage: "",
    coverImage: "",
  };
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.target.disabled = true;
    if (data.password1 !== data.password) {
      alert("Wrong confirm password");
      e.target.disabled = false;
      return;
    }
    const formData = new FormData();
    const keys = Object.keys(data);
    const values = Object.values(data);
    keys.forEach((item, index) => {
      formData.append(item, values[index]);
    });
    userApi
      .register(formData)
      .then((res) => {
        alert(res.message);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setData(initialData);
        e.target.disabled = false;
      });
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) setImagePreview(null);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    setData({ ...data, [e.target.name]: e.target.files[0] });
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-3">
      <div className="my-4 mt-10">
        <Logo />
      </div>

      <p className="font-bold text-zinc-600">
        Welcome to VideoLab, register yourself for first time
      </p>

      <div className=" my-3 border p-3 md:p-5 rounded-lg shadow-md w-60 sm:w-72 md:w-[22rem]">
        <div className="mb-4">
          <label htmlFor="fullname" className=" font-semibold text-purple-800">
            Full name:
          </label>
          <br />
          <input
            id="fullname"
            name="fullName"
            type="text"
            className="w-full outline-none border py-1 px-3 rounded-lg my-1"
            placeholder="Arnab Jana"
            onChange={handleChange}
            value={data.fullName}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className=" font-semibold text-purple-800">
            Email:
          </label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            className="w-full outline-none border py-1 px-3 rounded-lg my-1"
            placeholder="xyz@gmail.com"
            onChange={handleChange}
            value={data.email}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className=" font-semibold text-purple-800">
            Create Username:
          </label>
          <br />

          <input
            id="username"
            name="userName"
            type="text"
            className="w-full outline-none border py-1 px-3 rounded-lg my-1"
            placeholder="My Channel"
            onChange={handleChange}
            value={data.userName}
            maxLength={10}
          />
          <p className="text-sm opacity-45">
            * Your Channel name would be same as username
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="profileImage"
            className=" font-semibold text-purple-800"
          >
            Profile Image:
          </label>
          <br />

          <input
            id="profileImage"
            name="profileImage"
            type="file"
            accept="image/*"
            className="w-full outline-none border py-1 px-3 rounded-lg my-1"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="w-full">
              <img src={imagePreview} alt="Preview" className="w-full" />
            </div>
          )}
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password1" className=" font-semibold text-purple-800">
            Create Password:
          </label>
          <br />
          <input
            id="password1"
            name="password1"
            type={showPassword ? "text" : "password"}
            className="w-full outline-none border py-1 px-3 rounded-lg my-1"
            placeholder="password"
            onChange={handleChange}
            value={data.password1}
          />
          <button
            className="absolute bottom-3 right-2 text-sm opacity-50"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            show
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className=" font-semibold text-purple-800">
            Confirm Password:
          </label>
          <br />
          <input
            id="password"
            name="password"
            type="text"
            className="w-full outline-none border py-1 px-3 rounded-lg my-1"
            placeholder="password"
            onChange={handleChange}
            value={data.password}
          />
        </div>

        <div className=" flex justify-center">
          <button
            className="px-3 py-1 bg-purple-600 text-white rounded-lg disabled:bg-purple-300 hover:bg-purple-400 font-semibold"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
        <p className="text-center mt-2 opacity-70 text-sm">
          Existing user?{" "}
          <span
            className=" font-semibold hover:opacity-100 hover:text-purple-600 hover:cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
