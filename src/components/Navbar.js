import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between p-4 z-50 w-full">
        <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
          <a href="/">MOVIE RECOMMENDER</a>
        </h1>
        <div>
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:text-black transition-all duration-300">
            <a href="/recom">Pick Movies</a>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
