import React from "react";
import { FiLoader } from "react-icons/fi";

const Loading = ({className}) => {
  return (
    <div className={`w-full h-[80vh] grid place-items-center`}>
      <div className={`text-[100px] animate-spin ${className}`}>
        <FiLoader />
      </div>
    </div>
  );
};

export default Loading;
