import React, { useState } from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import userApi from "../api/userApi";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const initialaData = { userName: "", email: "", password: "" };
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(initialaData);
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    setError(null);
    e.target.disabled = true;
    if (!(data.userName || data.email)) {
      setError("Username or email must required");
      e.target.disabled = false;
      return;
    }
    userApi
      .login(data)
      .then((res) => {
        dispatch(login(res.data.userDetails));
      })
      .catch((err) => {
        setError(err.response.data.error);
        dispatch(logout());
      })
      .finally(() => {
        e.target.disabled = false;
        setData(initialaData)
      });
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="my-4">
        <Logo />
      </div>

      <p className="font-bold text-zinc-600">Login to your VideoLab account</p>

      <div className=" my-3 border p-3 md:p-5 rounded-lg shadow-md">
        <div className="border p-2 rounded-md mb-4">
          <div className="">
            <label
              htmlFor="username"
              className=" font-semibold text-purple-800"
            >
              Username:
            </label>
            <br />
            <input
              id="username"
              name="userName"
              type="text"
              className="outline-none border py-1 px-3 rounded-lg my-1"
              placeholder="username"
              value={data.userName}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </div>
          <p className="text-center">or</p>
          <div className="">
            <label htmlFor="email" className=" font-semibold text-purple-800">
              Email:
            </label>
            <br />
            <input
              id="email"
              name="email"
              type="email"
              className="outline-none border py-1 px-3 rounded-lg my-1"
              placeholder="username"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className=" font-semibold text-purple-800">
            Password:
          </label>
          <br />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="outline-none border py-1 px-3 rounded-lg my-1"
            placeholder="password"
            name="password"
            value={data.password}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            required
          />
          <button
            className="absolute bottom-3 right-6 md:right-8 text-sm opacity-50"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            show
          </button>
        </div>
        <div className=" flex justify-center">
          <button
            className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-400 disabled:bg-purple-300 font-semibold"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
        <p className="text-red-500 text-center mt-2">{error ? error : null}</p>
        <p className="text-center my-2 opacity-70 text-sm">
          New user?{" "}
          <span
            className=" hover:opacity-100 hover:text-purple-600 hover:cursor-pointer font-semibold"
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
