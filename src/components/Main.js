import React from "react";
import Browse from "./Browse";
import Cards from "./Cards";

const Main = () => {
  return (
    <div className="w-full px-4 lg:px-10">
      {/* Browse */}
      <Browse />
      {/* Cards */}
      <Cards />
    </div>
  );
};

export default Main;
