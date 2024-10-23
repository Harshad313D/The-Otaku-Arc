import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  // const login = async (data) => {
  //   setError("");
  //   try {
  //     const session = await authService.login(data);
  //     if (session) {
  //       const userData = await authService.getCurrentUser();
  //       if (userData) {
  //         dispatch(authLogin(userData));
  //         navigate("/");
  //       } else {
  //         setError("User data not found after login");
  //       }
  //     } else {
  //       setError("Session could not be established");
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // const login = async (data) => {
  //   setError("");
  //   try {
  //     const session = await authService.login(data); // Now the session will be returned correctly
  //     console.log(session); // Log the session to check if it's returned
  //     if (session) {
  //       const userData = await authService.getCurrentUser(); // Fetch the current user data
  //       if (userData) {
  //         dispatch(authLogin(userData)); // Dispatch the user data to Redux
  //         navigate("/"); // Navigate to the home page after successful login
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     setError(error.message);
  //   }
  // };
  const login = async (data) => {
    setError(""); // Clear previous errors
    try {
      // Call login service
      await authService.login(data); // Try logging in with the provided data

      // After login, manually check if the user is authenticated
      const userData = await authService.getCurrentUser(); // Get the current user session

      if (userData) {
        // If user data is present, dispatch login and navigate to the home page
        dispatch(authLogin(userData));
        navigate("/"); // Navigate to the home page
        console.log("user logged in with :", data.email);
      } else {
        setError("User is authenticated but session could not be fetched.");
      }
    } catch (error) {
      // Display error if login fails
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full font-rubik max-w-lg bg-green-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:text-red-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
