import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import toast from "react-hot-toast";
// import axiosInstance from "../lib/axios";
const HomePage = () => {
  // await axiosInstance.get("/session/123")
  return (
    <div>
      {/* <h1 className="text-red-500 bg-orange-400 p-10 text-3xl">
        Welcome to the app
      </h1> */}
      <button
        className="btn btn-secondary"
        onClick={() => toast.error("This is an error message!")}
      >
        Click Me
      </button>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </div>
  );
};

export default HomePage;
