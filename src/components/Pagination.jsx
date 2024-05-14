import React from "react";

function Pagination(props) {
  let { pageNumProp, onNextProp, onPrevProp } = props;

  return (
    <div className="flex justify-center my-4">
      <div
        onClick={onPrevProp}
        className="border-2 border-r-0 p-2 rounded-l-xl  border-blue-400 cursor-pointer w-[75px] text-center"
      >
        Previous
      </div>
      <div className="border-2 border-blue-400 p-3 border-r-0">
        {pageNumProp}
      </div>
      <div
        onClick={onNextProp}
        className="border-2 p-2 rounded-r-xl  border-blue-400 cursor-pointer w-[75px] text-center"
      >
        Next
      </div>
    </div>
  );
}

export default Pagination;
