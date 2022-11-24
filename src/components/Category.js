import React from "react";

const Category = ({ title, icon, css }) => {
  return (
    <div className="relative shadow-lg shadow-gray-400 rounded-full">
      <div className="bg-[#9147ff] w-[11rem] sm:w-[15rem] h-[3rem] rounded-full">
        <p className="text-white font-bold text-[30px] px-4">{title}</p>
      </div>
      <div className={` absolute   ${css} `}>
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default Category;
