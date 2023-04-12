import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import { FiLoader } from "react-icons/fi";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />

      {isLoading ? (
        <div className="text-[100px] w-full h-[100vh] grid place-items-center">
          <FiLoader />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Root;
