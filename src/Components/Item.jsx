import React from "react";
import { Link } from "react-router-dom";

const Item = ({ title, img, id }) => {
  // console.log(id);
  return (
    <div className="w-[19%]">
      <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <Link to={`${id}`}>
        <h1 className="text-center text-lg">{title}</h1>
      </Link>
    </div>
  );
};

export default Item;
