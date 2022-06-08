import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../features/userSlice";

const BASE_URL = "api/v1/";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const navigate = useNavigate();
  const handleLogin = (e: any) => {
    e.preventDefault();
    // move axios to service
    axios
      .post(BASE_URL + "login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data) {
          sessionStorage.setItem("user", res.data.accessToken);
          dispatch(login({ user: res.data }));
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                  />
                  <label className="form-check-label inline-block text-gray-800">
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 active:text-indigo-800 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </a>
              </div>

              <button
                onClick={handleLogin}
                className="inline-block px-7 py-3 bg-indigo-600 text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
