import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[65vh] bg-center bg-no-repeat flex items-end bg-[#190425]"
      style={{
        backgroundImage: `url(https://wallpapers.com/images/hd/hd-john-wick-chapter-2-movie-ah9vwb0b6r3ugvm3.jpg)`,
        backgroundSize: "contain",
      }}
    >
      <div className="text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white text-center w-full">
        John Wick
      </div>
    </div>
  );
}

export default Banner;
