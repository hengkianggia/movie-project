import React from "react";
import { FiLoader } from "react-icons/fi";

const Loading = ({className}) => {
  return (
    <div
      className={`text-[100px] w-full h-[100vh] grid place-items-center ${className}`}
    >
      <FiLoader />
    </div>
  );
};

export default Loading;
